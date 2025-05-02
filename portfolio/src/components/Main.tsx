import { ReactNode } from 'react';

type Props = {
    children: ReactNode | ReactNode[]; 
  };

const Main = ({children} : Props) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Main
