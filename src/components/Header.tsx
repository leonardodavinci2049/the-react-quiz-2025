import { JSX } from "react";


const Header = () : JSX.Element => {
  return (
    <header className="mb-16 flex w-[45rem] items-center justify-between ">
      <img className="w-40 mr-10" src="logo512.png" alt="React logo" />
      <h1 className="font-codystar text-6xl font-bold">The React Quiz</h1>
    </header>
  );
};

export default Header;
