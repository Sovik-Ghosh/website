// All site copy lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Sovik Ghosh",
  role: "Computer Vision Engineer",
  company: "VivaCity",
  location: "London, UK",
  rotating: ["real-time perception", "3D reconstruction", "GPU inference", "edge deployment"],
  intro:
    "I build computer vision systems that run in real time — from multi-view geometry to hand-tuned CUDA kernels and TensorRT inference on NVIDIA hardware. Next: vision-language-action models on edge devices.",
  email: "gsovik.official@gmail.com",
  linkedin: "https://www.linkedin.com/in/sovik-ghosh-5b2236136/",
  github: "https://github.com/Sovik-Ghosh",
  medium: "https://medium.com/@gsovik.official/",
  resume: "https://drive.google.com/file/d/1YAZtT5DWWquHKLslImM0NMkxUQWYCLwr/view?usp=sharing",
};

// Optional Spline scene (public URL ending in .splinecode). Leave empty to use the built-in fallback.
export const splineScene = import.meta.env.VITE_SPLINE_SCENE || "";

export const sections = [
  { id: "home", num: "01", label: "Capture" },
  { id: "trajectory", num: "02", label: "Trajectory" },
  { id: "reconstruct", num: "03", label: "Reconstruct" },
  { id: "toolkit", num: "04", label: "Toolkit" },
  { id: "foundations", num: "05", label: "Foundations" },
  { id: "connect", num: "06", label: "Connect" },
];

export const now = [
  {
    kicker: "CUDA",
    title: "Kernel lab",
    body: "GEMM and memory kernels benchmarked against measured RTX 5060 Ti limits — 23.2 TFLOP/s FP32, 333 GB/s.",
  },
  {
    kicker: "3D",
    title: "SFM → C++/CUDA",
    body: "Structure-from-Motion rebuilt as a tested C++/CUDA library: PnP, triangulation, Schur-complement BA.",
  },
  {
    kicker: "DATA",
    title: "Low-light detection",
    body: "Data-centric label fixes for a fixed YOLO detector on ExDark — 3LC Kaggle challenge.",
  },
  {
    kicker: "NEXT",
    title: "VLA on the edge",
    body: "Real-time vision-language-action models on embedded NVIDIA hardware.",
  },
];

export const experience = [
  {
    date: "Sep 2026 — Present",
    current: true,
    role: "Computer Vision Engineer",
    org: "VivaCity",
    meta: "London · Hybrid · Full-time",
    body: [
      "Computer vision for VivaCity's AI transport sensors, which count and classify road users across UK cities.",
    ],
    tags: ["Computer Vision", "Edge AI", "Smart Cities"],
  },
  {
    date: "Jun 2025 — Aug 2026",
    role: "Computer Vision Engineer — KTP Associate",
    org: "Birmingham City University × COBA Plastics Group",
    meta: "On-site · Full-time",
    body: [
      "Led a £200K Innovate UK-funded Knowledge Transfer Partnership transforming quality control and inspection in plastics manufacturing — bridging academic research and the factory floor.",
      "Built a real-time line-scan inspection system: a two-stream detect-then-segment network served by a TensorRT C++ runtime on NVIDIA Jetson.",
      "Shipped a DeepStream segmentation pipeline on Jetson.",
    ],
    tags: ["TensorRT", "C++", "Jetson", "DeepStream", "Line-scan"],
  },
  {
    date: "Nov 2023 — Dec 2024",
    role: "Machine Learning Engineer",
    org: "POMO Robotics",
    meta: "Glasgow · Hybrid · Part-time",
    body: [
      "Structure-from-Motion on AWS (Airflow, Spark, SuperGlue, COLMAP) over 250 GB+ of imagery — 1.5 cm RMSE, £3K/month saved.",
      "BEVFusion + PointPillars via TensorRT INT8 on DRIVE Orin: 90% vehicle detection at 40 ms, 60% less memory.",
      "YOLOv8 + EKF sensor fusion in DriveWorks: 70% fewer false positives at 30 FPS on the production fleet.",
    ],
    tags: ["DriveWorks", "TensorRT", "BEVFusion", "AWS", "Airflow"],
  },
  {
    date: "Jul — Aug 2022",
    role: "Data Science Intern",
    org: "Fittlyf",
    meta: "Internship",
    body: [
      "Fine-tuned BERT/DistilBERT for review analysis (80% F1) and built an AWS Lambda ETL handling 50K+ reviews a day.",
    ],
    tags: ["PyTorch", "NLP", "AWS Lambda"],
  },
  {
    date: "Mar — Jun 2022",
    role: "AI Engineer Intern",
    org: "Opsis Systems",
    meta: "Internship",
    body: [
      "Aerial-imagery detection with YOLOv5 + Detectron2 at 90% mAP; TensorRT + CUDA Graphs for 30 FPS at 2560×1440.",
    ],
    tags: ["YOLO", "Detectron2", "TensorRT", "CUDA"],
  },
];

