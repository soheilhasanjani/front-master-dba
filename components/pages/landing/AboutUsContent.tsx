"use client";

import React from "react";
import { usePostPanelCustomValueGetAboutPageAboutUs } from "@/hooks/apis/panelCustomValueHookApi";
import MarkdownRenderer from "@/components/pages/article/MarkdownRenderer";

const AboutUsContent = () => {
  //
  const { data } = usePostPanelCustomValueGetAboutPageAboutUs();
  //
  return (
    <div className="container py-4">
      <div className="rounded bg-[#ededed] p-8">
        {data?.AboutUsTitle && <h5 className="pb-4">{data?.AboutUsTitle}</h5>}
        <div className="text-justify">
          {data?.AboutUsText ? (
            <MarkdownRenderer content={data?.AboutUsText} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
