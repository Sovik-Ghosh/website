import {
  nitk,
  glasgow,
  pomo_robotics,
  fittlyf,
  makaut,
  opsis,
  medium,
  chess,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiTensorflow,
  SiOpencv,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiApacheairflow,
  SiApachespark,
  SiPytorch,
  SiYolo,
  SiNvidia,
  SiCnn,
  SiDvc,
  SiDgraph,
  SiRaspberrypi,
  SiQt,
  SiNumpy,
  SiScikitlearn,
  SiRasa
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1YAZtT5DWWquHKLslImM0NMkxUQWYCLwr/view?usp=sharing";
export const repoLink = "https://github.com/Sovik-Ghosh/website";

export const callToAction = "https://www.linkedin.com/in/sovik-ghosh-5b2236136/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: glasgow,
    title: "University of Glasgow",
    degree: "Master of Science",
    duration: "September 2023 - September 2024",
    content1: "Robotics and Artificial Intelligence",
    content2: "University of Glasgow International Leadership Scholarship",
  },
  {
    id: "education-2",
    icon: makaut,
    title: "Maulana Abul Kalam Azad University of Technology",
    degree: "Bachelor of Technology",
    duration: "August 2019 - August 2023",
    content1: "Computer Science Engineering (GPA: 9.15 / 10)",
    content2: "Dean's List",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: icon,
    event: "Machine Learning & Computer Vision Achievement",
    position: "Reduced Operational Costs by £3K Monthly",
    content1: "Developed a Structure-from-Motion pipeline achieving 1.5cm RMSE in 3D reconstruction",
    content2: "Integrated advanced systems with Apache Airflow and Apache Spark",
    content3: "Processed over 250GB of distributed images on AWS",
  },
  {
    id: "a-2",
    icon: icon,
    event: "Perception System Enhancement",
    position: "Reduced False Positives by 70%",
    content1: "Enhanced perception system using YOLOv8 with DriveWorks SDK",
    content2: "Implemented Extended Kalman Filter and sensor synchronization",
    content3: "Maintained 30 FPS on production fleet",
  },
  {
    id: "a-3",
    icon: icon,
    event: "3D Perception Optimization",
    position: "Achieved 90% Vehicle Detection with 40ms Latency",
    content1: "Optimized 3D perception using BEVFusion with PointPillars and Mask R-CNN",
    content2: "Achieved 88% mask IoU up to 80m range on NVIDIA DRIVE Orin",
    content3: "Reduced memory by 60% using INT8 quantization",
  },
];

