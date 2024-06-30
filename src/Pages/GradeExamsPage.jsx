import React, { useState } from "react";
import { DUMMY_WrittenQuestions, DUMMY_BubbleQuestion } from "../data.js";

const GradeExamsPage = () => {
  const [writtenQuestions, setWrittenQuestions] = useState(
    DUMMY_WrittenQuestions
  );
  const [bubbleQuestions, setBubbleQuestions] = useState(DUMMY_BubbleQuestion);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedStudentID, setSelectedStudentID] = useState("");

  const uniqueStudentIDs = [
    ...new Set(DUMMY_WrittenQuestions.map((question) => question.StudentID)),
  ];

  const filterQuestions = (type) => {
    setActiveFilter(type);
    if (type === "all") {
      setWrittenQuestions(DUMMY_WrittenQuestions);
    } else if (type === "student") {
      setWrittenQuestions(
        DUMMY_WrittenQuestions.filter(
          (question) => question.StudentID === selectedStudentID
        )
      );
      setBubbleQuestions(
        DUMMY_BubbleQuestion.filter(
          (question) => question.StudentID === selectedStudentID
        )
      );
    } else {
      setWrittenQuestions(
        DUMMY_WrittenQuestions.filter((question) => question.QType === type)
      );
    }
  };

  return (
    <div className="grade-exams-container">
      <h2>Grade Exams</h2>
      <div className="uploaded-exams">{/* Render uploaded exams here */}</div>
      <div className="grading-tools">
        <h3>Written Questions</h3>
        <div className="filter-buttons">
          <button
            className={activeFilter === "all" ? "active" : ""}
            onClick={() => filterQuestions("all")}
          >
            All
          </button>
          <button
            className={activeFilter === 2 ? "active" : ""}
            onClick={() => filterQuestions(2)}
          >
            Q2
          </button>
          <button
            className={activeFilter === 3 ? "active" : ""}
            onClick={() => filterQuestions(3)}
          >
            Q3
          </button>
          <button
            className={activeFilter === 4 ? "active" : ""}
            onClick={() => filterQuestions(4)}
          >
            Q4
          </button>
          <select
            value={selectedStudentID}
            onChange={(e) => {
              setSelectedStudentID(parseInt(e.target.value));
              filterQuestions("student");
            }}
          >
            <option value="">Select Student ID</option>
            {uniqueStudentIDs.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
          <button
            className={activeFilter === "student" ? "active" : ""}
            onClick={() => filterQuestions("student")}
          >
            Filter by Student ID
          </button>
        </div>
        <div className="Questions__container">
          {writtenQuestions.map((question) => (
            <div className="form-group" key={question.id}>
              <p>Q {question.QType}</p>
              <img
                className="Grade"
                src={question.Question}
                alt={`Question ${question.id}`}
              />
              <input type="number" />
            </div>
          ))}
        </div>
      </div>
      <div className="bubble-sheet-results">
        <h3>Bubble Sheet Results</h3>
        <div className="Questions__container">
          {bubbleQuestions.map((question) => (
            <div key={question.id}>
              <img src={question.Question} alt={`Question ${question.id}`} className="Grade" />
              <p>
                Result = {question.resulte}/{question.finalResulte}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button type="submit">Save Grades</button>
    </div>
  );
};

export default GradeExamsPage;
