// src/hooks/useLinkedInData.js
// This hook reads from a local JSON data file (your manual "LinkedIn mirror")
// and returns it in the same shape as useGithubData so Awards.jsx can consume it identically.

import { useState, useEffect } from 'react';
import deloitteImg from '../assets/Awards/deloitte.png';
import innovsenseImg from '../assets/Awards/innovsense.png';
import nvidiaImg from '../assets/Awards/nvidia.png';
import yugamImg from '../assets/Awards/yugam.png';
import letsDanceImg from '../assets/Awards/lets-dance.png';
import productShootImg from '../assets/Awards/product-shoot.png';
import capablImg from '../assets/Awards/capabl.png';

// ============================================================
// YOUR LINKEDIN DATA — UPDATE THIS MANUALLY WHEN YOU POST NEW
// CERTIFICATIONS OR AWARDS TO LINKEDIN
// Structure mirrors LinkedIn's own data model
// ============================================================
const LINKEDIN_DATA = {
  profile: {
    name: "D Manish",
    headline: "UI/UX Designer & Frontend Developer | 3D Creator | AI Enthusiast",
    location: "Coimbatore, Tamil Nadu, India",
    url: "https://www.linkedin.com/in/d-manish-930514292/",
    connections: "500+",
    lastUpdated: "2024-12-01"
  },

  awards: [
    {
      id: "award-001",
      title: "Deloitte Data Analytics",
      rank: "Job Simulation",
      year: "2025",
      month: "2025-05",
      category: "ANALYTICS",
      icon: "analytics",
      type: "deloitte",
      issuer: "Deloitte",
      image: deloitteImg,
      description: "Completed the Data Analytics Job Simulation, gaining experience in data cleaning, modeling, and insights generation for enterprise clients.",
      skills: ["Data Analytics", "Data Modeling", "Business Insights", "Excel"],
      linkedInUrl: "https://www.linkedin.com/posts/d-manish-930514292_data-analytics-job-simulation-by-deloitte-activity-7445337744605863936-tdIk",
      verified: true
    },
    {
      id: "award-002",
      title: "InnovSense 2025",
      rank: "Jury Recognition",
      year: "2025",
      month: "2025-04",
      category: "IOT/AI",
      icon: "gesture",
      type: "innovsense",
      issuer: "InnovSense",
      image: innovsenseImg,
      description: "Recognized for home automation and gesture control innovation at InnovSense 2025. Focused on accessible tech solutions.",
      skills: ["IoT", "Home Automation", "Gesture Control", "Python"],
      linkedInUrl: "https://www.linkedin.com/posts/d-manish-930514292_innovsense2025-homeautomation-gesturecontrol-activity-7314304844528250882-qBMV",
      verified: true
    },
    {
      id: "award-003",
      title: "Yugam 2025",
      rank: "Runner TechXcelerate",
      year: "2025",
      month: "2025-03",
      category: "TECHNICAL",
      icon: "military_tech",
      type: "yugam",
      issuer: "Yugam",
      image: yugamImg,
      description: "Secured Runner Up position at Yugam 2025 in TechXcelerate, demonstrating technical excellence and competitive problem solving.",
      skills: ["Competitive Programming", "Technical Strategy", "Problem Solving"],
      linkedInUrl: "https://www.linkedin.com/posts/d-manish-930514292_yugam-runner-up-activity-7310189507272720385-cqWF",
      verified: true
    },
    {
      id: "award-004",
      title: "NVIDIA GPU Codeathon",
      rank: "3rd Place",
      year: "2024",
      month: "2024-10",
      category: "TECHNICAL",
      icon: "memory",
      type: "nvidia",
      issuer: "NVIDIA",
      image: nvidiaImg,
      description: "High-performance computing & advanced problem-solving using GPU-accelerated architectures. Competed against top-tier engineering students nationally.",
      skills: ["CUDA", "GPU Computing", "Python", "High Performance Computing"],
      linkedInUrl: "https://www.linkedin.com/in/d-manish-930514292/details/honors/",
      verified: true
    },
    {
      id: "award-005",
      title: "Capabl TechfusionX",
      rank: "Coding Saksham",
      year: "2024",
      month: "2024-09",
      category: "CERTIFICATION",
      icon: "terminal",
      type: "capable",
      issuer: "Capabl",
      image: capablImg,
      description: "Recognized for active participation in the 2-day Coding Saksham Program at KPRIET, covering advanced development workflows.",
      skills: ["Web Development", "Coding Saksham", "Problem Solving", "Innovation"],
      linkedInUrl: "https://www.linkedin.com/in/d-manish-930514292/details/honors/",
      verified: true
    },
    {
      id: "award-006",
      title: "Product Shoot Winner",
      rank: "1st Place",
      year: "2024",
      month: "2024-08",
      category: "CREATIVE",
      icon: "photo_camera",
      type: "creative",
      issuer: "College Event",
      image: productShootImg,
      description: "Excellence in visual design & storytelling, capturing the intersection of physical form and digital light.",
      skills: ["Visual Design", "Photography", "Creative Direction"],
      linkedInUrl: "https://www.linkedin.com/in/d-manish-930514292/details/honors/",
      verified: true
    }
  ],

  certifications: [
    {
      id: "cert-000",
      title: "LinkedIn Milestone",
      platform: "Professional Development",
      issuer: "LinkedIn",
      date: "2025-02",
      year: "2025",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/512px-LinkedIn_logo_initials.png",
      credentialUrl: "https://www.linkedin.com/posts/d-manish-930514292_another-milestone-unlocked-proud-activity-7382654260607512576-hjl0",
      detail: "Recognized for consistent growth and professional milestones in the tech ecosystem.",
      skills: ["Professional Growth", "Networking", "Strategic Development"],
      verified: true
    },
    {
      id: "cert-001",
      title: "Introduction to Large Language Models",
      platform: "Google Cloud",
      issuer: "Google",
      date: "2024-11",
      year: "2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png",
      credentialUrl: "https://www.linkedin.com/in/d-manish-930514292/details/certifications/",
      detail: "Applied LLM architectures in AI-driven projects.",
      skills: ["LLMs", "AI", "Google Cloud"],
      verified: true
    },
    {
      id: "cert-002",
      title: "Prompt Design in Vertex AI",
      platform: "Google Cloud",
      issuer: "Google",
      date: "2024-11",
      year: "2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png",
      credentialUrl: "https://www.linkedin.com/in/d-manish-930514292/details/certifications/",
      detail: "Optimized AI responses for enterprise applications.",
      skills: ["Prompt Engineering", "Vertex AI", "Google Cloud"],
      verified: true
    },
    {
      id: "cert-003",
      title: "Cloud Computing Fundamentals",
      platform: "Google Cloud",
      issuer: "Google",
      date: "2024-10",
      year: "2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png",
      credentialUrl: "https://www.linkedin.com/in/d-manish-930514292/details/certifications/",
      detail: "Leveraged cloud ecosystems for scalable solutions.",
      skills: ["Cloud Computing", "GCP", "Infrastructure"],
      verified: true
    },
    {
      id: "cert-004",
      title: "Autodesk Certified Professional",
      platform: "Maya & Arnold Rendering",
      issuer: "Autodesk",
      date: "2023-12",
      year: "2023",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Autodesk_logo.svg/512px-Autodesk_logo.svg.png",
      credentialUrl: "https://www.linkedin.com/in/d-manish-930514292/details/certifications/",
      detail: "Precision modeling and cinematic lighting workflows.",
      skills: ["Maya", "Arnold Renderer", "3D Modeling", "Lighting"],
      verified: true
    }
  ],

  experience: [
    {
      id: "exp-001",
      role: "Full Stack Developer Intern",
      company: "ProfitStory.ai",
      location: "Remote / Hybrid",
      duration: "Dec 2024 - Present",
      type: "INTERNSHIP",
      description: "Working on real-world projects involving Full Stack Development, AI/GenAI systems, dashboards, web scraping, and ML model development. Building intelligent, data-driven solutions for the enterprise.",
      skills: ["Full Stack", "GenAI", "Dashboards", "Web Scraping", "ML"],
      linkedInUrl: "https://www.linkedin.com/posts/d-manish-930514292_im-excited-to-share-that-ive-officially-activity-7405133393526587392-0ZXm"
    },
    {
      id: "exp-002",
      role: "Vice President",
      company: "SPARKS Student Association",
      location: "KPRIET, Coimbatore",
      duration: "Jan 2025 - Present",
      type: "LEADERSHIP",
      description: "Leading and collaborating within the vibrant student community at KPRIET. Spearheading technical events, coordinating between faculty and students, and driving innovation in student-led initiatives.",
      skills: ["Leadership", "Team Collaboration", "Event Strategy"],
      linkedInUrl: "https://www.linkedin.com/posts/d-manish-930514292_thrilled-to-step-into-the-role-of-vice-president-activity-7359052602438766592-uMU5"
    },
    {
      id: "exp-003",
      role: "Full Stack Development Intern",
      company: "NoviTech R&D Private Limited",
      location: "Remote",
      duration: "Jan 2025 (15 Days)",
      type: "INTERNSHIP",
      description: "Strengthened core web development skills through intensive R&D projects. Broadened technical knowledge in modern frameworks and responsive design architectures.",
      skills: ["Web Development", "R&D", "Full Stack"],
      linkedInUrl: "https://www.linkedin.com/posts/d-manish-930514292_internship-certificate-activity-7294012482786902016-0BSD"
    },
    {
      id: "exp-004",
      role: "President",
      company: "Mental Health and Happiness Club",
      location: "KPRIET, Coimbatore",
      duration: "FEB 2024 - Present",
      type: "LEADERSHIP",
      description: "Leading the journey of promoting mental well-being and happiness on campus. Organizing awareness programs, mental health installations, and fostering a supportive community for student well-being.",
      skills: ["Leadership", "Community Building", "Mental Health Advocacy"],
      linkedInUrl: "https://www.linkedin.com/posts/d-manish-930514292_kpriet-mentalhealthmatters-happinessclub-activity-7298661239558127617-W66J"
    },
    {
      id: "exp-005",
      role: "Cybersecurity Intern",
      company: "igeeks technologies",
      location: "Bangalore, India",
      duration: "Aug 2024 (15 Days)",
      type: "INTERNSHIP",
      description: "Hands-on intensive internship focused on core security domains. Gained practical expertise in Kali Linux, Phishing attack vectors, DoS simulations, and Session Hijacking techniques.",
      skills: ["Cybersecurity", "Kali Linux", "Network Security", "Ethical Hacking"],
      linkedInUrl: "https://www.linkedin.com/posts/d-manish-930514292_internship-certification-activity-7349697437671804928-jMZN"
    }
  ]
};

// Hook — returns data sorted newest-first, same shape as useGithubData
const useLinkedInData = () => {
  const [awards, setAwards] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    // Simulate async load (future-proofs for real API if LinkedIn ever opens)
    const timer = setTimeout(() => {
      // Sort awards newest month first
      const sortedAwards = [...LINKEDIN_DATA.awards].sort(
        (a, b) => new Date(b.month) - new Date(a.month)
      );
      // Sort certifications newest date first
      const sortedCerts = [...LINKEDIN_DATA.certifications].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setAwards(sortedAwards);
      setCertifications(sortedCerts);
      setLastUpdated(LINKEDIN_DATA.profile.lastUpdated);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return { awards, certifications, experience: LINKEDIN_DATA.experience, loading, lastUpdated, profile: LINKEDIN_DATA.profile };
};

export default useLinkedInData;
