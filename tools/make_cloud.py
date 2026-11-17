"""Convert the SFM bunny reconstruction into assets for the website.

Inputs : ../SFM/legacy/outputs/bunny/reconstruction/{points3D,poses}.json
Outputs: public/cloud.json  (normalised points, track lengths, camera centres + rotations)
         tools/out/hero_cloud.svg (orthographic projection, used in the Figma mockup)
Run from website/:  python tools/make_cloud.py
"""
import json, pathlib, numpy as np

ROOT = pathlib.Path(__file__).resolve().parents[1]
SRC = ROOT.parent / "SFM/legacy/outputs/bunny/reconstruction"
pts_raw = json.load(open(SRC / "points3D.json"))
P = np.asarray(pts_raw["points3D"], np.float64)
tracks = [len(t) if hasattr(t, "__len__") else 1 for t in pts_raw["tracks"]]
poses = json.load(open(SRC / "poses.json"))

# robust centre/scale: drop the 1% farthest outliers
c = np.median(P, 0)
d = np.linalg.norm(P - c, axis=1)
keep = d < np.quantile(d, 0.99)
P, tracks = P[keep], np.asarray(tracks)[keep]
c = P.mean(0); s = np.abs(P - c).max()
Pn = (P - c) / s

cams = []
for k in sorted(poses, key=int):
    R = np.asarray(poses[k]["R"]); t = np.asarray(poses[k]["t"]).reshape(3)
    C = -R.T @ t
    cams.append({"id": int(k), "c": ((C - c) / s).round(4).tolist(), "R": R.round(4).tolist()})

# flip Y/Z so "up" is +Y in three.js (OpenCV camera frame: y down, z forward)
F = np.diag([1, -1, -1])
Pn = Pn @ F.T
for cam in cams:
    cam["c"] = (F @ np.asarray(cam["c"])).round(4).tolist()
    cam["R"] = (np.asarray(cam["R"]) @ F).round(4).tolist()  # world->cam with flipped world

out = {"source": "SFM/legacy bunny reconstruction", "n_points": int(len(Pn)), "n_cameras": len(cams),
       "points": Pn.round(4).ravel().tolist(), "track_len": tracks.astype(int).tolist(), "cameras": cams}
(ROOT / "public").mkdir(exist_ok=True)
json.dump(out, open(ROOT / "public/cloud.json", "w"), separators=(",", ":"))

# SVG projection for the mockup (slight yaw for a 3/4 view)
a = np.deg2rad(35); Ry = np.array([[np.cos(a), 0, np.sin(a)], [0, 1, 0], [-np.sin(a), 0, np.cos(a)]])
Q = Pn @ Ry.T
W = H = 640; sc = 210
x = W / 2 + Q[:, 0] * sc; y = H / 2 - Q[:, 1] * sc; z = (Q[:, 2] - Q[:, 2].min()) / np.ptp(Q[:, 2])
order = np.argsort(Q[:, 2])
circ = []
for i in order:
    col = "#22D3EE" if z[i] > 0.5 else "#76B900"
    circ.append(f'<circle cx="{x[i]:.1f}" cy="{y[i]:.1f}" r="{1.0 + 1.2 * z[i]:.2f}" fill="{col}" fill-opacity="{0.35 + 0.6 * z[i]:.2f}"/>')
lines = []
for cam in cams:
    C = np.asarray(cam["c"]) @ Ry.T
    cx, cy = W / 2 + C[0] * sc, H / 2 - C[1] * sc
    lines.append(f'<rect x="{cx-3:.1f}" y="{cy-3:.1f}" width="6" height="6" fill="none" stroke="#E8EDF2" stroke-opacity="0.55" stroke-width="1"/>')
svg = f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">' + "".join(lines + circ) + "</svg>"
(ROOT / "tools/out").mkdir(exist_ok=True)
(ROOT / "tools/out/hero_cloud.svg").write_text(svg)
print(f"points={len(Pn)} cameras={len(cams)} svg_bytes={len(svg)} json_bytes={(ROOT/'public/cloud.json').stat().st_size}")
print("cam extent", np.abs(np.array([c_['c'] for c_ in cams])).max(0))

# compact SVG for the Figma mockup (use_figma has a 50 kB script limit)
rng = np.random.default_rng(0)
sel = rng.choice(len(Q), 320, replace=False)
bins = {}
for i in sel:
    b = min(3, int(z[i] * 4))
    bins.setdefault(b, []).append(f'<circle cx="{x[i]:.0f}" cy="{y[i]:.0f}" r="{1.4 + 0.5 * b:.1f}"/>')
cols = ["#76B900", "#76B900", "#22D3EE", "#22D3EE"]; ops = [0.35, 0.6, 0.7, 0.95]
g = "".join(f'<g fill="{cols[b]}" fill-opacity="{ops[b]}">' + "".join(v) + "</g>" for b, v in sorted(bins.items()))
small = f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">{g}</svg>'
(ROOT / "tools/out/hero_cloud_small.svg").write_text(small)
print("small svg bytes", len(small))
