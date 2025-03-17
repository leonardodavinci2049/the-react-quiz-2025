type ProgressProps = {
  index: number;
  numQuestions: number;
  points: number;
  maxPossiblePoints: number;
  answer: boolean | null;
};

const Progress = ({ index, numQuestions, points, maxPossiblePoints, answer }: ProgressProps) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