export const projects = [
  {
    kicker: "3D Vision",
    title: "SFM",
    featured: true,
    body: "Incremental Structure-from-Motion rebuilt as a C++/CUDA library: FAST/ORB features, F-RANSAC, PnP, triangulation and Schur-complement bundle adjustment. The point cloud behind this page is its output.",
    tags: ["C++17", "CUDA 13", "Eigen", "CMake"],
    link: "https://github.com/Sovik-Ghosh/SFM",
  },
  {
    kicker: "Graph learning",
    title: "SelfGNNplus",
    body: "Self-supervised GNN recommender with interval-level temporal dependencies. Beats SelfGNN + 18 baselines on 4 datasets: up to +7.5% HR@10, +11.7% NDCG@10.",
    tags: ["PyTorch", "GNN", "TCN"],
    link: "https://github.com/Sovik-Ghosh/SelfGNNplus",
  },
  {
    kicker: "Pose",
    title: "GymJam",
    body: "Real-time workout assistant — MediaPipe pose estimation for form feedback and rep counting.",
    tags: ["MediaPipe", "OpenCV", "Python"],
    link: "https://github.com/Sovik-Ghosh/GymJam-AI-assistant-using-mediapipe",
  },
  {
    kicker: "Embedded",
    title: "HeartGuard",
    body: "Qt5 app on Raspberry Pi monitoring heart rate and SpO₂ from ECG and PPG sensors in real time.",
    tags: ["C++", "Qt5", "Raspberry Pi"],
    link: "https://github.com/RajasJoshi/HeartGuard",
  },
  {
    kicker: "Conversational",
    title: "Movera",
    body: "Movie-recommendation chatbot built with Rasa, tuned to each user's preferences.",
    tags: ["Rasa", "scikit-learn"],
    link: "https://github.com/Sovik-Ghosh/Movera-movie-recommendation-using-RASA",
  },
  {
    kicker: "Bio",
    title: "Protein: primary → secondary",
    body: "Fully-connected network predicting protein secondary structure from amino-acid sequences.",
    tags: ["PyTorch", "NumPy"],
    link: "https://github.com/Sovik-Ghosh/Protien-Primary-to-Secondary-using-FCNN",
  },
];

export const toolkit = [
  { group: "3D Vision", items: ["Structure from Motion", "Multi-view geometry", "Bundle adjustment", "SLAM", "Visual odometry", "Stereo & depth"] },
  { group: "Perception", items: ["YOLO", "Mask R-CNN", "U-Net", "PointPillars", "BEVFusion", "SuperGlue"] },
  { group: "GPU & Inference", items: ["CUDA", "TensorRT", "DeepStream", "Jetson", "DRIVE Orin", "INT8 quantisation"] },
  { group: "Languages", items: ["C++17", "Python", "CUDA C++", "CMake", "GoogleTest"] },
  { group: "ML Stack", items: ["PyTorch", "TensorFlow", "OpenCV", "Eigen", "PCL", "MLflow"] },
  { group: "Infra", items: ["Docker", "Kubernetes", "AWS", "Airflow", "Spark", "GitHub Actions"] },
];

export const education = [
  {
    when: "2023 — 2024",
    title: "MSc Robotics & Artificial Intelligence",
    org: "University of Glasgow",
    note: "International Leadership Scholarship",
  },
  {
    when: "2019 — 2023",
    title: "BTech Computer Science & Engineering",
    org: "MAKAUT",
    note: "GPA 9.15 / 10 · Dean's List",
  },
  {
    when: "Writing",
    title: "What is 3D in Computer Vision?",
    org: "Medium",
    note: "An introduction to 3D perception for robotics",
    link: "https://medium.com/@gsovik.official/what-is-3d-in-computer-vision-d80e07264feb",
  },
];
