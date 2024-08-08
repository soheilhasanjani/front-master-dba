import React, { FC } from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import dynamic from "next/dynamic";
import axios from "axios";

const ArticleContent = dynamic(
  () => import("@/app/(public)/article/[...slug]/article-content"),
  {
    ssr: false,
  },
);

interface ArticleContentSCProps {
  articleId: number;
}

async function getData(articleId: number) {
  try {
    const res = await axios.post(
      HOST_ADDRESS +
        "/Article/GetArticleDetail?" +
        new URLSearchParams({
          "ArticleViewModel.id": String(articleId),
        }).toString(),
    );
    return res.data;
  } catch (error) {
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
