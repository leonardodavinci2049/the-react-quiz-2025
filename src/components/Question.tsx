import React from 'react';
import Options from './Options';

interface QuestionProps {
  question: {
    question: string;
    // Add other properties of the question object here
  };
  dispatch: React.Dispatch<any>;
  answer: any;
}

const Question: React.FC<QuestionProps> = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question