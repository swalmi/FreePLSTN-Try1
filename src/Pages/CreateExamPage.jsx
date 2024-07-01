import React, { useState } from "react";

const CreateExamPage = () => {
  const [questions, setQuestions] = useState([]);
  const [examTitle, setExamTitle] = useState("");
  const [mcqNumber, setMcqNumber] = useState(0);
  const [answerOptions, setAnswerOptions] = useState(3);
  const [linesNeeded, setLinesNeeded] = useState(0);

  const addQuestion = (type) => {
    if (type === "written") {
      const newQuestion = {
        type: "written",
        question: "",
        linesNeeded: linesNeeded,
      };
      setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
      setLinesNeeded(0);
    }
  };

  const WrittenQuestion = ({ question, index }) => {
    return (
      <div key={index}>
        <label>Question {index + 1}</label>
        <textarea rows={question.linesNeeded} />
      </div>
    );
  };

  return (
    <div className="create-exam-container">
      <h2>Create Exam</h2>
      <form>
        <div className="form-group">
          <h3>Exam Title</h3>
          <input
            type="text"
            name="Title"
            value={examTitle}
            onChange={(e) => setExamTitle(e.target.value)}
            required
            placeholder="Title"
          />
        </div>

        <div className="questions-section">
          <div className="form-group">
            <h3>Bubble Sheet Questions</h3>
            <h5>Exam MCQ Number</h5>
            <input
              type="number"
              name="MCQ Number"
              value={mcqNumber}
              onChange={(e) => setMcqNumber(e.target.value)}
              required
              placeholder="MCQ Number"
            />
          </div>
          <div className="form-group">
            <h5>Exam answer options</h5>
            <select
              value={answerOptions}
              onChange={(e) => setAnswerOptions(e.target.value)}
            >
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="form-group">
            <label>Answers</label>
            <input
              type="text"
              name="Answers"
              onChange={(e) => setExamTitle(e.target.value)}
              required
              placeholder="Answers"
            />
          </div>
        </div>
        <div className="questions-section">
          <div className="form-group">
            <h3>Written Questions</h3>
            <label>Question lines needed</label>
            <input
              type="number"
              name="linesNeeded"
              value={linesNeeded}
              onChange={(e) => setLinesNeeded(e.target.value)}
              required
              placeholder="linesNeeded"
            />
          </div>
          <button type="button" onClick={() => addQuestion("written")}>
            Add Written Question
          </button>
          {questions
            .filter((question) => question.type === "written")
            .map((question, index) => (
              <WrittenQuestion key={index} question={question} index={index} />
            ))}
        </div>
        <button type="submit">Generate PDF</button>
      </form>
    </div>
  );
};

export default CreateExamPage;
