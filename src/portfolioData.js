// src/portfolioData.js


export function getDefaultData() {
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
          { title: "Programming Languages", items: ["C", "C++", "Python", "Assembly", "VHDL", "Verilog"] },
          {
            title: "Platforms",
            items: ["STM32", "Raspberry Pi", "Jetson Nano", "ESP32/ESP8266", "EC200", "MC60"]
          },
          { title: "Protocols", items: ["SPI", "I2C", "UART", "MQTT", "HTTP", "BACnet IP", "Infrared"] },
          { title: "Tools", items: ["Git", "BitBucket", "MongoDB", "SourceTree"] },
          {
            title: "Concurrency & Parallel Programming",
            items: [
              "Multithreaded Programming (C/C++)",
              "Race Conditions & Deadlock Avoidance",
              "Mutexes, Semaphores & Spinlocks",
              "Barriers & Condition Variables",
              "Memory Consistency Models",
              "Cache Coherence (MESI)",
              "Transactional Memory"
            ]
          },
          {
            title: "Embedded Systems & Operating Systems",
            items: [
              "Linux Kernel Development",
              "Device Drivers",
              "Kernel Modules",
              "Yocto",
              "Buildroot",
              "Real-Time Operating Systems (RTOS)"
            ]
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
            title: "Environment Sensing System using FPGA",
            description: "Designed an FPGA-based environment sensing system implementing custom I2C and SPI controllers to interface with temperature, humidity, accelerometer, and light sensors, with real-time data displayed on seven-segment displays.",
            tech: ["verilog","FPGA"],
            link: "https://github.com/Vrushabhgada/Environment-Sensing-System-using-FPGA"
          },
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
            title: "Time Synchronome Real-Time System",
            description: "Time Synchronome is a real-time embedded systems project running on a Raspberry Pi 4 with a Logitech C270 camera that demonstrates precise time-synchronized image capture. The system operates in two modes: capturing one frame per second of an analog clock (1 Hz) or ten frames per second of a digital clock (10 Hz), storing each frame with accurate timestamps in PPM format. It uses a multi-threaded architecture with Rate Monotonic scheduling to ensure non-blurry, uniquely timestamped frames, with an optional feature to store color-inverted versions of captured images",
            tech: ["Rpi","C","Real Time Systems","Pthreads","Rate Monotonic Scheduling"],
            link: "https://github.com/Vrushabhgada/Time_synchronome_real_time_system"
          },
          {
            title: "Python mines Game",
            description: "Python Mines Game is a simple minesweeper-style game built using Python and the Kivy library. The game features a 5x5 grid of 25 tiles, with 3 randomly placed mines hidden among them. Players click on tiles to reveal safe spots while avoiding the mines, creating a classic mine-detection gameplay experience with an intuitive graphical interface powered by Kivy.",
            tech: ["python","kivy"],
            link :"https://github.com/Vrushabhgada/Python_mines_Games"
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

