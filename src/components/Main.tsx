type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <main className="w-[600px]">{children}</main>;
};

export default Main;
