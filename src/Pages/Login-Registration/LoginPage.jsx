// LoginPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import instructor from "../../images/instructor-2.png";
import { FaGoogle } from "react-icons/fa6";
import "./Login-Registration.css";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [name, setName] = useState("");

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="login-container">
      <form className="form-group">
        <h2>Sign In</h2>
        <div className="rl-images">
          <img src={instructor} className="images-l" />
        </div>
        <div className="social-signup">
          <button className="google-btn">
            <i className="fab fa-google" /> <FaGoogle />
            Sign up with Google
          </button>
        </div>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="full-name"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={changeInputHandler}
          required
          className="Email"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={changeInputHandler}
          required
          className="password"
        />
        <button type="submit" className="btn primary lo">
          Login
        </button>
      </form>
      <small>
        You Don't have an account?
        <Link to="/register" className="landing-button">
          {" "}
          Register
        </Link>
      </small>
    </div>
  );
};

export default LoginPage;
