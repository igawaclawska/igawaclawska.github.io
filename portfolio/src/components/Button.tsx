import { ReactNode, MouseEventHandler } from 'react';

type Props = {
    children: ReactNode | ReactNode[]; 
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };

const Button = ({children, onClick} : Props) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
