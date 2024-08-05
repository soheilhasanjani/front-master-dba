import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import LatestArticles from "@/components/pages/landing/LatestArticles";

async function getData() {
  const res = await fetch(HOST_ADDRESS + "/Article/GetAllArticlesForMainPage", {
    method: "POST",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const LatestArticlesSC = async () => {
  //
  const data = await getData();
  //
  return <LatestArticles data={data} />;
};

export default LatestArticlesSC;
