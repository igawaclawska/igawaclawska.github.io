import { ReactNode } from 'react';

type Props = {
    children: ReactNode | ReactNode[]; 
  };

const Navbar = ({children} : Props) => {
  return <nav>{children}</nav>;
};

export default Navbar;
