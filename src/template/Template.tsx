import React, { FC, ReactNode } from "react";

interface ITemplate {
  children: ReactNode;
}

const Template: FC<ITemplate> = ({ children }) => {
  return (
    <div className="template min-h-screen antialiased font-Vazirmatn bg-mainBg text-white">
      {children}
    </div>
  );
};

export default Template;
