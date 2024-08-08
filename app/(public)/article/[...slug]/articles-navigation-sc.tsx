import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import ArticlesNavigation from "@/app/(public)/article/[...slug]/articles-navigation";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.post(HOST_ADDRESS + "/Article/GetAllArticleMenu");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const ArticlesNavigationSC = async ({ articleId }: { articleId: number }) => {
  //
  const data = await getData();
  //
  return <ArticlesNavigation data={data} articleId={articleId} />;
};

export default ArticlesNavigationSC;
