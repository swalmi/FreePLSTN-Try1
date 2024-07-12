import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = document.querySelector(".hero").offsetHeight;
      setScrolled(scrollTop > heroHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <span className="logo">
        <BsFillCheckSquareFill className="logo-icon" />
        freePLSTN
      </span>
      <ul className="left-links">
        <li>
          <NavLink className='navlink' activeClassName="active" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' activeClassName="active" to="/create-exam">
            Create Exam
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' activeClassName="active" to="/upload-exam">
            Upload Exam
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' activeClassName="active" to="/grade-exams">
            Grade Exams
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' activeClassName="active" to="/view-results">
            View Results
          </NavLink>
        </li>
      </ul>
      <ul className="right-links">
        <li>
          <NavLink className='navlink' activeClassName="active" to="/profile">
            <FaUser className="icons" />
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' activeClassName="active" to="/settings">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink login' activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
