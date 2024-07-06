import Carousel from 'react-bootstrap/Carousel';
import { useState, useRef, useEffect } from 'react';
import { GrInProgress } from "react-icons/gr";
import { MdSend } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";

import "./GradExams.css";

import {Questions} from "../../data.js";

function DarkVariantExample({ images }) {
  const [grades, setGrades] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValues, setInputValues] = useState({});
  const [inputDisabled, setInputDisabled] = useState({});
  const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);
  const [counter, setCounter] = useState(Questions.length);
  const [progress, setProgress] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [currentIndex]);

  const handleGradeChange = (index, grade) => {
    if (grade === undefined || grade === '') {
      alert('Please enter a valid grade');
      return;
    }
    const question = Questions[index];
    if (grade >= 0 && grade <= question.fullMark) {
      const existingGradeIndex = grades.findIndex((gradeObj) => gradeObj.index === index);
      if (existingGradeIndex !== -1) {
        grades[existingGradeIndex].grade = grade;
        setGrades([...grades]);
      } else {
        setGrades((prevGrades) => [...prevGrades, { index, grade }]);
        setCounter((prevCounter) => prevCounter - 1);
        setProgress((prevProgress) => prevProgress + (100 / Questions.length));
      }
      setInputDisabled((prevInputDisabled) => ({ ...prevInputDisabled, [index]: true }));
      setUpdateButtonDisabled(false);
      if (counter === 1) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Questions.length); // Loop back to the start
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Questions.length); // Loop back to the start
      }
    } else if (grade < 0) {
      alert('Grade cannot be negative');
    } else if (grade > question.fullMark) {
      alert(`Grade cannot exceed ${question.fullMark}`);
    } else {
      alert('Please enter a valid grade');
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      handleGradeChange(index, event.target.value);
    }
  };

  const handleInputChange = (event, index) => {
    setInputValues((prevInputValues) => ({ ...prevInputValues, [index]: event.target.value }));
  };

  const handleUpdateClick = (index) => {
    setInputDisabled((prevInputDisabled) => ({ ...prevInputDisabled, [index]: false }));
    setUpdateButtonDisabled(true);
  };

  return (
    <>
      <div className='container'>
        <div style={{ width: '100%' }}>
          <div className='remaining-counter' >
            <span className='remaining-label' style={{ border: 'solid rgba(133, 178, 251, 0.185) 3px', borderRadius: '5px', padding: '10px', color: '#0b70b3', backgroundColor: 'rgba(133, 178, 251, 0.385)' }}>
              <GrInProgress
                style={{ marginRight: '5px', color: 'yellow', fontSize: '36px' }}
              />
              <span style={{ marginRight: '10px' }}> Ungraded Questions </span>{counter}
            </span>
          </div>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{ width: `${progress}%` }}>
            <span className='progress-text'>{Math.round(progress)}%</span>
          </div>
        </div>
        <Carousel
          data-bs-theme="dark"
          interval={9999999999}
          className="carouselMain"
          touch='true'

          activeIndex={currentIndex}
          onSelect={(index) => {
            setCurrentIndex(index);
          }}
        >
          {Questions.map((Question, index) => (
            <Carousel.Item key={index} className="Carousel-Item">
              {grades.find((gradeObj) => gradeObj.index === index) && (
                <div
                  className="graded-label"
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    padding: '5px',
                    borderRadius: '5px',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: grades.find((gradeObj) => gradeObj.index === index).grade >= (Question.fullMark * 0.75) ? '#34C759' : grades.find((gradeObj) => gradeObj.index === index).grade >= (Question.fullMark * 0.5) ? '#FFC107' : 'red'
                  }}
                >
                  <FaBookmark /> Marked as {grades.find((gradeObj) => gradeObj.index === index).grade}
                </div>
              )}
              <img
                className="d-block w-100 sliderImage"
                src={Question.src}
                alt={Question.alt}
                style={{ border: 'solid,  gray, 3px' }}
              />
              <Carousel.Caption className='questionInputGrade'>
                <div className='input-section'>
                  <input autoFocus
                    type="number"
                    placeholder='Enter Grade'
                    className="input-field"
                    required
                    value={inputValues[index]}
                    onChange={(event) => handleInputChange(event, index)}
                    onKeyPress={(event) => handleKeyPress(event, index)}
                    disabled={inputDisabled[index]}
                    max={Question.fullMark}
                    ref={inputRef}
                  />
                  <button
                    className="send-button"
                    onClick={() => handleGradeChange(index, inputValues[index])}
                    disabled={inputDisabled[index]}
                  >
                    <MdSend className='inputArrow' />
                  </button>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '-20px' }}>
                  <div style={{ padding: '10px', flex: 1 }}>
                    <span style={{ color: '#ffd700', marginRight: '5px', fontSize: '18px', fontWeight: 'bold' }}><IoPersonSharp /></span>
                    <span style={{ color: '#0b70b3', fontSize: '18px', marginRight: '20px' }}>Student ID</span>
                    <span style={{ color: 'rgba(0, 0, 0, 0.51)', fontSize: '18px' }}>{Question.Id}</span>
                  </div>
                  <div style={{ padding: '10px', flex: 1 }}>
                    <span style={{ color: '#ffd700', marginRight: '5px', fontSize: '18px', fontWeight: 'bold' }}><BiSolidMedal /></span>
                    <span style={{ color: '#0b70b3', fontSize: '18px', marginRight: '20px' }}>Full Mark</span>
                    <span style={{ color: 'rgba(0, 0, 0, 0.51)', fontSize: '18px' }}>{Question.fullMark}</span>
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateClick(index)}
                  disabled={updateButtonDisabled}
                >
                  Update
                </button>

              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

      </div>

    </>
  );
}

export default DarkVariantExample;
