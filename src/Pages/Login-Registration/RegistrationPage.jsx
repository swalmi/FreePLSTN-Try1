import React from "react";
import { Link } from "react-router-dom";
import student from "../../images/student.png";
import { FaGoogle } from "react-icons/fa6";
import "./Login-Registration.css";

const RegistrationPage = () => (
  <div className="register-container">
    <form className="form-group">
      <h2>Register</h2>

      <div className="rl-images">
        <img src={student} className="images" />
      </div>
      <div className="social-signup">
        <button className="google-btn">
          <i className="fab fa-google" /> <FaGoogle />
          Sign up with Google
        </button>
      </div>
      <div>
        <input type="text" name="name" required placeholder="Full Name" />
      </div>
      <div>
        <input type="email" name="email" required placeholder="email" />
      </div>
      <div>
        <input
          type="password"
          name="password"
          required
          placeholder="password"
        />
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="confirmPassword"
        />
      </div>
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account?{" "}
      <Link to="/login" className="landing-button">
        Login
      </Link>
    </p>
  </div>
);

export default RegistrationPage;
