

import { Dispatch } from 'react';

interface NextButtonProps {
  dispatch: Dispatch<{ type: string }>;
  answer: number | null;
  index: number;
  numQuestions: number;
}

const NextButton = ({ dispatch, answer, index, numQuestions }: NextButtonProps) => {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton