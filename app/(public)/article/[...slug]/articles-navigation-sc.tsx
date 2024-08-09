import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import ArticlesNavigation from "@/app/(public)/article/[...slug]/articles-navigation";
import axios from "axios";
import axiosRetry from "axios-retry";

// Create an Axios instance with a timeout and retry logic
const axiosInstance = axios.create({
  timeout: 50000, // 10 seconds timeout
});

// Apply retry logic to the Axios instance
axiosRetry(axiosInstance, { retries: 3 });

async function getData() {
  try {
    const res = await axiosInstance.post(HOST_ADDRESS + "/Article/GetAllArticleMenu");
    return res.data;
  } catch (error) {
    console.log(error)
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
