import { ReactNode } from 'react';

type Props = {
    children: ReactNode | ReactNode[]; 
  };

const Footer = ({children} : Props) => {
  return (
    <footer>
      {children}
    </footer>
  )
}

export default Footer
