// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUpload, FaFileSignature } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { LuFileBarChart2 } from "react-icons/lu";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <NavLink activeclassName="active" to="/dashboard">
          <FaHome className="icons" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink activeclassName="active" to="/create-exam">
          <FaFileSignature className="icons" />
          Create Exam
        </NavLink>
      </li>
      <li>
        <NavLink activeclassName="active" to="/upload-exam">
          <FaUpload className="icons" />
          Upload Exam
        </NavLink>
      </li>
      <li>
        <NavLink activeclassName="active" to="/grade-exams">
          <GiNotebook className="icons" />
          Grade Exams
        </NavLink>
      </li>
      <li>
        <NavLink activeclassName="active" to="/view-results">
          <LuFileBarChart2 className="icons" />
          View Results
        </NavLink>
      </li>
      <li>
        <NavLink activeclassName="active" to="/profile">
          <BsPersonCircle className="icons" />
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink activeclassName="active" to="/settings">
          <IoSettings className="icons" />
          Settings
        </NavLink>
      </li>
      <li>
        <NavLink activeclassName="active" to="/login">
          <IoLogOut className="icons" />
          Logout
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
