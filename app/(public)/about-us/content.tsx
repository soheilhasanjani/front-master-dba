"use client";

import React from "react";
import dynamic from "next/dynamic";
const RichTextDisplay = dynamic(
  () => import("@/components/shared/rich-text-display"),
  {
    ssr: false,
  },
);

interface ContentProps {
  data: any;
}

const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <div className="rounded bg-[#ededed] p-8">
      {data?.AboutUsTitle && <h5 className="pb-4">{data?.AboutUsTitle}</h5>}
      <div className="text-justify">
        {data?.AboutUsText ? (
          <RichTextDisplay content={data?.AboutUsText} />
        ) : null}
      </div>
    </div>
  );
};

export default Content;
