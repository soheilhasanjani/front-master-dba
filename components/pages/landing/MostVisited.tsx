"use client";

import React from "react";
import CustomTitleBox from "@/components/pages/landing/CustomTitleBox";
import { usePostArticleGetAllArticlesForMainPage } from "@/hooks/apis/articleHookApi";
import ArticleCard from "@/components/pages/landing/ArticleCard";

const MostVisited = () => {
  //
  const { data } = usePostArticleGetAllArticlesForMainPage();
  //
  const mostVisitedArticles = data?.MostVisitedArticles;
  //
  return (
    <div>
      <CustomTitleBox title="پر بازدیدترین ها" />
      <section className="grid grid-cols-12 gap-4 py-3">
        {mostVisitedArticles?.map((article: any) => (
          <div
            key={article.Id}
            className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <ArticleCard
              id={article.Id}
              name={article.Name}
              summery={article.Summery}
              authorName={article.AuthorName}
              uploadDateForOrderby={article.UploadDateforOrderby}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default MostVisited;
