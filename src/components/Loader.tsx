import { JSX } from "react";

const Loader = () : JSX.Element => {
  return (
    <div className="flex flex-col items-center mt-16 gap-6 text-[--color-medium] text-sm">
      <div className="loader w-[50px] h-6"></div>
      <p>Loading questions...</p>
    </div>
  );
};

export default Loader;
