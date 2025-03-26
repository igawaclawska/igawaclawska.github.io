import { ReactNode } from 'react';

type Props = {
    children: ReactNode | ReactNode[]; 
  };

const LandingPage = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default LandingPage
