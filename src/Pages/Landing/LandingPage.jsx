// src/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import list from "../../images/list.png";
import doctor from "../../images/doctor.webp";
import "./Landing.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <nav className="landing-nav">
          <div className="Landing-nav-logo">
            <img className="Landing-logo" src={list} />
            <h1 className="landing-title">FreePLSTN</h1>
          </div>

          <div className="landing-nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <Link to="/login" className="landing-nav-button">
              Login
            </Link>
            <Link to="/register" className="landing-nav-button">
              Register
            </Link>
          </div>
        </nav>
      </header>

      <section id="home" className="landing-home">
        <h2>Welcome to FreePLSTN</h2>
        <p>Efficiently create, upload, and grade exams with ease.</p>
        <img src={doctor} />

        <div className="landing-buttons">
          <Link to="/login" className="landing-button">
            Login
          </Link>
          <Link to="/register" className="landing-button">
            Register
          </Link>
        </div>
      </section>

      <section id="about" className="landing-about">
        <h2>About FreePLSTN</h2>
        <p>
          FreePLSTN is designed to streamline the process of creating,
          uploading, and grading exams. With our intuitive interface and
          powerful features, instructors can focus on teaching while we handle
          the grading.
        </p>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2024 FreePLSTN. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
