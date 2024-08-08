import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import LatestArticles from "@/components/pages/landing/LatestArticles";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.post(
      HOST_ADDRESS + "/Article/GetAllArticlesForMainPage",
    );
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const LatestArticlesSC = async () => {
  //
  const data = await getData();
  //
  return <LatestArticles data={data} />;
};

export default LatestArticlesSC;
