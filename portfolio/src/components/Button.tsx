import { ReactNode } from 'react';

type Props = {
    children: ReactNode | ReactNode[]; 
  };

const Button = ({children} : Props) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button
