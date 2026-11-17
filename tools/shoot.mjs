// Visual check: drive headless Chrome over CDP in real time, wheel-scroll to
// each section, save screenshots, and report elements stuck at opacity 0.
// Usage: node tools/shoot.mjs [url] [outDir]   (needs `npm run preview` running)
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const url = process.argv[2] || "http://localhost:4173/";
const out = resolve(process.argv[3] || "tools/out/shots");
mkdirSync(out, { recursive: true });
const port = 9333;
const chrome = spawn("google-chrome", [
  "--headless=new", "--no-sandbox", `--remote-debugging-port=${port}`,
  `--user-data-dir=${resolve(".chrome-tmp")}`, "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
  "--hide-scrollbars", "--window-size=1440,900", "about:blank",
], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let wsUrl;
for (let i = 0; i < 50 && !wsUrl; i++) {
  await sleep(200);
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    wsUrl = list.find((t) => t.type === "page")?.webSocketDebuggerUrl;
  } catch {}
}
const ws = new WebSocket(wsUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result ?? m); pending.delete(m.id); }
};
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const evalJs = async (expr) => (await send("Runtime.evaluate", { expression: expr, returnByValue: true })).result?.value;

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url });
await sleep(6000);

const shots = (process.env.SHOTS || "home,trajectory,reconstruct,toolkit,foundations,connect").split(",");
const report = {};
for (const sec of shots) {
  const target = await evalJs(`(() => { const el = document.getElementById(${JSON.stringify(sec)}); return el ? el.getBoundingClientRect().top + scrollY - 90 : 0 })()`);
  // wheel-scroll like a user so IntersectionObservers fire naturally
  for (let k = 0; k < 60; k++) {
    const y = await evalJs("scrollY");
    const d = target - y;
    if (Math.abs(d) < 5) break;
    await send("Input.dispatchMouseEvent", { type: "mouseWheel", x: 720, y: 450, deltaX: 0, deltaY: Math.max(-600, Math.min(600, d)) });
    await sleep(120);
  }
  await sleep(2200);
  report[sec] = await evalJs(`(() => {
    const hidden = [...document.querySelectorAll('main *')].filter(el => {
      const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight || !el.textContent.trim()) return false;
      return getComputedStyle(el).opacity === '0';
    });
    return { scrollY, hiddenInView: hidden.length };
  })()`);
  const shot = await send("Page.captureScreenshot", { format: "png" });
  writeFileSync(`${out}/${sec}.png`, Buffer.from(shot.data, "base64"));
}
console.log(JSON.stringify(report));
ws.close();
chrome.kill();
