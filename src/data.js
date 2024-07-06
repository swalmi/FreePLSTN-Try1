import Q2 from "./images/Q2.jpg";
import Q3 from "./images/Q3.jpg";
import Q4 from "./images/Q4.jpg";
import BubbleQ from "./images/Bubble.jpg";

export const Questions = [{
  src: BubbleQ,
    alt: 'Question 2',
    label: 'First slide label',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    fullMark: 10,
    Id: 1000
  },
  {
    src:  Q2,
    alt: 'Second slide',
    label: 'Second slide label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    fullMark: 15,
    Id: 1001},
  {
      src:  Q2,
      alt: 'Second slide',
      label: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fullMark: 15,
      Id: 1002},
  {
        src:  Q2,
        alt: 'Second slide',
        label: 'Second slide label',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        fullMark: 15,
        Id: 1003},
    {
          src:  Q2,
          alt: 'Second slide',
          label: 'Second slide label',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          fullMark: 15,
          Id: 1004},
    {
            src:  Q2,
            alt: 'Second slide',
            label: 'Second slide label',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            fullMark: 15,
            Id: 1005}
    

]



export const DUMMY_WrittenQuestions = [
  {
    id: 1,
    Question: Q2,
    StudentID: 101,
    QType: 2,
    fullMark: 10
  },
  {
    id: 2,
    Question: Q2,
    StudentID: 102,
    QType: 2,
  },
  {
    id: 3,
    Question: Q2,
    StudentID: 103,
    QType: 2,
  },
  {
    id: 4,
    Question: Q3,
    StudentID: 101,
    QType: 3,
  },
  {
    id: 5,
    Question: Q3,
    StudentID: 102,
    QType: 3,
  },
  {
    id: 6,
    Question: Q3,
    StudentID: 103,
    QType: 3,
  },
  {
    id: 7,
    Question: Q4,
    StudentID: 101,
    QType: 4,
  },
  {
    id: 8,
    Question: Q4,
    StudentID: 102,
    QType: 4,
  },
  {
    id: 9,
    Question: Q4,
    StudentID: 103,
    QType: 4,
  },
];

export const DUMMY_BubbleQuestion = [
  {
    id: 1,
    Question: BubbleQ,
    StudentID: 101,
    resulte: 15,
    finalResulte: 20,
  },
  {
    id: 2,
    Question: BubbleQ,
    StudentID: 102,
    resulte: 25,
    finalResulte: 20,
  },
  {
    id: 3,
    Question: BubbleQ,
    StudentID: 103,
    resulte: 35,
    finalResulte: 20,
  },
];
export const DUMMY_Resulte = [
  {
    id: 1,
    StudentID: 101,
    BubbleQresulte: 15,
    Q2resulte: 15,
    Q3resulte: 10,
    Q4resulte: 20,
    finalResulte: 80,
  },
  {
    id: 2,
    StudentID: 102,
    BubbleQresulte: 25,
    Q2resulte: 15,
    Q3resulte: 10,
    Q4resulte: 20,
    finalResulte: 90,
  },
  {
    id: 3,
    StudentID: 103,
    BubbleQresulte: 35,
    Q2resulte: 15,
    Q3resulte: 10,
    Q4resulte: 20,
    finalResulte: 85,
  },
  {
    id: 4,
    StudentID: 104,
    BubbleQresulte: 15,
    Q2resulte: 15,
    Q3resulte: 10,
    Q4resulte: 20,
    finalResulte: 80,
  },
  {
    id: 5,
    StudentID: 105,
    BubbleQresulte: 25,
    Q2resulte: 15,
    Q3resulte: 10,
    Q4resulte: 20,
    finalResulte: 90,
  },
  {
    id: 6,
    StudentID: 106,
    BubbleQresulte: 35,
    Q2resulte: 15,
    Q3resulte: 10,
    Q4resulte: 20,
    finalResulte: 85,
  },
  {
    id: 7,
    StudentID: 107,
    BubbleQresulte: 15,
    Q2resulte: 15,
    Q3resulte: 10,
    Q4resulte: 20,
    finalResulte: 80,
  },
  {
    id: 8,
    StudentID: 108,
    BubbleQresulte: 25,
    Q2resulte: 15,
    Q3resulte: 10,
    Q4resulte: 20,
    finalResulte: 90,
  },
  {
    id: 9,
    StudentID: 109,
    BubbleQresulte: 35,
    Q2resulte: 15,
    Q3resulte: 10,
    Q4resulte: 20,
    finalResulte: 85,
  },
];
export const DUMMY_Exams = [
  {
    id: 1,
    ExamsID: 101,
    Title: " Math-Exam",
    Discriptaion: " MoExammmmmmmmmmmmmmmmmmmmmm",
  },
  {
    id: 2,
    ExamsID: 102,
    Title: " Math-Exam1",
    Discriptaion: " MoExammmmmmmmmmmmmmmmmmmmmmmm",
  },
  {
    id: 3,
    ExamsID: 103,
    Title: " Math-Exam2",
    Discriptaion: " MoExammmmmmmmmmmmmmmmmmmmmmmmmm",
  },
];
