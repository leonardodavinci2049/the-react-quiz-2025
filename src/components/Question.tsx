import React from 'react';
import Options from './Options';
import { QuestionType } from '../types/typeQuestions';



interface QuestionProps {
  question: QuestionType; // Adjust the type as per your actual question object structure
  dispatch: React.Dispatch<{ type: string; payload: number }>;  // Replace 'any' with the appropriate type for your dispatch
  answer: number | null;// Replace 'any' with the correct type for answer
}

const Question= ({ question, dispatch, answer }: QuestionProps) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options 
          question={question} 
          dispatch={dispatch as React.Dispatch<{ type: string, payload:number }> } 
          answer={answer} 
          />
    </div>
  );
}

export default Question