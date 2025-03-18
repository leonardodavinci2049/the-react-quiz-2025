import { JSX, ReactNode } from 'react';

type FooterProps = {
  children: ReactNode;
};

const Footer = ({ children }: FooterProps): JSX.Element => {
  return <footer>{children}</footer>;
};

export default Footer;
