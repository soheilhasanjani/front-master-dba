"use client";

import React, { useState } from "react";
import RadioButton from "@/components/core/RadioButton";
import ArticleGroupSection, {
  ArticleGroupSectionSubmitValue,
} from "@/components/pages/dashboard/articles/add/ArticleGroupSection";
import ArticleSection, {
  ArticleSectionSubmitValue,
} from "@/components/pages/dashboard/articles/add/ArticleSection";
import { usePostArticleSave } from "@/hooks/apis/articleHookApi";

type SubmitValue = ArticleGroupSectionSubmitValue | ArticleSectionSubmitValue;

const AddArticlePage = () => {
  //
  const saveArticle = usePostArticleSave();
  //
  const [articleType, setArticleType] = useState(0);
  //
  const handleChangeArticleType = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setArticleType(+event.target.value);
  };
  //
  const handleOnSubmit = (value: SubmitValue) => {
    //
    const formData = new FormData();
    //
    if (value.articleType === 0) {
      //
      formData.append(
        "formdata",
        JSON.stringify({
          ArticleTypeId: value.articleType,
          Name: value.name,
          LatinName: value.latinName,
        })
      );
      //
      saveArticle.mutate(formData, {
        onSuccess: () => {},
      });
    } else if (value.articleType === 1) {
    }
  };
  //
  return (
    <div className="p-5">
      <div className="flex items-center gap-6 bg-[#f8f9fa] p-4 rounded mb-4">
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
      {articleType === 0 && <ArticleGroupSection onSubmit={handleOnSubmit} />}
      {articleType === 1 && <ArticleSection onSubmit={handleOnSubmit} />}
    </div>
  );
};

export default AddArticlePage;
