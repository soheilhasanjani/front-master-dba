import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import LatestArticles from "@/components/pages/landing/LatestArticles";
import axios from "axios";
import axiosRetry from "axios-retry";

// Create an Axios instance with a timeout and retry logic
const axiosInstance = axios.create({
  timeout: 10000, // 10 seconds timeout
});

// Apply retry logic to the Axios instance
axiosRetry(axiosInstance, { retries: 3 });

async function getData() {
  try {
    const res = await axiosInstance.post(
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
