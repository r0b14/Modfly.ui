import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-5 lg:mx-32 flex-col items-center flex">
      <div className="flex flex-col items-center max-w-[1200px] w-full">
        {children}
      </div>
    </div>
  );
};
