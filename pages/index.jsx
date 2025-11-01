import Typewriter from "typewriter-effect";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaUserTie,
  FaBriefcase,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f0f2d, #1a1a40)",
        color: "white",
        fontFamily: "Poppins, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* ✅ NAVBAR */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px", // reduced from 25px 50px
          position: "sticky",
          top: 0,
          background: "rgba(15,15,45,0.9)",
          backdropFilter: "blur(10px)",
          zIndex: 10,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            fontWeight: 700,
            fontSize: "1.6rem", // slightly smaller
            textAlign: "center",
            background: "linear-gradient(90deg, #ff4081, #ff7b00)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            letterSpacing: "1.1px",
            textTransform: "uppercase",
            textShadow: "0 0 10px rgba(255, 123, 0, 0.25)",
            lineHeight: 1.1,
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.textShadow =
              "0 0 18px rgba(255, 123, 0, 0.4), 0 0 12px rgba(255, 64, 129, 0.3)";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.textShadow =
              "0 0 10px rgba(255, 123, 0, 0.25)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Sandesh Dhande
          <span
            style={{
              color: "#ff7b00",
              fontWeight: 600,
              fontSize: "0.95rem",
              marginLeft: "6px",
              textTransform: "none",
              letterSpacing: "0.4px",
            }}
          >
            | Software Engineer
          </span>
        </div>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          {[
            "Home",
            "Experience",
            "Projects",
            "Skills",
            "Education",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#ddd",
                textDecoration: "none",
                fontSize: "0.95rem",
                padding: "5px 8px",
                borderRadius: 6,
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#ff4081")}
              onMouseOut={(e) => (e.target.style.color = "#ddd")}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* ✅ HERO SECTION */}
      <section
        id="home"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px", // reduced gap
          margin: "50px auto", // reduced from 80px
          padding: "45px 30px", // reduced from 60px 40px
          borderRadius: 20,
          background: "rgba(255,255,255,0.08)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
          maxWidth: "1150px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: "1 1 480px",
            minWidth: 300,
            padding: "10px",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            Hello, I'm{" "}
            <span style={{ color: "#ff4081", fontWeight: 800 }}>
              Sandesh Dhande 👋
            </span>
          </h1>

          <h2
            style={{
              marginTop: 10,
              fontSize: "1.5rem",
              color: "#ffb399",
              fontWeight: 600,
              marginBottom: "25px",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Full Stack Developer",
                  "Industrial Automation Specialist",
                  "Real-time Systems Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p
            style={{
              marginBottom: "30px",
              lineHeight: 1.8,
              color: "#ccc",
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            I’m a passionate full-stack and industrial software engineer with
            expertise in building
            <span style={{ color: "#ff7b00", fontWeight: 500 }}>
              {" "}
              real-time data-driven systems
            </span>
            ,
            <span style={{ color: "#ff7b00", fontWeight: 500 }}>
              {" "}
              IoT integrations
            </span>
            , and
            <span style={{ color: "#ff7b00", fontWeight: 500 }}>
              {" "}
              modern web platforms
            </span>
            . I bridge the gap between automation hardware and cloud
            technologies to deliver scalable, efficient, and reliable software
            solutions.
          </p>

          {/* Skills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "35px",
            }}
          >
            {[
              "Java",
              "Node.js",
              "Python",
              "Next.js",
              "SQL Server",
              "Redis",
              "Docker",
              "Jenkins",
              "OPC UA",
              "Modbus",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  padding: "8px 16px",
                  borderRadius: 14,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  color: "#eee",
                  transition: "0.3s",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            <a
              href="#projects"
              style={{
                background: "linear-gradient(90deg, #ff4081, #ff7b00)",
                color: "white",
                padding: "14px 28px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 4px 15px rgba(255,64,129,0.3)",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(255,123,0,0.5)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(255,64,129,0.3)")
              }
            >
              🚀 View Projects
            </a>
            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "#ff4081",
                border: "2px solid #ff4081",
                padding: "14px 28px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#ff4081";
                e.currentTarget.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ff4081";
              }}
            >
              📩 Contact Me
            </a>
          </div>

          {/* Social */}
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.linkedin.com/in/sandesh-dhande-3ab180234/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "2rem",
                marginRight: 25,
                color: "#ccc",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ff4081")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sandeshdhande27"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "2rem",
                color: "#ccc",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ff7b00")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: "1 1 340px",
            textAlign: "center",
          }}
        >
          <img
            src="/sandesh_img.jpg"
            alt="Sandesh Dhande — Software Engineer"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid rgba(255, 123, 0, 0.6)",
              boxShadow: "0 0 35px rgba(255, 64, 129, 0.35)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 0 50px rgba(255, 123, 0, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 35px rgba(255, 64, 129, 0.35)";
            }}
          />
        </div>
      </section>

      {/* ✅ PROFESSIONAL SUMMARY */}
      <section style={{ padding: "80px 0" }}>
        <h2
          style={{
            color: "#ff4081",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Professional Summary
        </h2>
        <p
          style={{
            lineHeight: 1.8,
            color: "#ccc",
            fontSize: "1.05rem",
            textAlign: "justify",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          I am a <b>Software Engineer</b> with a strong focus on{" "}
          <b>
            industrial automation, full-stack development, and real-time system
            engineering
          </b>
          . My core expertise lies in designing{" "}
          <b>scalable industrial platforms</b> that connect hardware, sensors,
          and control systems to intelligent web applications for{" "}
          <b>data visualization, analytics, and process optimization</b>.
          <br />
          <br />
          Over the years, I have worked on projects involving{" "}
          <b>real-time machine monitoring</b>,{" "}
          <b>data logging and reporting systems</b>,{" "}
          <b>automated OEE tracking</b>, and{" "}
          <b>IoT-based industrial solutions</b>. I specialize in integrating{" "}
          <b>OPC-UA</b> and <b>Modbus</b> protocols for seamless data
          acquisition, leveraging technologies like{" "}
          <b>Node.js, Next.js, Python, SQL Server, Redis, and Docker</b> to
          build robust, production-grade systems.
          <br />
          <br />
          My development approach emphasizes <b>clean architecture</b>,
          <b>microservice-based design</b>, and <b>CI/CD automation</b> using
          <b>Jenkins</b> and <b>GitHub Actions</b>. I have hands-on experience
          in
          <b>server-side optimization</b>, <b>REST API development</b>, and
          <b>real-time dashboards</b> for industrial insights.
          <br />
          <br />
          With a background in <b>industrial electromechanical systems</b>, I
          bring a unique blend of <b>domain knowledge</b> and{" "}
          <b>software expertise</b>, enabling me to bridge the gap between
          hardware and software to deliver reliable, efficient, and intelligent
          automation solutions.
        </p>
      </section>

      {/* ✅ EXPERIENCE */}
      <section id="experience" style={{ padding: "80px 0" }}>
        <h2
          style={{
            color: "#ff4081",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Experience
        </h2>

        <h3
          style={{
            color: "#fff",
            fontSize: "1.3rem",
            fontWeight: 600,
            marginBottom: "5px",
          }}
        >
          Software Engineer — Orbittal Electromech Eng Projects Pvt. Ltd.
        </h3>
        <p style={{ color: "#aaa", marginBottom: "20px" }}>
          Jan 2024 – Present | Pune, India
        </p>

        <ul
          style={{
            color: "#ccc",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            maxWidth: "900px",
            margin: "0 auto",
            listStyleType: "disc",
            paddingLeft: "20px",
          }}
        >
          <li>
            Designed and developed{" "}
            <b>real-time industrial monitoring platforms</b> for machine status
            tracking, downtime analysis, and <b>OEE performance optimization</b>
            .
          </li>
          <li>
            Built modular web systems using <b>Next.js, Node.js, and Express</b>
            , integrating with backend APIs for{" "}
            <b>
              QC checklists, pack validation, and production data management
            </b>
            .
          </li>
          <li>
            Implemented seamless communication between edge devices and web
            servers via
            <b>OPC-UA</b> and <b>Modbus</b> protocols, ensuring high-frequency
            data acquisition and process automation.
          </li>
          <li>
            Created <b>microservice-based APIs</b> for data validation, machine
            interlock control, and vision inspection integration, improving
            reliability of production line systems.
          </li>
          <li>
            Engineered dynamic UI dashboards using <b>Material UI</b> and{" "}
            <b>TanStack Table</b> for interactive checklist editing, live status
            display, and operator feedback mechanisms.
          </li>
          <li>
            Automated build and deployment workflows with <b>Jenkins</b> and
            <b>Docker</b>, enabling <b>zero-downtime CI/CD</b> and environment
            consistency across testing and production servers.
          </li>
          <li>
            Improved data throughput by implementing <b>Redis caching</b> and{" "}
            <b>MSSQL query optimization</b>, reducing API latency and improving
            system performance in multi-line environments.
          </li>
          <li>
            Developed <b>cell scanning</b> and <b>pack start systems</b> with
            real-time validation, barcode scanning, and{" "}
            <b>SweetAlert2 feedback workflows</b> for enhanced operator UX.
          </li>
          <li>
            Collaborated with cross-functional teams to align{" "}
            <b>software logic with industrial automation requirements</b>,
            ensuring integration with PLCs, sensors, and MES-level systems.
          </li>
        </ul>
      </section>

      {/* ✅ PROJECTS */}
      <section id="projects" style={{ padding: "80px 0" }}>
        <h2
          style={{
            color: "#ff4081",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "30px",
          }}
        >
          Projects
        </h2>

        {[
          {
            title: "Braiding Monitoring System",
            desc: `Developed a robust, real-time industrial monitoring platform to track and analyze braiding machine operations, improving overall equipment efficiency and minimizing downtime.`,
            features: [
              "Web-Based Monitoring Dashboard: Displays live data for all machines in a centralized UI.",
              "Real-Time Metrics: Tracks machine run hours, spool targets, and current running spool lengths.",
              "Spool Target Management: Automatically resets spool length upon reaching target, reducing manual intervention.",
              "Line & Machine-Level Tracking: Provides performance analytics line-wise, machine-wise, and construction-wise.",
              "Automated Data Reset: Ensures data accuracy by resetting counters automatically.",
              "OEE Reporting: Generates daily, weekly, and monthly performance reports for production insights.",
            ],
            tech: "Node.js, SQL Server, Redis, Modbus, Next.js, Express.js",
          },
          {
            title: "Data Logger System",
            desc: `Engineered a real-time data acquisition and monitoring system tailored for industrial environments to collect, visualize, and analyze sensor data.`,
            features: [
              "Real-Time Sensor Integration: Captures continuous readings from temperature and pressure sensors.",
              "Data Logging: Stores sensor readings at defined intervals for historical trend analysis.",
              "Live Monitoring Dashboard: Provides instant visualization of sensor values with auto-refresh.",
              "Alert System: Sends automatic email notifications when parameters exceed defined thresholds.",
              "Automated Reporting: Exports logs in PDF and Excel formats for audits and review.",
            ],
            tech: "Python, OPC-UA, MSSQL, React, Pandas, FastAPI",
          },
          {
            title: "AUM (Audio Unique Measurement)",
            desc: `Designed an advanced audio recognition and comparison tool for industrial sound pattern validation and component quality assurance.`,
            features: [
              "Live Audio Capture: Records real-time sound input from connected microphones.",
              "Pattern Matching: Compares captured audio against reference audio samples.",
              "Uniqueness Validation: Provides instant results on match accuracy and deviations.",
              "Industrial Use Case: Ideal for sound-based component inspection and process validation.",
            ],
            tech: "Python, OpenCV, NumPy, Flask, React",
          },
          {
            title: "CAN – Compare & Analyze",
            desc: `Developed a smart data comparison and master verification tool to enhance data integrity across production systems.`,
            features: [
              "File Comparison Engine: Detects differences between master and live datasets.",
              "Master Verification: Validates real-time data consistency before system synchronization.",
              "Excel-Based Reporting: Generates easy-to-read Excel summaries for QC teams.",
              "Cross-Platform Support: Runs across different systems using Node.js backend and Python scripts.",
            ],
            tech: "Java, Python, Node.js, ExcelJS, SQL Server",
          },
          {
            title: "Online Grain Market Platform",
            desc: `Developed a full-stack digital marketplace for real-time grain trading and price monitoring, empowering farmers and traders with data transparency.`,
            features: [
              "Real-Time Market Data: Displays up-to-date grain prices by region.",
              "User-Friendly Interface: Simplifies viewing, comparing, and tracking commodity prices.",
              "Bidding System: Enables farmers and traders to place bids with live acceptance updates.",
              "Order Management: Tracks complete order lifecycle from bid to dispatch.",
              "Admin Dashboard: Provides control for managing listings, users, and analytics.",
              "Secure Login: Implements role-based authentication for traders, farmers, and admins.",
            ],
            tech: "Next.js, MySQL, Node.js, Tailwind CSS, Express.js",
          },
        ].map((proj) => (
          <div
            key={proj.title}
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: 25,
              marginBottom: 30,
              maxWidth: "950px",
              margin: "0 auto 30px auto",
            }}
          >
            <h3 style={{ color: "#ff7b00", marginBottom: "10px" }}>
              {proj.title}
            </h3>
            <p style={{ color: "#ccc", lineHeight: 1.7, marginBottom: "10px" }}>
              {proj.desc}
            </p>
            <ul
              style={{
                color: "#bbb",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                paddingLeft: "20px",
                marginBottom: "10px",
              }}
            >
              {proj.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
              <b>Tech Stack:</b> {proj.tech}
            </p>
          </div>
        ))}
      </section>

      {/* ✅ TECHNICAL SKILLS */}
      <section id="skills" style={{ padding: "80px 0" }}>
        <h2
          style={{
            color: "#ff4081",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "25px",
          }}
        >
          Technical Skills
        </h2>

        <ul style={{ color: "#ccc", lineHeight: 1.9, fontSize: "1rem" }}>
          <li>
            <b>Programming Languages:</b> Java, JavaScript (ES6+), TypeScript,
            Python, SQL, Bash
            <br />
            <span style={{ color: "#aaa" }}>
              Strong command over backend logic, API development, and real-time
              data processing.
            </span>
          </li>

          <li>
            <b>Frameworks & Libraries:</b> Next.js, Express.js, React, Node.js,
            FastAPI, Flask, Material UI
            <br />
            <span style={{ color: "#aaa" }}>
              Experienced in developing high-performance full-stack web
              applications with reusable components and modular architecture.
            </span>
          </li>

          <li>
            <b>Databases:</b> Microsoft SQL Server, MySQL, Redis, PostgreSQL,
            SQLite
            <br />
            <span style={{ color: "#aaa" }}>
              Skilled in writing optimized SQL queries, designing schemas, and
              managing caching & replication for high-volume data systems.
            </span>
          </li>

          <li>
            <b>DevOps & Tools:</b> Docker, Jenkins, GitHub CI/CD, PM2, Nginx,
            Postman, VS Code
            <br />
            <span style={{ color: "#aaa" }}>
              Hands-on experience with containerization, continuous integration,
              and automated deployment pipelines for microservices and
              industrial apps.
            </span>
          </li>

          <li>
            <b>Industrial & IoT Technologies:</b> OPC-UA, Modbus (TCP/RTU),
            MQTT, SCADA Systems, Industrial Data Logging
            <br />
            <span style={{ color: "#aaa" }}>
              Expertise in connecting industrial sensors, PLCs, and controllers
              to cloud & local systems for real-time analytics and control.
            </span>
          </li>

          <li>
            <b>Cloud & Hosting:</b> AWS EC2, Azure, DigitalOcean, Vercel, Render
            <br />
            <span style={{ color: "#aaa" }}>
              Experience deploying and maintaining full-stack apps in cloud
              environments with scalable architecture.
            </span>
          </li>

          <li>
            <b>System Design & Architecture:</b> Microservices, API Gateway,
            Event Streaming, Message Queues
            <br />
            <span style={{ color: "#aaa" }}>
              Designed robust data pipelines for real-time machine monitoring
              and reporting applications.
            </span>
          </li>

          <li>
            <b>Testing & Quality:</b> Jest, Mocha, Postman API Testing, Unit &
            E2E Testing
            <br />
            <span style={{ color: "#aaa" }}>
              Focused on ensuring reliable, maintainable, and well-tested
              backend services and UI flows.
            </span>
          </li>

          <li>
            <b>Other Core Competencies:</b> REST API Design, Real-time Data
            Processing, System Integration, Automation Workflows, Performance
            Tuning, Security Hardening, Reporting Automation
            <br />
            <span style={{ color: "#aaa" }}>
              Adept at bridging industrial automation with modern software
              systems to deliver smart, connected manufacturing solutions.
            </span>
          </li>
        </ul>
      </section>

      {/* ✅ EDUCATION */}
      <section id="education" style={{ padding: "80px 0" }}>
        <h2
          style={{
            color: "#ff4081",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "25px",
          }}
        >
          Education
        </h2>

        <div style={{ color: "#ccc", lineHeight: 1.9, fontSize: "1rem" }}>
          {/* 🎓 MCA */}
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#ff7b00", marginBottom: "5px" }}>
              🎓 Master in Computer Applications (MCA)
            </h3>
            <p style={{ margin: "5px 0", color: "#bbb" }}>
              Sinhgad Institute of Management, Pune (Savitribai Phule Pune
              University) — <b>2021 – 2023</b>
            </p>
            <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
                Graduated with <b>First Class with Distinction</b> — Top 5% in
                the batch.
              </li>
              <li>
                Specialized in <b>Software Engineering</b>,{" "}
                <b>Database Management</b>, and{" "}
                <b>Full-Stack Web Development</b>.
              </li>
              <li>
                Built advanced real-time and data-driven applications
                integrating industrial protocols and web technologies.
              </li>
              <li>
                <b>Major Project 1 – Online Grain Market Platform:</b>
                Designed and developed a full-stack web platform to enable
                farmers and traders to buy, sell, and monitor grain prices in
                real time. Key Highlights:
                <ul style={{ marginTop: "6px", paddingLeft: "25px" }}>
                  <li>Dynamic bidding system with live market data updates.</li>
                  <li>Admin dashboard for product management and analytics.</li>
                  <li>
                    Secure user authentication and order lifecycle tracking.
                  </li>
                  <li>
                    Built using <b>React, Java, MySQL, and Tailwind CSS</b>.
                  </li>
                </ul>
              </li>
              <li>
                <b>Major Project 2 – Online News24 Portal:</b>
                Developed a modern, multi-user content management and news
                publishing system. Key Highlights:
                <ul style={{ marginTop: "6px", paddingLeft: "25px" }}>
                  <li>
                    Role-based admin and editor dashboards for news publishing.
                  </li>
                  <li>Real-time updates and category-based filtering.</li>
                  <li>Integrated media upload and article management tools.</li>
                  <li>
                    Developed using <b>Python, HTML, CSS, and MySQL</b>.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* 🎓 BCA */}
          <div>
            <h3 style={{ color: "#ff7b00", marginBottom: "5px" }}>
              🎓 Bachelor of Computer Applications (BCA)
            </h3>
            <p style={{ margin: "5px 0", color: "#bbb" }}>
              K.R.T. Arts, B.H. Commerce and A.M. Science (KTHM) College, Nashik
              (Savitribai Phule Pune University) — <b>2018 – 2021</b>
            </p>
            <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
              <li>
                Graduated with <b>Distinction</b>, specializing in programming,
                database management, and computer networks.
              </li>
              <li>
                Final Year Project:{" "}
                <b>Real-time Industrial Control Dashboard</b> using Python and
                Modbus for industrial data acquisition and visualization.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 0",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#ff4081",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "25px",
          }}
        >
          Contact Information
        </h2>

        <p
          style={{
            color: "#ccc",
            lineHeight: 2,
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          I’m always open to discussing new projects, collaboration
          opportunities, or innovative ideas related to software development and
          automation systems. Feel free to reach out using the details below.
        </p>

        <div style={{ marginTop: "35px", lineHeight: 2, color: "#bbb" }}>
          <p>
            <FaUserTie style={{ color: "#ff7b00", marginRight: "8px" }} />
            <b>Name:</b> Sandesh Dhande
          </p>

          <p>
            <FaPhoneAlt style={{ color: "#ff7b00", marginRight: "8px" }} />
            <b>Phone:</b> +91&nbsp;8698712734
          </p>
          <p>
            <FaEnvelope style={{ color: "#ff7b00", marginRight: "8px" }} />
            <b>Email:</b> sandeshdhande007@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt style={{ color: "#ff7b00", marginRight: "8px" }} />
            <b>Location:</b> Pune, Maharashtra, India
          </p>
          <p>
            <FaLinkedin style={{ color: "#ff7b00", marginRight: "8px" }} />
            <b>LinkedIn:</b>{" "}
            <a
              href="https://www.linkedin.com/in/sandesh-dhande-3ab180234/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ff4081",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              View Profile
            </a>
          </p>
          <p>
            <FaGithub style={{ color: "#ff7b00", marginRight: "8px" }} />
            <b>GitHub:</b>{" "}
            <a
              href="https://github.com/sandeshdhande27"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ff4081",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Visit Repository
            </a>
          </p>
        </div>

        <p
          style={{
            marginTop: "40px",
            color: "#888",
            fontSize: "0.95rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "20px",
          }}
        >
          © {new Date().getFullYear()} Sandesh Dhande — All Rights Reserved.
        </p>
      </section>
    </div>
  );
}
