
type StartScreenProps = {
  numQuestions: number;
  dispatch: React.Dispatch<{ type: string }>;
};

const StartScreen= ({ numQuestions, dispatch }:StartScreenProps) => {

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl mb-8 font-bold">Welcome to The React Quiz!</h2>
      <h3 className="text-2xl font-semibold mb-16">{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
