import useQuiz from "../contexts/useQuiz";


interface Question {
  options: string[];
  correctOption: number;
}

const Options = ({ question }: { question: Question }) => {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === Number(answer) ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: String(index) })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options