import {
  Award,
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Github,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { FaGithub, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import { SiFlask, SiPandas } from "react-icons/si";

export const profile = {
  name: "Vaibhav Garg",
  initials: "VG",
  role: "CS Undergraduate | Gen AI Engineer | AI & ML Developer | RAG & NLP Specialist",
  location: "Delhi, India",
  email: "vaibhgarg5@gmail.com",
  phone: "+91-7011354404",
  linkedin: "https://www.linkedin.com/in/vaibhav-garg-8a199622b/",
  github: "https://github.com/vgarg05",
  resume: "/Vaibhav-Garg-Resume.pdf",
  summary:
    "Computer Science undergraduate with hands-on experience in machine learning, NLP, and LLM-driven applications. Experienced in building and deploying AI solutions using Python, Scikit-learn, Flask, LangChain, and Hugging Face, including loan approval prediction and AI travel concierge projects.",
  intro:
    "I design and deploy AI-driven applications, RAG pipelines, and machine learning models using Python, Scikit-learn, Flask, and LLMs."
};

export const navItems = [
  ["hero", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["certifications", "Certifications"],
  ["profiles", "Profiles"],
  ["resume", "Resume"],
  ["contact", "Contact"]
];

export const stats = [
  { label: "Current CGPA", value: "9.26" },
  { label: "Internships", value: "1+" },
  { label: "Featured Projects", value: "4" },
  { label: "Core Stack", value: "Python / AI" }
];

export const focusAreas = [
  { label: "AI & Machine Learning", value: "RAG, LLMs, NLP, Scikit-learn", icon: BrainCircuit },
  { label: "Data Analytics", value: "Pandas, NumPy, Visualization", icon: BarChart3 },
  { label: "Backend Development", value: "Flask, FastAPI, REST APIs", icon: ServerCog },
  { label: "Problem Solving", value: "DSA, OOP, SQL Databases", icon: Code2 }
];

export const skills = [
  { category: "Programming Languages", icon: Code2, level: 90, items: ["Python", "C++", "SQL (MySQL)", "HTML", "CSS", "JavaScript"] },
  { category: "Data Analysis & Visualization", icon: LineChart, level: 88, items: ["Data Analysis", "Data Visualization", "Pandas", "NumPy", "Matplotlib", "Plotly"] },
  { category: "AI & Machine Learning", icon: BrainCircuit, level: 92, items: ["Machine Learning", "Natural Language Processing (NLP)", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "LLMs (GPT, Claude, Gemini)", "Scikit-learn", "NLTK", "Predictive Modeling"] },
  { category: "Frameworks & Libraries", icon: SiFlask, level: 85, items: ["Flask", "FastAPI", "Streamlit", "LangChain", "Gradio", "Hugging Face", "ChromaDB", "FAISS", "OpenRouter", "BERT"] },
  { category: "Tools & Environments", icon: Sparkles, level: 88, items: ["Git", "GitHub", "Git Bash", "VS Code", "Cursor", "Jupyter Notebook", "Google Colab"] }
];

export const experience = [
  {
    role: "Artificial Intelligence & Machine Learning Intern",
    company: "Edunet Foundation",
    duration: "Jun 2025 - Jul 2025",
    tech: ["Python", "Gradient Boosting", "Pandas", "Scikit-learn"],
    points: [
      "Developed employee salary predictive model using Python and Gradient Boosting on 48,842 records with 15 features, delivering forecasts to inform compensation strategy.",
      "Performed data engineering tasks including data cleaning, outlier removal, and feature engineering in pandas, increasing data quality to 34,968 high-quality samples.",
      "Compared and evaluated five machine learning models (Logistic Regression, Random Forest, SVM, KNN, Gradient Boosting) to identify the optimal algorithm for salary prediction.",
      "Achieved a best accuracy of 84.56% using Gradient Boosting and packaged the optimized model for deployment, supporting product innovation."
    ]
  }
];

export const projects = [
  {
    title: "AI Travel Concierge - Airbnb",
    category: ["AI & ML", "Python", "RAG"],
    description:
      "RAG-powered conversational search engine over 100+ Airbnb-style listings using all-MiniLM-L6-v2 embeddings and ChromaDB vector store.",
    stack: ["Python", "Gemini API", "ChromaDB", "all-MiniLM-L6-v2", "LangChain"],
    icon: BrainCircuit,
    github: "https://github.com/vgarg05/airbnb/",
    live: "https://airbnb-ai-concierge.onrender.com/",
    highlights: [
      "Built a RAG-powered conversational search engine over 100+ Airbnb-style listings using all-MiniLM-L6-v2 embeddings and ChromaDB vector store.",
      "Designed semantic retrieval pipeline that maps natural language vibe queries to top-5 most relevant listings - reducing search friction vs traditional filters.",
      "Integrated Gemini API (gemini-2.5-flash) as conversational layer with grounded responses using retrieved listing context.",
      "Supports multilingual input including Hinglish - built for Airbnb's 192-country user base."
    ]
  },
  {
    title: "NaturalCart | AI-Powered Grocery Shopping Platform",
    category: ["AI & ML", "Python", "Full-Stack"],
    description:
      "Full-stack web application that parses natural language meal plans into aisle-organized, optimized grocery lists.",
    stack: ["Python", "Gemini LLM", "FAISS", "SentenceTransformers", "Full-Stack"],
    icon: Sparkles,
    github: "https://github.com/vgarg05/naturalcart",
    live: "https://huggingface.co/spaces/vaibhavgarg05/naturalcart",
    highlights: [
      "Developed a full-stack web application that parses natural language meal plans into aisle-organized, optimized grocery lists.",
      "Built a Retrieval-Augmented Generation pipeline using FAISS and SentenceTransformers (all-MiniLM-L6-v2) to perform semantic vector searches matching recipe ingredients to a catalog of 250+ products.",
      "Integrated Google Gemini LLM to extract structured ingredient JSON schemas from unstructured text, applying dynamic filters for vegetarian, vegan, and gluten-free diets.",
      "Created a Smart Pack Optimizer to translate recipe quantity requirements into exact retail pack counts, reducing product waste."
    ]
  },
  {
    title: "Loan Approval Prediction System",
    category: ["Python", "Machine Learning", "Backend"],
    description:
      "End-to-end loan approval prediction system using Python and Scikit-learn on 45,000+ loan records.",
    stack: ["Python", "Scikit-learn", "Flask", "REST API", "GridSearchCV"],
    icon: ShieldCheck,
    github: "https://github.com/vgarg05/loan_approval_prediction",
    live: "https://loan-approval-prediction-xu7o.onrender.com/predict",
    highlights: [
      "Designed and implemented end-to-end loan approval prediction system using Python and Scikit-learn on 45,000+ loan records.",
      "Performed feature engineering and hyperparameter tuning using GridSearchCV, achieving 88.5% accuracy.",
      "Achieved 76% precision, 72% recall, and 74% F1-score, improving loan approval classification performance.",
      "Developed REST API using Flask and deployed scalable application on Render for real-time predictions."
    ]
  },
  {
    title: "Kindle Review Sentiment Analysis",
    category: ["Python", "NLP", "Machine Learning"],
    description:
      "Developed and deployed end-to-end NLP pipeline to classify sentiment from 11,000+ Amazon Kindle reviews.",
    stack: ["Python", "NLP", "Naive Bayes", "Bag-of-Words", "TF-IDF"],
    icon: BarChart3,
    github: "https://github.com/vgarg05/Kindle-Review-Sentiment-Analysis",
    live: "https://kindle-review-sentiment-analysis.onrender.com/",
    highlights: [
      "Developed and deployed end-to-end NLP pipeline to classify sentiment from 11,000+ Amazon Kindle reviews.",
      "Implemented Bag-of-Words and TF-IDF feature extraction techniques.",
      "Trained Naive Bayes baseline model achieving 59% accuracy for sentiment classification.",
      "Evaluated model performance using precision, recall, and F1-score metrics."
    ]
  }
];

export const education = [
  {
    school: "Maharaja Agrasen Institute of Technology",
    degree: "Bachelor of Technology, Computer Science and Engineering (CSE)",
    duration: "Aug 2023 - May 2027",
    meta: "GPA: 9.26/10",
    icon: GraduationCap
  },
  {
    school: "Saint Giri Senior Secondary School",
    degree: "Senior Secondary Education (XII)",
    duration: "2022 - 2023",
    meta: "GPA: 92.8%",
    icon: GraduationCap
  }
];

export const certifications = [
  { 
    title: "Programming and Data Science (Foundation)", 
    issuer: "IIT Madras (Coursework: Python, Statistics, Probability, Computational Thinking)", 
    date: "2023 - 2024", 
    icon: Award 
  }
];

export const profiles = [
  { label: "GitHub", href: profile.github, icon: FaGithub, status: "Active" },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin, status: "Professional" },
  { label: "LeetCode", href: "https://leetcode.com/vaibhavgarg05/", icon: Code2, status: "Active" },
  { label: "Kaggle", href: "", icon: BarChart3, status: "Coming soon" },
  { label: "Tableau", href: "", icon: LineChart, status: "Coming soon" },
  { label: "Power BI", href: "", icon: BarChart3, status: "Coming soon" }
];

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: "LinkedIn", value: "vaibhav-garg-8a199622b", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", value: "vgarg05", href: profile.github, icon: Github },
  { label: "Delhi, India", value: "Open to internships and placements", href: "#", icon: MapPin }
];

