import React, { FC } from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import dynamic from "next/dynamic";
import axios from "axios";
import axiosRetry from "axios-retry";

const ArticleContent = dynamic(
  () => import("@/app/(public)/article/[...slug]/article-content"),
  {
    ssr: false,
  },
);

interface ArticleContentSCProps {
  articleId: number;
}

// Create an Axios instance with a timeout and retry logic
const axiosInstance = axios.create({
  timeout: 50000, // 10 seconds timeout
});

// Apply retry logic to the Axios instance
axiosRetry(axiosInstance, { retries: 3 });

async function getData(articleId: number) {
  try {
    const res = await axiosInstance.post(
      HOST_ADDRESS +
        "/Article/GetArticleDetail?" +
        new URLSearchParams({
          "ArticleViewModel.id": String(articleId),
        }).toString(),
    );
    return res.data;
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch data");
  }
}

const ArticleContentSC: FC<ArticleContentSCProps> = async ({ articleId }) => {
  //
  const data = await getData(articleId);
  //
  return <ArticleContent data={data} />;
};

export default ArticleContentSC;
