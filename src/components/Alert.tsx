import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Alert({ children }: Props) {
  return (
    <div className="alert alert-success" role="alert">
      {children}
    </div>
  );
}

export default Alert;
