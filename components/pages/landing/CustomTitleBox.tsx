import React from "react";

const CustomTitleBox = ({ title }: { title: string }) => {
  return (
    <div>
      <h4 className="pb-2 text-2xl">{title}</h4>
      <div className="flex items-center pb-4">
        <div className="h-1 w-14 rounded-full bg-primary" />
        <div className="-ms-0.5 w-8 border-b-4 border-dotted border-primary"></div>
      </div>
    </div>
  );
};

export default CustomTitleBox;
