import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAddToPhotos } from "react-icons/md";
import { DUMMY_Exams } from "../../data.js";
import "./Dashboard.css";

const Dashboard = () => {
  const [Exams, setExams] = useState(DUMMY_Exams);

  return (
    <>
      <div className="container">
        <div>
          <Link to="/create-exam">
            <button className="addButton">+</button>
          </Link>
        </div>

        {Exams.length > 0 ? (
          <div className="dashboard-container">
            {Exams.map((Exam) => (
              <div className="Exam-container">
                <Link to="/view-results">
                  <h2>{Exam.Title}</h2>
                  <p>{Exam.Discriptaion}</p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="Exam-container">
            <p>No courses Founded</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
