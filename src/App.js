import React, { useState, useEffect, useCallback } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Cpu,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Wifi,
  BookOpen,
  Trophy,
  Linkedin  // Add this

} from 'lucide-react';
import './App.css';
import './storage-mock';

// ==================== COMPONENTS ====================

function HeroSection({ personal }) {
  if (!personal) return null;

  return (
    <div className="relative py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50"></div>
      <div className="absolute inset-0">
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

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-base md:text-lg">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 hover:text-blue-400 transition bg-slate-800/30 px-4 py-2 rounded-lg"
          >
            <Mail size={20} />
            <span className="text-white">{personal.email}</span>
          </a>

          <a
            href={`tel:${personal.phoneUSA}`}
            className="flex items-center gap-2 hover:text-blue-400 transition bg-slate-800/30 px-4 py-2 rounded-lg"
          >
            <Phone size={20} />
            <span className="text-white">+1 (303) 472-2116</span>
          </a>

          <a
            href={`tel:${personal.phoneIndia}`}
            className="flex items-center gap-2 hover:text-blue-400 transition bg-slate-800/30 px-4 py-2 rounded-lg"
          >
            <Phone size={20} />
            <span className="text-white">+91 9870771576</span>
          </a>


          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition bg-slate-800/30 px-4 py-2 rounded-lg"
          >
            <Linkedin size={20} />
            <span className="text-white">LinkedIn</span>
          </a>


          <span className="flex items-center gap-2 bg-slate-800/30 px-4 py-2 rounded-lg">
            <MapPin size={20} />
            <span className="text-white">{personal.location}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function FloatingNavigation({ activeSection, setActiveSection }) {
  const sections = [
    { id: 'about', icon: Terminal, label: 'About' },
    { id: 'portfolio', icon: Trophy, label: 'Portfolio' }, // Changed from 'projects' to 'portfolio'
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'education', icon: GraduationCap, label: 'Education' }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-slate-800/90 backdrop-blur-lg border border-white/20 rounded-full px-4 py-3 shadow-2xl">
        <nav className="flex items-center gap-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                title={section.label}
              >
                <Icon size={20} />
                <span className={`text-sm font-medium ${isActive ? 'block' : 'hidden md:block'}`}>
                  {section.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

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

function Skills({ skills }) {
  if (!skills) return null;

  const colors = [
    {
      border: 'border-blue-400/50 hover:border-blue-400/50',
      bg: 'bg-blue-500/20',
      text: 'text-blue-400'
    },
    {
      border: 'border-purple-400/50 hover:border-purple-400/50',
      bg: 'bg-purple-500/20',
      text: 'text-purple-400'
    },
    {
      border: 'border-green-400/50 hover:border-green-400/50',
      bg: 'bg-green-500/20',
      text: 'text-green-400'
    },
    {
      border: 'border-yellow-400/50 hover:border-yellow-400/50',
      bg: 'bg-yellow-500/20',
      text: 'text-yellow-400'
    }
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
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur rounded-xl p-6 border transition ${color.border}`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${color.text}`}>{category.title}</h3>
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
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition"
          >
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
                  <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
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

function Portfolio({ portfolio }) {
  if (!portfolio || !portfolio.items) return null;

  console.log('Portfolio data received:', portfolio);

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <Trophy className="text-yellow-400" />
        Portfolio Highlights
      </h2>

      {/* Projects Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-blue-400">
          <Wifi size={28} />
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.items.map((project, index) => {
            const hasLink = project &&
              project.link &&
              typeof project.link === 'string' &&
              project.link.trim().length > 0 &&
              project.link.trim() !== 'undefined';

            const linkUrl = hasLink ? project.link.trim() : '';

            return (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10 transition-all duration-300 ${hasLink ? 'hover:border-blue-400/50 hover:scale-[1.02] cursor-pointer group' : ''
                  }`}
                onClick={() => {
                  if (hasLink && linkUrl) {
                    window.open(linkUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
                role={hasLink ? "button" : "article"}
                tabIndex={hasLink ? 0 : -1}
                onKeyDown={(e) => {
                  if (hasLink && linkUrl && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    window.open(linkUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-semibold ${hasLink
                      ? 'text-blue-400 group-hover:text-blue-300 transition-colors inline-flex items-center gap-2'
                      : 'text-blue-400'
                      }`}>
                      {project.title || 'Untitled Project'}
                      {hasLink && (
                        <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                          ↗
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                {project.period && (
                  <p className="text-sm text-gray-400 mb-3">{project.period}</p>
                )}

                <p className="text-gray-300 mb-4">{project.description || 'No description available.'}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech && project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Publications Section */}
      {portfolio.publications && portfolio.publications.length > 0 && (
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-green-400">
            <BookOpen size={28} />
            Research Publications
          </h3>
          <div className="space-y-6">
            {portfolio.publications.map((publication, index) => {
              const hasLink = publication &&
                publication.link &&
                typeof publication.link === 'string' &&
                publication.link.trim().length > 0;

              return (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10 transition-all duration-300 ${hasLink ? 'hover:border-green-400/50 hover:scale-[1.02] cursor-pointer group' : ''
                    }`}
                  onClick={() => {
                    if (hasLink && publication.link.trim()) {
                      window.open(publication.link.trim(), '_blank', 'noopener,noreferrer');
                    }
                  }}
                  role={hasLink ? "button" : "article"}
                  tabIndex={hasLink ? 0 : -1}
                  onKeyDown={(e) => {
                    if (hasLink && publication.link.trim() && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      window.open(publication.link.trim(), '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className={`text-2xl font-semibold ${hasLink
                        ? 'text-green-400 group-hover:text-green-300 transition-colors inline-flex items-center gap-2'
                        : 'text-green-400'
                        }`}>
                        {publication.title}
                        {hasLink && (
                          <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                            ↗
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-3">{publication.journal}</p>

                  {publication.authors && (
                    <p className="text-sm text-gray-400 mb-3">Authors: {publication.authors}</p>
                  )}

                  {publication.description && (
                    <p className="text-gray-300 mb-4">{publication.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Achievements Section */}
      {portfolio.achievement && (
        <div>
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-yellow-400">
            <Award size={28} />
            Notable Achievements
          </h3>
          <div
            className={`bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10 transition-all duration-300 ${portfolio.achievement.link ? 'hover:border-yellow-400/50 hover:scale-[1.02] cursor-pointer group' : ''
              }`}
            onClick={() => {
              if (portfolio.achievement.link) {
                const linkUrl = portfolio.achievement.link.trim();
                window.open(linkUrl, '_blank', 'noopener,noreferrer');
              }
            }}
            role={portfolio.achievement.link ? "button" : "article"}
            tabIndex={portfolio.achievement.link ? 0 : -1}
            onKeyDown={(e) => {
              if (portfolio.achievement.link && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                const linkUrl = portfolio.achievement.link.trim();
                window.open(linkUrl, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <h4 className="text-2xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
              <span className="flex items-center gap-2">
                {portfolio.achievement.title}
                {portfolio.achievement.link && (
                  <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                )}
              </span>
            </h4>
            <div className="text-gray-300">
              <p className="mb-3">{portfolio.achievement.description}</p>
              <p className="text-blue-400 font-semibold mb-3">{portfolio.achievement.rank}</p>
              {portfolio.achievement.link && (
                <p className="text-sm text-yellow-300 opacity-80 group-hover:opacity-100 transition-opacity">
                  Click to view certificate
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">{edu.degree}</h3>
            <p className="text-xl text-gray-300 mb-2">{edu.school}</p>
            <div className="flex flex-col md:flex-row md:justify-between text-gray-400">
              <span>{edu.period}</span>
              <span>{edu.location}</span>
            </div>
            {edu.gpa && <p className="mt-2 text-green-400 font-semibold">CGPA: {edu.gpa}</p>}
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

function Footer({ personal }) {
  if (!personal) return null;

  return (
    <footer className="bg-slate-900/80 border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">Let's connect and build something amazing together!</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href={`mailto:${personal.email}`} className="hover:text-blue-400 transition" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href={`tel:${personal.phoneUSA}`} className="hover:text-blue-400 transition" aria-label="Phone USA">
            <Phone size={24} />
          </a>
          <a href={`tel:${personal.phoneIndia}`} className="hover:text-blue-400 transition" aria-label="Phone India">
            <Phone size={24} />
          </a>
        </div>
        <p className="text-gray-500 mt-6 text-sm">© 2025 {personal.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ==================== DEFAULT DATA ====================

function getDefaultData() {
  return {
    personal: {
      name: "Vrushabh Gada",
      title: "Embedded Systems Engineer",
      email: "gada.vrushabh@gmail.com",
      phoneUSA: "+13034722116",
      phoneIndia: "+919870771576",
      location: "Boulder, USA",
      linkedin: "https://www.linkedin.com/in/vrushabh-gada-477b5416b/",  // Add this
      about: [
        "I'm an Embedded Systems Engineer passionate about IoT, firmware development, and creating innovative hardware-software solutions. Currently pursuing my Professional Master's in Embedded Systems Engineering at the University of Colorado Boulder.",
        "With over 3 years of experience in embedded development, I've worked on projects ranging from home automation systems to industrial IoT solutions. I specialize in microcontroller programming, wireless communication protocols, and real-time operating systems.",
        "My expertise spans across multiple platforms including STM32, ESP32, and Raspberry Pi, and I'm proficient in low-level programming languages like C and C++, as well as Python for higher-level applications."
      ]
    },
    skills: {
      categories: [
        { title: "Programming Languages", items: ["C", "C++", "Python", "Assembly"] },
        {
          title: "Platforms",
          items: ["RTOS", "STM32", "Raspberry Pi", "Jetson Nano", "ESP32/ESP8266", "EC200", "MC60"]
        },
        { title: "Protocols", items: ["SPI", "I2C", "UART", "MQTT", "HTTP", "BACnet IP", "Infrared"] },
        { title: "Tools", items: ["Git", "BitBucket", "MongoDB", "SourceTree"] }
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
          period: "June 2021 - Aug 2024",
          location: "India",
          points: [
            "Led firmware development for AC automation, energy monitoring, and signage IoT systems",
            "Coordinated with data teams to implement analytics and dashboards",
            "Delivered 10+ features, resolved operational issues, and debugged hardware using oscilloscopes and logic analyzers"
          ]
        },
        {
          title: "Research Assistant",
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
    portfolio: {
      items: [
        {
          title: "2048 Game on STM32",
          description: "Developed a functional 2048 game using the STM32F091RC Nucleo board and ILI9341 LCD, interfaced via SPI. Implemented touch-based swipe gesture controls for game interaction.",
          tech: ["STM32", "SPI", "Embedded C"],
          link: "https://github.com/Vrushabhgada/STM32_2048Game"
        },
        {
          title: "rpi4b-linux-ota-mender",
          description: "This project implements an OTA update mechanism for kernel images using the Yocto Project build system. It enables remote kernel updates without physical access to the device, ensuring seamless system maintenance and security patching.",
          tech: ["Yocto", "Mender", "Linux Kernel"],
          link: "https://github.com/Vrushabhgada/rpi4b-linux-ota-mender"
        },
        {
          title: "Home Automation System",
          period: "June 2021 - May 2022",
          description: "Led a team of 3 to develop an ESP32-based home automation system with MQTT-based communication to a Flutter mobile app. Responsible for firmware development, component selection, and system architecture design.",
          tech: ["ESP32", "MQTT", "Flutter"]
        }
      ],
      publications: [
        {
          title: "Data Analysis of COVID-19 Hospital Records Using Contextual Patient Classification System",
          description: "We developed a contextual patient classification system using the Knuth-Morris-Pratt algorithm to automatically categorize COVID-19 and non-COVID-19 patients from hospital discharge summaries, achieving 97.4% classification accuracy. Our Python-based system transforms unorganized hospital records into structured datasets, enabling comprehensive analysis of vital signs, medications, medical services, and patient outcomes. This work demonstrates how computational text processing can support early prediction and optimal resource allocation in hospital settings during pandemic conditions.",
          link: "https://link.springer.com/article/10.1007/s40745-022-00378-9"
        },
        {
          title: "Disease Prediction From Various Symptoms Using Machine Learning",
          description: "We present a comprehensive machine learning approach to predict diseases based on patient-reported symptoms, addressing the critical need for early diagnosis and accessible healthcare solutions. Our system employs multiple classification algorithms including Decision Trees, Random Forest, Naive Bayes, and Support Vector Machines to analyze symptom patterns and predict potential diseases with high accuracy. By leveraging a dataset of symptoms mapped to various diseases, our model enables patients to receive preliminary diagnostic insights before consulting healthcare professionals, potentially reducing diagnostic delays and improving healthcare accessibility, particularly in resource-constrained settings.",
          link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3661426"
        },
        {
          title: "Optical Character Recognition Using Deep Learning Techniques for Printed and Handwritten Documents",
          description: "We developed an advanced Optical Character Recognition system leveraging deep learning architectures to accurately extract text from both printed and handwritten documents, addressing the challenge of document digitization across diverse writing styles and formats. Our approach utilizes Convolutional Neural Networks and Recurrent Neural Networks with attention mechanisms to handle the complexity of handwritten text recognition, which traditionally poses significant challenges due to variations in writing styles, document quality, and text orientation. The system demonstrates robust performance across multiple document types and languages, providing a practical solution for automated document processing, digital archiving, and accessibility applications in various domains including education, healthcare, and administrative services.",
          link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3664620"
        }
      ],
      achievement: {
        title: "e-Yantra Robotics Competition 2020-21, IIT Bombay",
        description: "Built autonomous disaster-response bot on FPGA (De0-Nano Cyclone IV) using Zigbee + UART.",
        rank: "🏆 Ranked Top 5 among 2000+ teams",
        link: "http://certificate.e-yantra.org/validate/d7f928f3a22f44b365384b441b43334f69334a7b"
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
        }
      ]
    }
  };
}

// Main App Component
export default function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('about');
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    personal: null,
    skills: null,
    experience: null,
    portfolio: null, // Changed from 'projects' to 'portfolio'
    education: null
  });

  const loadAllData = useCallback(async () => {
    console.log('Loading all data from storage...');
    const loaded = {};

    const keys = ['personal', 'skills', 'experience', 'portfolio', 'education']; // Updated key
    for (const key of keys) {
      try {
        const item = await window.storage.get(`portfolio:${key}`);
        console.log(`Loaded ${key}:`, item);
        loaded[key] = item ? JSON.parse(item.value) : null;
      } catch (e) {
        console.error(`Error loading ${key}:`, e);
        loaded[key] = null;
      }
    }

    setData(loaded);
    console.log('Final loaded data:', loaded);
    return loaded;
  }, []);

  const saveDefaultData = useCallback(async () => {
    console.log('Saving default data...');
    const defaultData = getDefaultData();
    const keys = Object.keys(defaultData);
    for (const key of keys) {
      await window.storage.set(`portfolio:${key}`, JSON.stringify(defaultData[key]));
    }
    console.log('Default data saved');
  }, []);

  const initializeData = useCallback(async () => {
    console.log('Initializing data...');
    try {
      // First, clear any existing data to start fresh
      console.log('Clearing existing data...');
      const keys = ['personal', 'skills', 'experience', 'portfolio', 'education']; // Updated key
      for (const key of keys) {
        try {
          await window.storage.remove(`portfolio:${key}`);
        } catch (e) {
          // Ignore errors if key doesn't exist
        }
      }

      // Save fresh default data
      console.log('Saving fresh default data...');
      await saveDefaultData();

      // Load the fresh data
      const loaded = await loadAllData();
      console.log('Fresh data loaded:', loaded);

      setData(loaded);
    } catch (error) {
      console.error('Error initializing data:', error);
      // Try to save default data anyway
      await saveDefaultData();
      await loadAllData();
    }
    setLoading(false);
  }, [loadAllData, saveDefaultData]);

  useEffect(() => {
    initializeData();
  }, [initializeData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading portfolio...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pb-24">
      <HeroSection personal={data.personal} />

      <FloatingNavigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {activeSection === 'about' && <About personal={data.personal} />}
        {activeSection === 'skills' && <Skills skills={data.skills} />}
        {activeSection === 'experience' && <Experience experience={data.experience} />}
        {activeSection === 'portfolio' && <Portfolio portfolio={data.portfolio} />}
        {activeSection === 'education' && <Education education={data.education} />}
      </div>

      <Footer personal={data.personal} />
    </div>
  );
}