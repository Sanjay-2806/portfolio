import React from "react";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // custom styles

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">MyPortfolio</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Home", "About", "Projects", "Certifications", "Profiles", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={600}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Element name="home" className="section vh-100 d-flex align-items-center hero-section">
        <div className="container text-center text-white">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="display-3 fw-bold"
          >
            Hi, I'm <span className="text-warning">Sanjay V</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="lead"
          >
            M.Tech CSE (Integrated) | Problem Solver | AI & Tech Enthusiast | Web Developer
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <a href="#projects" className="btn btn-warning btn-lg mt-3 shadow">
              View My Work 🚀
            </a>
          </motion.div>
        </div>
      </Element>

      {/* About Section */}
      <Element name="about" className="section py-5 bg-light text-dark">
        <div className="container">
          <motion.h2 
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="mb-4 fw-bold text-center"
          >
            About Me
          </motion.h2>
          <p className="text-center fs-5">
            I’m <strong>Sanjay V</strong>, an Integrated <strong>M.Tech CSE</strong> student.  
            Skilled in <strong>C, C++, Java, Python, JavaScript, React, Node.js</strong>.  
            Passionate about <strong>AI</strong>, problem-solving, and exploring new technologies.
          </p>
          <div className="d-flex flex-wrap justify-content-center mt-4">
            {["C", "C++", "Java", "Python", "JavaScript", "React", "Node.js", "AI", "Problem Solving"].map((skill, idx) => (
              <motion.span
                key={idx}
                className="badge bg-dark text-white m-2 p-3 fs-6 shadow"
                whileHover={{ scale: 1.2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="section py-5 bg-white">
        <div className="container">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center fw-bold mb-5"
          >
            Projects
          </motion.h2>
          <div className="row g-4">
            {[
              { title: "Restaurant Website", desc: "A responsive food ordering website.", link: "https://github.com/Sanjay-2806/restaurant1.0" },
              { title: "Air Cast (AI Project)", desc: "Gesture-based screen casting using AI.", link: "https://github.com/Sanjay-2806/Air-sketch-and-share-the-screen-using-socket" },
              { title: "Browser Gesture Control", desc: "AI project controlling browser with hand gestures.", link: "https://github.com/Sanjay-2806/browser-controller-using-hand-gesture" },
            ].map((proj, idx) => (
              <motion.div
                key={idx}
                className="col-md-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="card shadow h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{proj.title}</h5>
                    <p className="card-text text-muted">{proj.desc}</p>
                    <a href={proj.link} className="btn btn-outline-dark">
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Element>

      {/* Certifications Section */}
      <Element name="certifications" className="section py-5 bg-light">
        <div className="container text-center">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fw-bold mb-4"
          >
            Certifications
          </motion.h2>
          <ul className="list-unstyled fs-5">
            <li>✅ Problem Solving in C</li>
            <li>✅ Cloud Computing</li>
            <li>✅ Data Structures & Algorithms in C++</li>
            <li>✅ AI/ML Foundations</li>
            <li>✅ Web Development with React</li>
          </ul>
        </div>
      </Element>

      {/* Coding Profiles Section */}
      <Element name="profiles" className="section py-5 bg-white">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fw-bold mb-4"
          >
            Coding Profiles
          </motion.h2>
          <div className="d-flex flex-wrap justify-content-center">
            {[
              { name: "GitHub", link: "https://github.com/Sanjay-2806" },
              { name: "LeetCode", link: "https://leetcode.com/u/sanjuzzz28/" },
              { name: "Geeksforgeeks", link: "https://www.geeksforgeeks.org/user/sanjuzzz28/" },
            ].map((profile, idx) => (
              <motion.a
                key={idx}
                href={profile.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark m-2 px-4 py-2"
                whileHover={{ scale: 1.1 }}
              >
                {profile.name}
              </motion.a>
            ))}
          </div>
        </div>
      </Element>

      {/* Contact Section */}
      {/* Contact Section */}
<Element name="contact" className="section py-5 bg-dark text-white text-center">
  <div className="container">
    <motion.h2
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fw-bold mb-4"
    >
      Connect With Me
    </motion.h2>

    <p className="mb-4 fs-5 text-light">Let’s connect on my professional profiles 🚀</p>

    <div className="d-flex justify-content-center gap-4">
      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/sanjay-v-42a67a324/"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.2 }}
        className="btn btn-outline-light "
      >
       Linkedin <i className="bi bi-linkedin fs-3"></i>
      </motion.a>

      {/* GitHub */}
      <motion.a
        href="https://github.com/Sanjay-2806"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.2 }}
        className="btn btn-outline-light"
        
      >
       Github <i className="bi bi-github fs-3"></i>
      </motion.a>

    
     
    </div>
  </div>
</Element>

      {/* Footer */}
      <footer className="py-3 bg-secondary text-white text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Sanjay V | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;