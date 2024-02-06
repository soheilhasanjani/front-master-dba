import React from "react";

const CustomTitleBox = ({ title }: { title: string }) => {
  return (
    <div>
      <h4 className="text-2xl pb-2">{title}</h4>
      <div className="flex items-center pb-4">
        <div className="bg-primary h-1 rounded-full w-14" />
        <div className="w-8 border-b-4 border-dotted border-primary -ms-0.5"></div>
      </div>
    </div>
  );
};

export default CustomTitleBox;
