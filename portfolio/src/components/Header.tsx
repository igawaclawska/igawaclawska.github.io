import { ReactNode } from 'react';

type Props = {
    children: ReactNode | ReactNode[]; 
  };

const Header = ({children} : Props) => {
  return (
    <header>
      {children}
    </header>
  )
}

export default Header
