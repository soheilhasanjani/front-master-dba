"use client";

import React, { FC } from "react";
import ArticleCard from "@/components/pages/landing/ArticleCard";
import CustomTitleBox from "@/components/pages/landing/CustomTitleBox";

interface LatestArticlesProps {
  data: any;
}

const LatestArticles: FC<LatestArticlesProps> = ({ data }) => {
  //
  const latestArticles = data?.LatestArticles;
  //
  return (
    <div>
      <CustomTitleBox title="جدیدترین مقالات" />
      <section className="grid grid-cols-12 gap-4 py-3">
        {latestArticles?.map((article: any) => (
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

export default LatestArticles;
