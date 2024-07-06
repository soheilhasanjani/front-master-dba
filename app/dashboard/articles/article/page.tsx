"use client";

import React, { useState } from "react";
import RadioButton from "@/components/core/RadioButton";
import ArticleGroupSection from "@/components/pages/dashboard/articles/add/ArticleGroupSection";
import ArticleSection from "@/components/pages/dashboard/articles/add/ArticleSection";

const AddArticlePage = () => {
  //
  const [articleType, setArticleType] = useState(0);
  //
  const handleChangeArticleType = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setArticleType(+event.target.value);
  };
  //
  return (
    <div className="p-5">
      <div className="mb-4 flex items-center gap-6 rounded bg-[#f8f9fa] p-4">
        <RadioButton
          name="exampleOption"
          value={0}
          checked={articleType === 0}
          label="گروه مقالات"
          onChange={handleChangeArticleType}
        />
        <RadioButton
          name="exampleOption"
          value={1}
          checked={articleType === 1}
          label="مقاله"
          onChange={handleChangeArticleType}
        />
      </div>
      {articleType === 0 && <ArticleGroupSection />}
      {articleType === 1 && <ArticleSection />}
    </div>
  );
};

export default AddArticlePage;
