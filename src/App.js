import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Cpu, Code, Briefcase, GraduationCap, Award, Terminal, Wifi } from 'lucide-react';
import './App.css';
import './storage-mock';

// Main App Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [loading, setLoading] = useState(true);
  // const [showDataManager, setShowDataManager] = useState(false);
  
  // State for all data
  const [data, setData] = useState({
    personal: null,
    skills: null,
    experience: null,
    projects: null,
    education: null
  });

  // Initialize data on mount
  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    try {
      // Try to load existing data
      const loaded = await loadAllData();
      
      // If no data exists, initialize with default data
      if (!loaded.personal) {
        await saveDefaultData();
        await loadAllData();
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error initializing data:', error);
      // Initialize with default data if loading fails
      await saveDefaultData();
      await loadAllData();
      setLoading(false);
    }
  };

  const loadAllData = async () => {
    const loaded = {};
    
    try {
      const personalData = await window.storage.get('portfolio:personal');
      loaded.personal = personalData ? JSON.parse(personalData.value) : null;
    } catch (e) {
      loaded.personal = null;
    }

    try {
      const skillsData = await window.storage.get('portfolio:skills');
      loaded.skills = skillsData ? JSON.parse(skillsData.value) : null;
    } catch (e) {
      loaded.skills = null;
    }

    try {
      const experienceData = await window.storage.get('portfolio:experience');
      loaded.experience = experienceData ? JSON.parse(experienceData.value) : null;
    } catch (e) {
      loaded.experience = null;
    }

    try {
      const projectsData = await window.storage.get('portfolio:projects');
      loaded.projects = projectsData ? JSON.parse(projectsData.value) : null;
    } catch (e) {
      loaded.projects = null;
    }

    try {
      const educationData = await window.storage.get('portfolio:education');
      loaded.education = educationData ? JSON.parse(educationData.value) : null;
    } catch (e) {
      loaded.education = null;
    }

    setData(loaded);
    return loaded;
  };

  const saveDefaultData = async () => {
    const defaultData = getDefaultData();
    
    await window.storage.set('portfolio:personal', JSON.stringify(defaultData.personal));
    await window.storage.set('portfolio:skills', JSON.stringify(defaultData.skills));
    await window.storage.set('portfolio:experience', JSON.stringify(defaultData.experience));
    await window.storage.set('portfolio:projects', JSON.stringify(defaultData.projects));
    await window.storage.set('portfolio:education', JSON.stringify(defaultData.education));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading portfolio...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <HeroSection personal={data.personal} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Data Manager Button */}
      {/* <button
        onClick={() => setShowDataManager(!showDataManager)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition-all"
        title="Manage Portfolio Data"
      >
        <Upload size={24} />
      </button> */}

      {/* Data Manager Panel
      {showDataManager && (
        <div className="fixed bottom-20 right-4 bg-slate-800 border border-white/20 rounded-lg p-4 shadow-xl z-50 w-64">
          <h3 className="text-lg font-bold mb-3">Data Manager</h3>
          <div className="space-y-2">
            <button
              onClick={exportData}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-all"
            >
              <Download size={16} />
              Export Data
            </button>
            <label className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 cursor-pointer transition-all">
              <Upload size={16} />
              Import Data
              <input type="file" accept=".json" onChange={importData} className="hidden" />
            </label>
            <button
              onClick={resetToDefault}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-all"
            >
              <RefreshCw size={16} />
              Reset to Default
            </button>
          </div>
        </div>
      )} */}
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        {activeSection === 'about' && <About personal={data.personal} />}
        {activeSection === 'skills' && <Skills skills={data.skills} />}
        {activeSection === 'experience' && <Experience experience={data.experience} />}
        {activeSection === 'projects' && <Projects projects={data.projects} />}
        {activeSection === 'education' && <Education education={data.education} />}
      </div>

      <Footer personal={data.personal} />
    </div>
  );
}

