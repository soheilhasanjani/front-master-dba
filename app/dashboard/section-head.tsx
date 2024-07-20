import React from "react";

interface SectionHeadProps {
  title: string;
  icon: React.ReactNode;
}

const SectionHead: React.FC<SectionHeadProps> = ({ title, icon }) => {
  return (
    <div className="mb-3 flex items-center gap-2 border-b pb-3">
      {icon}
      <h6>{title}</h6>
    </div>
  );
};

export default SectionHead;
