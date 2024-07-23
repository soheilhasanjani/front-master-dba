import React, { Suspense } from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import ArticlesNavigation from "@/app/(public)/article/[...slug]/articles-navigation";

async function getData() {
  const res = await fetch(HOST_ADDRESS + "/Article/GetAllArticleMenu", {
    method: "POST",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ArticlesNavigationSC = async () => {
  //
  const data = await getData();
  //
  return (
    <Suspense fallback={<></>}>
      <ArticlesNavigation data={data} />
    </Suspense>
  );
};

export default ArticlesNavigationSC;
