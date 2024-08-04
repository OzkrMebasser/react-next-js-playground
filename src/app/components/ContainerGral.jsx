import React from "react";

const ContainerGral = ({ children }) => {
  return (
    <div className="absolute px-4 lg:px-20  top-0 mx-auto w-full text-center">
      {children}
    </div>
  );
};

export default ContainerGral;
