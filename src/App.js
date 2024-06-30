import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage.jsx";
import RegistrationPage from "./Pages/RegistrationPage.jsx";
import Dashboard from "./Pages/Dashboard";
import CreateExamPage from "./Pages/CreateExamPage.jsx";
import UploadExamPage from "./Pages/UploadExamPage.jsx";
import GradeExamsPage from "./Pages/GradeExamsPage.jsx";
import ViewResultsPage from "./Pages/ViewResultsPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import SettingsPage from "./Pages/SettingsPage.jsx";
import Navbar from "./Pages/Navbar.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/LandingPage" && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-exam" element={<CreateExamPage />} />
        <Route path="/upload-exam" element={<UploadExamPage />} />
        <Route path="/grade-exams" element={<GradeExamsPage />} />
        <Route path="/view-results" element={<ViewResultsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/" exact element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
