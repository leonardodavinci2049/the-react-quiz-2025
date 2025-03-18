type ProgressProps = {
  index: number;
  numQuestions: number;
  points: number;
  maxPossiblePoints: number;
  answer: number | null;
};

const Progress = ({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}: ProgressProps) => {
  return (
    <header className="mb-8 grid grid-cols-2 justify-between gap-5 text-lg text-gray-500">
      <div className="col-span-2 h-3 w-full rounded-full bg-gray-300">
        <div
          className="h-full rounded-full bg-emerald-600"
          style={{
            width: `${((index + Number(answer !== null)) / numQuestions) * 100}%`,
          }}
        ></div>
      </div>

      <p>
        Questão <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p className="justify-self-end">
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