// Enhanced skills section with more detailed and specific skills
export const skills = [
  {
    title: "Computer Vision",
    items: [
      {
        id: "cv-1",
        icon: SiPytorch,
        name: "PyTorch",
      },
      {
        id: "cv-2",
        icon: SiTensorflow,
        name: "TensorFlow",
      },
      {
        id: "cv-3",
        icon: SiOpencv,
        name: "OpenCV",
      },
      {
        id: "cv-4",
        icon: SiYolo,
        name: "YOLO (v5-v8)",
      },
      {
        id: "cv-5",
        icon: SiPython,
        name: "Mask R-CNN",
      },
      {
        id: "cv-6",
        icon: SiPython,
        name: "DeepLab v3+",
      },
      {
        id: "cv-7",
        icon: SiPython,
        name: "Detectron2",
      },
      {
        id: "cv-8",
        icon: SiPython,
        name: "SuperPoint",
      },
      {
        id: "cv-9",
        icon: SiPython,
        name: "Feature Matching",
      },
      {
        id: "cv-10",
        icon: SiPython,
        name: "Image Segmentation",
      },
      {
        id: "cv-11",
        icon: SiPython,
        name: "U-Net++",
      },
    ],
  },
  {
    title: "3D Perception",
    items: [
      {
        id: "3d-1",
        icon: SiNvidia,
        name: "NVIDIA DriveWorks",
      },
      {
        id: "3d-2",
        icon: SiCplusplus,
        name: "LiDAR Processing",
      },
      {
        id: "3d-3",
        icon: SiCplusplus,
        name: "PCL",
      },
      {
        id: "3d-4",
        icon: SiCplusplus,
        name: "Open3D",
      },
      {
        id: "3d-5",
        icon: SiCplusplus,
        name: "COLMAP",
      },
      {
        id: "3d-6",
        icon: SiCplusplus,
        name: "Sensor Fusion",
      },
      {
        id: "3d-7",
        icon: SiPython,
        name: "Structure from Motion",
      },
      {
        id: "3d-8",
        icon: SiPython,
        name: "Multi-view Geometry",
      },
      {
        id: "3d-9",
        icon: SiPython,
        name: "Visual Odometry",
      },
      {
        id: "3d-10",
        icon: SiPython,
        name: "Stereo Vision",
      },
      {
        id: "3d-11",
        icon: SiPython,
        name: "ICP Registration",
      },
      {
        id: "3d-12",
        icon: SiPython,
        name: "Bundle Adjustment",
      },
      {
        id: "3d-13",
        icon: SiPython,
        name: "RANSAC",
      },
      {
        id: "3d-14",
        icon: SiPython,
        name: "PSMNet",
      },
      {
        id: "3d-15",
        icon: SiPython,
        name: "MiDaS",
      },
      {
        id: "3d-16",
        icon: SiPython,
        name: "PointPillars",
      },
      {
        id: "3d-17",
        icon: SiPython,
        name: "PointNet++",
      },
    ],
  },
  {
    title: "Deep Learning",
    items: [
      {
        id: "dl-1",
        icon: SiCnn,
        name: "CNN Architectures",
      },
      {
        id: "dl-2",
        icon: SiPython,
        name: "Attention Mechanisms",
      },
      {
        id: "dl-3",
        icon: SiPython,
        name: "Self-Supervised Learning",
      },
      {
        id: "dl-4",
        icon: SiCnn,
        name: "BEVFusion",
      },
      {
        id: "dl-5",
        icon: SiCnn,
        name: "SuperGlue",
      },
      {
        id: "dl-6",
        icon: SiCnn,
        name: "Model Quantization",
      },
      {
        id: "dl-7",
        icon: SiPython,
        name: "Graph Neural Networks",
      },
      {
        id: "dl-8",
        icon: SiPython,
        name: "Temporal Conv Networks",
      },
      {
        id: "dl-9",
        icon: SiPython,
        name: "BERT/DistilBERT",
      },
      {
        id: "dl-10",
        icon: SiPython,
        name: "Transfer Learning",
      },
      {
        id: "dl-11",
        icon: SiPython,
        name: "Mixed Precision Training",
      },
      {
        id: "dl-12",
        icon: SiPython,
        name: "PyTorch DDP",
      },
      {
        id: "dl-13",
        icon: SiPython,
        name: "MLflow",
      },
    ],
  },
  {
    title: "Systems & Optimization",
    items: [
      {
        id: "so-1",
        icon: SiCplusplus,
        name: "CUDA",
      },
      {
        id: "so-2",
        icon: SiCplusplus,
        name: "TensorRT",
      },
      {
        id: "so-3",
        icon: SiPython,
        name: "ONNX Runtime",
      },
      {
        id: "so-4",
        icon: SiCplusplus,
        name: "Multi-threading",
      },
      {
        id: "so-5",
        icon: SiCplusplus,
        name: "Edge Deployment",
      },
      {
        id: "so-6",
        icon: SiCplusplus,
        name: "GStreamer",
      },
      {
        id: "so-7",
        icon: SiCplusplus,
        name: "FFmpeg",
      },
      {
        id: "so-8",
        icon: SiCplusplus,
        name: "INT8 Quantization",
      },
      {
        id: "so-9",
        icon: SiCplusplus,
        name: "CUDA Graph Optimization",
      },
      {
        id: "so-10",
        icon: SiCplusplus,
        name: "GPU Performance Tuning",
      },
      {
        id: "so-11",
        icon: SiCplusplus,
        name: "Kalman Filtering",
      },
      {
        id: "so-12",
        icon: SiCplusplus,
        name: "Factor Graph Optimization",
      },
    ],
  },
  {
    title: "Programming",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-3",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-5",
        icon: SiMysql,
        name: "SQL",
      },
      {
        id: "pl-6",
        icon: SiPython,
        name: "NumPy",
      },
      {
        id: "pl-7",
        icon: SiPython,
        name: "Qt",
      },
      {
        id: "pl-8",
        icon: SiCplusplus,
        name: "OpenGL",
      },
    ],
  },
  {
    title: "MLOps & Cloud",
    items: [
      {
        id: "mc-1",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "mc-2",
        icon: SiKubernetes,
        name: "Kubernetes",
      },
      {
        id: "mc-3",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "mc-4",
        icon: SiDvc,
        name: "DVC",
      },
      {
        id: "mc-5",
        icon: SiAmazonaws,
        name: "AWS EC2",
      },
      {
        id: "mc-6",
        icon: SiAmazonaws,
        name: "AWS S3",
      },
      {
        id: "mc-7",
        icon: SiAmazonaws,
        name: "AWS Lambda",
      },
      {
        id: "mc-8",
        icon: SiApacheairflow,
        name: "Apache Airflow",
      },
      {
        id: "mc-9",
        icon: SiApachespark,
        name: "Apache Spark",
      },
      {
        id: "mc-10",
        icon: SiDocker,
        name: "Apache Superset",
      },
      {
        id: "mc-11",
        icon: SiPython,
        name: "ETL Pipelines",
      },
      {
        id: "mc-12",
        icon: SiPython,
        name: "Distributed Processing",
      },
    ],
  },
  {
    title: "Algorithms & Methods",
    items: [
      {
        id: "am-1",
        icon: SiPython,
        name: "SLAM",
      },
      {
        id: "am-2",
        icon: SiPython,
        name: "3D Reconstruction",
      },
      {
        id: "am-3",
        icon: SiPython,
        name: "Depth Estimation",
      },
      {
        id: "am-4",
        icon: SiPython,
        name: "Object Detection",
      },
      {
        id: "am-5",
        icon: SiPython,
        name: "Semantic Segmentation",
      },
      {
        id: "am-6",
        icon: SiPython,
        name: "Instance Segmentation",
      },
      {
        id: "am-7",
        icon: SiPython,
        name: "Keypoint Estimation",
      },
      {
        id: "am-8",
        icon: SiPython,
        name: "Tracking Algorithms",
      },
      {
        id: "am-9",
        icon: SiPython,
        name: "Anomaly Detection",
      },
      {
        id: "am-10",
        icon: SiPython,
        name: "Pose Estimation",
      },
      {
        id: "am-11",
        icon: SiPython,
        name: "Bundle Adjustment",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "POMO Robotics",
    logo: pomo_robotics,
    link: "https://pomorobotics.com/",
    positions: [
      {
        title: "Machine Learning Engineer",
        duration: "November 2023 - December 2024",
        content: [
          {
            text: "Developed Structure-from-Motion pipeline with Apache Airflow and Apache Spark, integrating SuperGlue and COLMAP on AWS (S3, EC2 GPU) for 250GB+ distributed image processing, achieving 1.5cm RMSE in 3D reconstruction and reducing operational costs by £3K monthly through optimised batch processing",
            link: "",
          },
          {
            text: "Developed multi-modal depth estimation pipeline using PSMNet with GMSL cameras through DriveWorks SDK, integrating MiDaS and LIDAR, achieving 5% relative error at 15m range and 92% depth accuracy at 30 FPS on DRIVE AGX Orin",
            link: "",
          },
          {
            text: "Optimized 3D perception using BEVFusion with PointPillars and Mask R-CNN through TensorRT, achieving 90% vehicle detection with 40ms latency and 88% mask IoU up to 80m range on DRIVE Orin, while reducing memory by 60% using INT8 quantization",
            link: "",
          },
          {
            text: "Enhanced perception system using YOLOv8 with DriveWorks SDK, implementing Extended Kalman Filter and sensor synchronization through DW sensor framework, reducing false positives by 70% while maintaining 30 FPS on production fleet",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Fittlyf",
    logo: fittlyf,
    link: "https://fittlyf.com/",
    positions: [
      {
        title: "Data Science Intern",
        duration: "July 2022 - August 2022",
        content: [
          {
            text: "Fine-tuned BERT and DistilBERT models for product review analysis achieving 80% F1-score, reducing review processing time by 60% and improving customer ticket resolution time by 15%",
            link: "",
          },
          {
            text: "Engineered ETL pipeline with Pandas and AWS Lambda processing 50K+ daily reviews, reducing quality issue detection time from 12 to 2 hours, saving Rs 25K monthly in operational costs",
            link: "",
          },
          {
            text: "Built A/B testing dashboard (Flask, PostgreSQL) analysing 10K+ user preferences, contributing to 15% increase in cart conversion and Rs 50K+ monthly revenue improvement",
            link: "",
          },
          {
            text: "Developed automated anomaly detection system using Prophet and scikit-learn, monitoring 20+ key metrics and reducing system downtime by 25% through early warning detection",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Opsis Systems Pvt. Ltd.",
    logo: opsis,
    link: "https://opsissystems.com/",
    positions: [
      {
        title: "AI Engineer Intern",
        duration: "March 2022 - June 2022",
        content: [
          {
            text: "Engineered aerial imagery analysis pipeline using YOLOv5 and Detectron2 with Qt-based visualisation interface, achieving 90% mAP and 2000+ images/hour throughput, reducing survey costs by Rs 3L annually per municipality across 3 systems",
            link: "",
          },
          {
            text: "Developed semantic segmentation system using U-Net++ with spatial attention mechanisms, achieving 85% IoU at 20ms inference on 4K satellite imagery, enabling real-time monitoring of 5,000+ km²",
            link: "",
          },
          {
            text: "Implemented distributed training pipeline using PyTorch DDP on 4x A100 GPUs with Mixed Precision Training, reducing model training time by 65% while maintaining accuracy",
            link: "",
          },
          {
            text: "Optimised inference using TensorRT and CUDA Graph optimisation, achieving 30 FPS at 2560x1440 while reducing deployment costs by 60%, saving Rs 1L monthly in compute costs",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "SelfGNNplus: Advanced Recommendation System",
    github: "https://github.com/Sovik-Ghosh/SelfGNNplus",
    link: "",
    image: comicify_ai,
    content:
      "Implemented Graph Neural Networks (GNNs) with Temporal Convolutional Networks (TCNs) for recommendation systems, achieving 5.73% improvement in NDCG ranking accuracy over 19 state-of-the-art baselines across multiple datasets including Amazon and Gowalla.",
    stack: [
      {
        id: "icon-1",
        icon: SiPytorch,
        name: "PyTorch"
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-3",
        icon: SiTensorflow,
        name: "GNN"
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Self-Supervised Learning"
      },
    ],
  },
  {
    id: "project-2",
    title: "Structure-from-Motion",
    github: "https://github.com/Sovik-Ghosh/SFM",
    link: "",
    image: greentrust,
    content:
      "A Python-based Structure from Motion implementation that reconstructs 3D scenes from image sequences. Key features: - SIFT feature detection and matching - Graph-based image selection - Incremental reconstruction - Bundle adjustment optimization - COLMAP/PLY export support Perfect for computer vision researchers and 3D reconstruction enthusiasts.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiOpencv,
        name: "OpenCV"
      },
      {
        id: "icon-3",
        icon: SiNumpy,
        name: "NumPy"
      },
      {
        id: "icon-4",
        icon: SiScikitlearn,
        name: "SciPy"
      },
    ],
  },
  {
    id: "project-3",
    title: "Protein: Primary to Secondary",
    github: "https://github.com/Sovik-Ghosh/Protien-Primary-to-Secondary-using-FCNN.git",
    link: "",
    image: recruitment,
    content:
      "The transition from primary to secondary protein structure involves the folding of linear amino acid sequences (primary structure) into regular patterns like alpha-helices and beta-sheets (secondary structure). Deep learning-based prediction algorithms leverage neural network architectures to infer these patterns from primary sequence data.",
    stack: [
      {
        id: "icon-1",
        icon: SiPytorch,
        name: "PyTorch"
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-3",
        icon: SiNumpy,
        name: "NumPy"
      },
      {
        id: "icon-4",
        icon: SiScikitlearn,
        name: "FCNN"
      },
    ],
  },
  {
    id: "project-4",
    title: "HeartGuard",
    github: "https://github.com/RajasJoshi/HeartGuard.git",
    link: "",
    image: recruitment,
    content:
      "Utilizing ECG and PPG sensors, our Qt5 frontend application provides real-time monitoring of heart rate and SpO2 levels. The sensors capture physiological data, which is processed using signal analysis algorithms to extract vital information.",
    stack: [
      {
        id: "icon-1",
        icon: SiQt,
        name: "Qt5"
      },
      {
        id: "icon-2",
        icon: SiCplusplus,
        name: "C++"
      },
      {
        id: "icon-3",
        icon: SiPython,
        name: "Signal Processing"
      },
      {
        id: "icon-4",
        icon: SiRaspberrypi,
        name: "Raspberry Pi"
      },
    ],
  },
  {
    id: "project-5",
    title: "GymJam: AI assistant using MediaPipe",
    github: "https://github.com/Sovik-Ghosh/GymJam-AI-assistant-using-mediapipe.git",
    link: "",
    image: chargeswap,
    content:
      "GymJam is an innovative AI gym assistant designed to revolutionize the fitness experience. Utilizing cutting-edge artificial intelligence technology, GymJam offers personalized guidance and support to users during their workouts.​",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiTensorflow,
        name: "MediaPipe"
      },
      {
        id: "icon-3",
        icon: SiOpencv,
        name: "OpenCV"
      },
      {
        id: "icon-4",
        icon: SiPytorch,
        name: "PyTorch"
      },
    ],
  },
  {
    id: "project-6",
    title: "Movera: Movie recommendation using RASA",
    github: "https://github.com/Sovik-Ghosh/Movera-movie-recommendation-using-RASA.git",
    link: "",
    image: placeicon,
    content:
      "The movie recommendation chatbot built with Rasa is an intelligent conversational agent designed to assist users in discovering movies tailored to their preferences and interests.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiRasa,
        name: "RASA"
      },
      {
        id: "icon-3",
        icon: SiScikitlearn,
        name: "Scikit-learn"
      },
      {
        id: "icon-4",
        icon: SiTensorflow,
        name: "TensorFlow"
      },
    ],
  },
];



// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Computer Vision Projects",
    value: "5+",
  },
  {
    id: "stats-2",
    title: "Deep Learning Models",
    value: "10+",
  },
  {
    id: "stats-3",
    title: "Technical Skills",
    value: "20+",
  },
];

// Update the blogPosts array with proper object format
export const blogPosts = [
  {
    id: "post-1",
    title: "What is 3D in Computer Vision?",
    link: "https://medium.com/@gsovik.official/what-is-3d-in-computer-vision-d80e07264feb",
    date: "January 15, 2024", // Replace with actual date or use new Date().toLocaleDateString()
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*N6qNEcLPv8fDTCUZnDXwrA.png", // Replace with your Medium article image or use a placeholder
    tags: [
      {
        id: "tag-1",
        name: "Computer Vision"
      },
      {
        id: "tag-2",
        name: "3D Vision"
      },
      {
        id: "tag-3",
        name: "Robotics"
      },
    ],
  },
  // You can add more blog posts here following the same format
];

// Updated extraCurricular array with Chess added
export const extraCurricular = [
  {
    id: 1,
    organisation: "Medium",
    title: "Technical Writer",
    duration: "January 2025 - Present",
    content: [
      {
        text: "Published technical articles on Computer Vision and Robotics topics",
        link: "https://medium.com/@gsovik.official/",
      },
      {
        text: "What is 3D in Computer Vision? - An introduction to 3D perception in robotics applications",
        link: "https://medium.com/@gsovik.official/what-is-3d-in-computer-vision-d80e07264feb",
      },
    ],
    logo: medium,  // Replace with a suitable icon for blog/writing
  },
  {
    id: 2,
    organisation: "Chess",
    title: "Chess Player",
    duration: "2023 - Present",
    content: [
      {
        text: "Rated chess player with experience in tournament play",
        link: "",
      },
      {
        text: "Regularly participate in local chess tournaments and club activities",
        link: "",
      }
    ],
    logo: chess,  // Replace with a chess-related icon if available
  },
  // You can add more extracurricular activities here
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/sovik-ghosh-5b2236136/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/Sovik-Ghosh",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:gsovik.official@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Sovik Ghosh",
    githubUsername: 'Sovik-Ghosh',
    tagLine: "Machine Learning Engineer | Computer Vision Specialist | MSc Robotics and AI @ University of Glasgow",
    intro: "Computer vision and machine learning engineer with expertise in 3D perception, depth estimation, and real-time algorithm optimization for robotics and autonomous systems."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 10;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = [];