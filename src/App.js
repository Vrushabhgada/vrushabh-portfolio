import React, { useState, useEffect, useCallback } from 'react';
import { Mail, Phone, MapPin, Cpu, Code, Briefcase, GraduationCap, Award, Terminal, BookOpen, Trophy, Linkedin } from 'lucide-react';
import './App.css';
import './storage-mock';
import { getDefaultData } from './portfolioData';

const colorSchemes = {
  neutralGray1: {
    name: "Cool Gray",
    hero: "from-gray-900",
    about: "from-gray-900",
    skills: "from-gray-800 ",
    experience: "from-gray-900 ",
    portfolio: "from-gray-100 ",
    education: "from-gray-800 ",
    card: "bg-gray-800/90",
    border: "border-gray-500/50",
    primary: "from-gray-100",
    secondary: "text-gray-300",
    accent: "text-gray-400",
    navActive: "from-gray-600",
    navBorder: "border-gray-500/40",
    fullappbackground: "bg-gray-900",
    FloatingNavigation: "bg-gray-800/90"
  }
};


// ==================== COMPONENTS ====================
function HeroSection({ personal, theme }) {
  if (!personal) return null;

  return (
    <div className={`min-h-screen flex items-center justify-center  ${theme.hero} text-white px-4`}>
      <div className="text-center space-y-8 max-w-6xl">
        <div className="space-y-4">
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r ${theme.primary} bg-clip-text text-transpart animate-pulse`}>
            {personal.name}
          </h1>
          <p className={`text-xl sm:text-2xl md:text-3xl ${theme.secondary}`}>
            {personal.title}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base">
          <a
            href={`mailto:${personal.email}`}
            className={`flex items-center gap-2 hover:${theme.accent}  ${theme.card}  px-3 sm:px-4 py-2 rounded-lg border ${theme.navBorder} hover:${theme.border}`}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">{personal.email}</span>
            <span className="sm:hidden">Email</span>
          </a>

          <a
            href={`tel:${personal.phoneUSA}`}
            className={`flex items-center gap-2 hover:${theme.accent}  ${theme.card}  px-3 sm:px-4 py-2 rounded-lg border ${theme.navBorder} hover:${theme.border}`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">+1 (303) 472-2116</span>
            <span className="md:hidden">USA</span>
          </a>

          <a
            href={`tel:${personal.phoneIndia}`}
            className={`flex items-center gap-2 hover:${theme.accent}  ${theme.card}  px-3 sm:px-4 py-2 rounded-lg border ${theme.navBorder} hover:${theme.border}`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">+91 9870771576</span>
            <span className="md:hidden">India</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 hover:${theme.accent}  ${theme.card}  px-3 sm:px-4 py-2 rounded-lg border ${theme.navBorder} hover:${theme.border}`}
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className={`flex items-center justify-center gap-2 ${theme.secondary}`}>
          <MapPin className="w-5 h-5" />
          <span>{personal.location}</span>
        </div>
      </div>
    </div>
  );
}