// Hero Section Component
function HeroSection({ personal }) {
  if (!personal) return null;

  return (
    // <div className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="relative py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>
      <div className="absolute inset-0">
        {/* <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div> */}
        {/* <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-700"></div> */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-6">
          <Cpu className="w-16 h-16 mx-auto mb-4 text-blue-400" />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {personal.name}
        </h1>
        <p className="text-2xl md:text-3xl text-blue-300 mb-8">{personal.title}</p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-blue-400 transition">
            <Mail size={20} />
            <span>{personal.email}</span>
          </a>
          <a href={`tel:${personal.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition">
            <Phone size={20} />
            <span>{personal.phoneDisplay}</span>
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={20} />
            <span>{personal.location}</span>
          </span>
        </div>
        {/* <ChevronDown className="w-8 h-8 mx-auto animate-bounce" /> */}
      </div>
    </div>
  );
}

// Navigation Component
function Navigation({ activeSection, setActiveSection }) {
  const sections = ['about', 'skills', 'experience', 'projects', 'education'];

  return (
    <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 py-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`capitalize text-base md:text-lg font-medium transition ${
                activeSection === section
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

// About Component
function About({ personal }) {
  if (!personal) return null;

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Terminal className="text-blue-400" />
        About Me
      </h2>
      <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-white/10">
        {personal.about.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-300 leading-relaxed mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

// Skills Component
function Skills({ skills }) {
  if (!skills) return null;

  const colors = [
    { border: 'border-blue-400/50', bg: 'bg-blue-500/20', text: 'text-blue-400' },
    { border: 'border-purple-400/50', bg: 'bg-purple-500/20', text: 'text-purple-400' },
    { border: 'border-green-400/50', bg: 'bg-green-500/20', text: 'text-green-400' },
    { border: 'border-yellow-400/50', bg: 'bg-yellow-500/20', text: 'text-yellow-400' }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Code className="text-blue-400" />
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.categories.map((category, index) => {
          const color = colors[index % colors.length];
          return (
            <div key={index} className={`bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:${color.border} transition`}>
              <h3 className={`text-xl font-semibold mb-4 ${color.text}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <span key={idx} className={`px-4 py-2 ${color.bg} rounded-lg text-sm`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Experience Component
function Experience({ experience }) {
  if (!experience) return null;

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Briefcase className="text-blue-400" />
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experience.jobs.map((job, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">{job.title}</h3>
                <p className="text-lg text-gray-300">{job.company}</p>
              </div>
              <div className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
                <p>{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {job.points.map((point, idx) => (
                <li key={idx} className="flex gap-2 text-gray-300">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Projects Component
function Projects({ projects }) {
  if (!projects) return null;

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Wifi className="text-blue-400" />
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.items.map((project, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition hover:transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
            {project.period && (
              <p className="text-sm text-gray-400 mb-3">{project.period}</p>
            )}
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {projects.achievement && (
        <div className="mt-8 bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
            <Award size={24} />
            Achievement Highlight
          </h3>
          <div className="text-gray-300">
            <p className="font-semibold mb-2">{projects.achievement.title}</p>
            <p className="mb-2">{projects.achievement.description}</p>
            <p className="text-blue-400 font-semibold">{projects.achievement.rank}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Education Component
function Education({ education }) {
  if (!education) return null;

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <GraduationCap className="text-blue-400" />
        Education
      </h2>
      <div className="space-y-6">
        {education.degrees.map((edu, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">{edu.degree}</h3>
            <p className="text-xl text-gray-300 mb-2">{edu.school}</p>
            <div className="flex flex-col md:flex-row md:justify-between text-gray-400">
              <span>{edu.period}</span>
              <span>{edu.location}</span>
            </div>
            {edu.gpa && (
              <p className="mt-2 text-green-400 font-semibold">CGPA: {edu.gpa}</p>
            )}
          </div>
        ))}
      </div>

      {education.extracurricular && education.extracurricular.length > 0 && (
        <div className="mt-8 bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Extracurricular Activities</h3>
          <div className="space-y-4 text-gray-300">
            {education.extracurricular.map((activity, index) => (
              <div key={index}>
                <p className="font-semibold text-white mb-1">{activity.title}</p>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Footer Component
function Footer({ personal }) {
  if (!personal) return null;

  return (
    <footer className="bg-slate-900/80 border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">Let's connect and build something amazing together!</p>
        <div className="flex justify-center gap-6">
          <a href={`mailto:${personal.email}`} className="hover:text-blue-400 transition" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href={`tel:${personal.phone}`} className="hover:text-blue-400 transition" aria-label="Phone">
            <Phone size={24} />
          </a>
        </div>
        <p className="text-gray-500 mt-6 text-sm">© 2024 {personal.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Default Data Function
function getDefaultData() {
  return {
    personal: {
      name: "Vrushabh Gada",
      title: "Embedded Systems Engineer",
      email: "gada.vrushabh@gmail.com",
      phone: "+13034722116",
      phoneDisplay: "+1 (303) 472-2116",
      location: "Boulder, USA",
      about: [
        "I'm an Embedded Systems Engineer passionate about IoT, firmware development, and creating innovative hardware-software solutions. Currently pursuing my Professional Master's in Embedded Systems Engineering at the University of Colorado Boulder.",
        "With over 3 years of experience in embedded development, I've worked on projects ranging from home automation systems to industrial IoT solutions. I specialize in microcontroller programming, wireless communication protocols, and real-time operating systems.",
        "My expertise spans across multiple platforms including STM32, ESP32, and Raspberry Pi, and I'm proficient in low-level programming languages like C and C++, as well as Python for higher-level applications."
      ]
    },
    skills: {
      categories: [
        {
          title: "Programming Languages",
          items: ["C", "C++", "Python", "Assembly"]
        },
        {
          title: "Platforms",
          items: ["RTOS", "STM32", "Raspberry Pi", "Jetson Nano", "ESP32/ESP8266", "EC200", "MC60"]
        },
        {
          title: "Protocols",
          items: ["SPI", "I2C", "UART", "MQTT", "HTTP", "BACnet IP", "Infrared"]
        },
        {
          title: "Tools",
          items: ["Git", "BitBucket", "MongoDB", "SourceTree"]
        }
      ]
    },
    experience: {
      jobs: [
        {
          title: "Software Developer - Embedded",
          company: "Point Pi",
          period: "Aug 2024 - Dec 2024",
          location: "Boulder, USA",
          points: [
            "Integrated IoT devices (smart switches, sensors, actuators) into a central hub using Zigbee, BLE, and Wi-Fi",
            "Developed Python UI with PySide6 and provided API interface for mobile app integration"
          ]
        },
        {
          title: "Embedded Developer",
          company: "Icapotech Pvt. Ltd., IIT Bombay",
          period: "June 2021 – Aug 2024",
          location: "India",
          points: [
            "Led firmware development for AC automation, energy monitoring, and signage IoT systems",
            "Coordinated with data teams to implement analytics and dashboards",
            "Delivered 10+ features, resolved operational issues, and debugged hardware using oscilloscopes and logic analyzers"
          ]
        },
        {
          title: "Research Assistance",
          company: "Ninad's Research Lab",
          period: "April 2020 - July 2020",
          location: "Thane, India",
          points: [
            "Built a digital microscope with image/video capture for AI/ML analysis",
            "Developed a COVID-19 risk prediction kiosk using health sensors and survey logic"
          ]
        }
      ]
    },
    projects: {
      items: [
        {
          title: "2048 Game on STM32",
          description: "Developed a functional 2048 game using the STM32F091RC Nucleo board and ILI9341 LCD, interfaced via SPI. Implemented touch-based swipe gesture controls for game interaction.",
          tech: ["STM32", "SPI", "Embedded C"]
        },
        {
          title: "Home Automation System",
          period: "June 2021 – May 2022",
          description: "Led a team of 3 to develop an ESP32-based home automation system with MQTT-based communication to a Flutter mobile app. Responsible for firmware development, component selection, and system architecture design.",
          tech: ["ESP32", "MQTT", "Flutter"]
        },
        {
          title: "Research Publications",
          description: "Published multiple research papers on COVID-19 data analysis, disease prediction using ML, and OCR using deep learning techniques.",
          tech: ["Machine Learning", "Deep Learning", "Data Analysis"]
        }
      ],
      achievement: {
        title: "e-Yantra Robotics Competition 2020-21, IIT Bombay",
        description: "Built autonomous disaster-response bot on FPGA (De0-Nano Cyclone IV) using Zigbee + UART.",
        rank: "🏆 Ranked Top 5 among 2000+ teams"
      }
    },
    education: {
      degrees: [
        {
          degree: "Professional Master's in Embedded Systems Engineering",
          school: "University of Colorado Boulder",
          period: "2025 - Present",
          location: "Boulder, USA"
        },
        {
          degree: "Bachelor of Technology in Electronics and Telecommunication",
          school: "K. J. Somaiya College of Engineering",
          period: "2018 - 2022",
          location: "Mumbai, India",
          gpa: "8.96/10"
        }
      ],
      extracurricular: [
        {
          title: "LTspice Workshop Facilitator",
          description: "Co-conducted a 2-month workshop for junior students, teaching circuit simulation fundamentals. Received formal appreciation from faculty for leadership and clarity."
        },
        {
          title: "Tech Fest Organizer – Abhiyantriki",
          description: "Served on the organizing committee for K. J. Somaiya College's largest annual technical festival, managing logistics and operations."
        }
      ]
    }
  };
}