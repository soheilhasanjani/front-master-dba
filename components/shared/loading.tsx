import React from "react";
import { Loader } from "react-feather";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Loader className="animate-spin text-primary" />
    </div>
  );
};

export default Loading;