function FloatingNavigation({ activeSection, theme }) {
  const sections = [
    { id: 'about', icon: Terminal, label: 'About' },
    { id: 'portfolio', icon: Trophy, label: 'Portfolio' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'education', icon: GraduationCap, label: 'Education' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${theme.FloatingNavigation} rounded-full px-2 sm:px-4 py-2 sm:py-3 border ${theme.navBorder}`}>
      <div className="flex gap-1 sm:gap-2">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full  duration-300 text-sm sm:text-base ${isActive
                ? `bg-gradient-to-r ${theme.navActive} text-white`
                : `text-gray-300  hover:${theme.accent}`
                }`}
              title={section.label}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">{section.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function About({ personal, theme }) {
  if (!personal) return null;

  return (
    <section id="about" className={` py-20 px-4  ${theme.about}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent flex items-center gap-3`}>
          <Terminal className={`w-8 h-8 sm:w-10 sm:h-10 ${theme.accent}`} />
          About Me
        </h2>

        <div className={`space-y-6 text-base sm:text-lg text-gray-300 ${theme.card}  p-6 sm:p-8 rounded-2xl border-2 ${theme.border} shadow-xl`}>
          {personal.about.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills({ skills, theme }) {
  if (!skills) return null;

  const colors = [
    { border: `${theme.border}`, bg: theme.card, text: theme.secondary },
    { border: `${theme.border}`, bg: theme.card, text: theme.accent },
    { border: `${theme.border}`, bg: theme.card, text: theme.secondary },
    { border: `${theme.border}`, bg: theme.card, text: theme.accent }
  ];

  return (
    <section id="skills" className={`py-20 px-4  ${theme.skills}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent flex items-center gap-3`}>
          <Code className={`w-8 h-8 sm:w-10 sm:h-10 ${theme.accent}`} />
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.categories.map((category, index) => {
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className={`${color.bg} border-2 ${color.border} rounded-2xl p-6 sm:p-8  duration-300  `}
              >
                <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${color.text} flex items-center gap-2`}>
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.items.map((item, idx) => (
                    <span
                      key={idx}
                      className={`${color.text} ${color.bg} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border ${color.border}  -transform`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function Experience({ experience, theme }) {
  if (!experience) return null;

  return (
    <section id="experience" className={`py-20 px-4  ${theme.experience}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent flex items-center gap-3`}>
          <Briefcase className={`w-8 h-8 sm:w-10 sm:h-10 ${theme.accent}`} />
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experience.jobs.map((job, index) => (
            <div
              key={index}
              className={`${theme.card}  rounded-2xl p-6 sm:p-8 border-2 ${theme.border} hover:shadow-xl  duration-300`}
            >
              <div className="mb-6">
                <h3 className={`text-xl sm:text-2xl font-bold ${theme.secondary} mb-2`}>{job.title}</h3>
                <p className={`text-lg sm:text-xl ${theme.accent} mb-2`}>{job.company}</p>
                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                {job.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 leading-relaxed">
                    <span className={`${theme.accent} mt-1.5`}>▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio({ portfolio, theme }) {
  if (!portfolio || !portfolio.items) return null;

  return (
    <section id="portfolio" className={` py-20 px-4  ${theme.portfolio}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent flex items-center gap-3`}>
          <Trophy className={`w-8 h-8 sm:w-10 sm:h-10 ${theme.accent}`} />
          Portfolio Highlights
        </h2>

        {/* Projects Section */}
        <div className="mb-16">
          <h3 className={`text-2xl sm:text-3xl font-bold ${theme.secondary} mb-8 flex items-center gap-2`}>
            <Code className="w-6 h-6 sm:w-7 sm:h-7" />
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {portfolio.items.map((project, index) => {
              const hasLink = project && project.link && typeof project.link === 'string' &&
                project.link.trim().length > 0 && project.link.trim() !== 'undefined';
              const linkUrl = hasLink ? project.link.trim() : '';

              return (
                <div
                  key={index}
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
                  className={`${theme.card}  rounded-2xl p-6 sm:p-8 border-2 ${theme.border}  duration-300 ${hasLink ? 'cursor-pointer hover:scale-105 hover:shadow-xl' : ''
                    }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className={`text-lg sm:text-xl font-bold ${theme.secondary}`}>
                      {project.title || 'Untitled Project'}
                    </h4>
                    {hasLink && (
                      <span className={`${theme.accent} text-xl`}>↗</span>
                    )}
                  </div>

                  {project.period && (
                    <p className="text-xs sm:text-sm text-gray-100 mb-4">{project.period}</p>
                  )}

                  <p className="text-sm sm:text-base text-gray-100 mb-6 leading-relaxed">
                    {project.description || 'No description available.'}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech && project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-xs sm:text-sm ${theme.card} ${theme.secondary} px-3 py-1 rounded-full border ${theme.border}`}
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
          <div className="mb-16">
            <h3 className={`text-2xl sm:text-3xl font-bold ${theme.secondary} mb-8 flex items-center gap-2`}>
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
              Research Publications
            </h3>

            <div className="space-y-6">
              {portfolio.publications.map((publication, index) => {
                const hasLink = publication && publication.link && typeof publication.link === 'string' &&
                  publication.link.trim().length > 0;

                return (
                  <div
                    key={index}
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
                    className={`${theme.card}  rounded-2xl p-6 sm:p-8 border-2 ${theme.border}  duration-300 ${hasLink ? 'cursor-pointer hover:shadow-xl hover:scale-105' : ''
                      }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className={`text-lg sm:text-xl font-bold ${theme.accent}`}>
                        {publication.title}
                      </h4>
                      {hasLink && (
                        <span className={`${theme.accent} text-xl`}>↗</span>
                      )}
                    </div>

                    <p className={`text-base sm:text-lg ${theme.secondary} mb-3`}>{publication.journal}</p>

                    {publication.authors && (
                      <p className="text-xs sm:text-sm text-gray-400 mb-3">Authors: {publication.authors}</p>
                    )}

                    {publication.description && (
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{publication.description}</p>
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
            <h3 className={`text-2xl sm:text-3xl font-bold ${theme.secondary} mb-8 flex items-center gap-2`}>
              <Award className="w-6 h-6 sm:w-7 sm:h-7" />
              Notable Achievements
            </h3>

            <div
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
              className={` ${theme.primary} bg-opacity-10  rounded-2xl p-6 sm:p-8 border-2 ${theme.border}  duration-300 ${portfolio.achievement.link ? 'cursor-pointer hover:scale-105 hover:shadow-xl' : ''
                }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className={`text-xl sm:text-2xl font-bold ${theme.accent}`}>
                  {portfolio.achievement.title}
                </h4>
                {portfolio.achievement.link && (
                  <span className={`${theme.accent} text-xl`}>↗</span>
                )}
              </div>

              <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
                {portfolio.achievement.description}
              </p>

              <p className={`text-lg sm:text-xl font-bold ${theme.secondary} mb-2`}>
                {portfolio.achievement.rank}
              </p>

              {portfolio.achievement.link && (
                <p className={`text-xs sm:text-sm ${theme.accent}`}>
                  Click to view certificate
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Education({ education, theme }) {
  if (!education) return null;

  return (
    <section id="education" className={`py-20 ${theme.education}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent flex items-center gap-3`}>
          <GraduationCap className={`w-8 h-8 sm:w-10 sm:h-10 ${theme.accent}`} />
          Education
        </h2>

        <div className="space-y-8 mb-12">
          {education.degrees.map((edu, index) => (
            <div
              key={index}
              className={`${theme.card}  rounded-2xl p-6 sm:p-8 border-2 ${theme.border} hover:shadow-xl  duration-300`}
            >
              <h3 className={`text-xl sm:text-2xl font-bold ${theme.secondary} mb-2`}>{edu.degree}</h3>
              <p className={`text-lg sm:text-xl ${theme.accent} mb-2`}>{edu.school}</p>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                {edu.period} • {edu.location}
              </p>

              {edu.gpa && (
                <p className={`text-base sm:text-lg font-semibold ${theme.secondary}`}>
                  CGPA: {edu.gpa}
                </p>
              )}
            </div>
          ))}
        </div>

        {education.extracurricular && education.extracurricular.length > 0 && (
          <div>
            <h3 className={`text-2xl sm:text-3xl font-bold ${theme.secondary} mb-8`}>
              Extracurricular Activities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.extracurricular.map((activity, index) => (
                <div
                  key={index}
                  className={`${theme.card}  rounded-xl p-6 border-2 ${theme.border} hover:shadow-xl  duration-300`}
                >
                  <h4 className={`text-lg sm:text-xl font-bold ${theme.secondary} mb-3`}>
                    {activity.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer({ personal, theme }) {
  if (!personal) return null;

  return (
    <footer className={` ${theme.hero} text-white py-12 px-4 border-t-2 ${theme.border}`}>
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <p className={`text-lg sm:text-xl ${theme.secondary}`}>
          Let's connect and build something amazing together!
        </p>

        <p className="text-sm sm:text-base text-gray-400">
          © 2025 {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Main App Component
export default function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('about');
  const [loading, setLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('neutralGray1');
  const [data, setData] = useState({
    personal: null,
    skills: null,
    experience: null,
    portfolio: null,
    education: null
  });

  const theme = colorSchemes[currentTheme];

  const loadAllData = useCallback(async () => {
    console.log('Loading all data from storage...');
    const loaded = {};
    const keys = ['personal', 'skills', 'experience', 'portfolio', 'education'];

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
      console.log('Clearing existing data...');
      const keys = ['personal', 'skills', 'experience', 'portfolio', 'education'];

      for (const key of keys) {
        try {
          await window.storage.remove(`portfolio:${key}`);
        } catch (e) {
          // Ignore errors if key doesn't exist
        }
      }

      console.log('Saving fresh default data...');
      await saveDefaultData();

      const loaded = await loadAllData();
      console.log('Fresh data loaded:', loaded);
      setData(loaded);
    } catch (error) {
      console.error('Error initializing data:', error);
      await saveDefaultData();
      await loadAllData();
    }

    setLoading(false);
  }, [loadAllData, saveDefaultData]);

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme && colorSchemes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);



  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'portfolio', 'skills', 'experience', 'education'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    initializeData();
  }, [initializeData]);

  if (loading) {
    return (
      <div className=" justify-center  from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xl text-purple-300">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme.fullappbackground}`}>
      <FloatingNavigation activeSection={activeSection} theme={theme} />
      <HeroSection personal={data.personal} theme={theme} />
      <About personal={data.personal} theme={theme} />
      <Portfolio portfolio={data.portfolio} theme={theme} />
      <Skills skills={data.skills} theme={theme} />
      <Experience experience={data.experience} theme={theme} />
      <Education education={data.education} theme={theme} />
      <Footer personal={data.personal} theme={theme} />
    </div>
  );
}