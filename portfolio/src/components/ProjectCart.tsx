import { ReactNode } from 'react';

type Props = {
    children: ReactNode | ReactNode[]; 
  };

const ProjectCart = ({children} : Props) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ProjectCart
