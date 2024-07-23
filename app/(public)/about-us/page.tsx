import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import MarkdownRenderer from "@/components/shared/markdown-renderer";

async function getData() {
  const res = await fetch(
    HOST_ADDRESS + "/PanelCustomValue/GetAboutPageAboutUs",
    {
      method: "POST",
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const AboutUsPage = async () => {
  //
  const data = await getData();
  //
  return (
    <div className="px-3 py-4 xxl:container">
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

export default AboutUsPage;
