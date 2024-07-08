"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/Popover";
import ArticleInformation from "@/components/pages/article/ArticleInformation";
import KeyWordsList from "@/components/pages/article/KeyWordsList";
import MarkdownRenderer from "@/components/pages/article/MarkdownRenderer";
import React, { FC } from "react";

interface ArticleContentProps {
  data: any;
}

const ArticleContent: FC<ArticleContentProps> = ({ data }) => {
  const article = data?.Article;
  if (!article) return null;
  return (
    <div>
      <header>
        <h2 className="mb-4 text-2xl">{article.Name}</h2>
        <ArticleInformation
          authorId={article.AuthorId}
          authorName={article.AuthorName}
          timeToRead={article.TimeToRead}
          updateDate={article.UpdateDate}
          uploadDate={article.UploadDate}
          views={article.Views}
        />
        <hr />
      </header>
      <section className="mt-4">
        {article.Body ? <MarkdownRenderer content={article.Body} /> : null}
      </section>

      <footer>
        {article.Refrences && (
          <div className="col-12 pb-3">
            <Popover placement="left" typeInteract="click">
              <PopoverTrigger>
                <span className="pointer bold main-color">مشاهده منابع</span>
              </PopoverTrigger>
              <PopoverContent className="rounded-xl border bg-white p-3">
                <div className="flex flex-col gap-4">تست نمونه</div>
              </PopoverContent>
            </Popover>
          </div>
        )}

        <KeyWordsList keyWordsList={article.KeyWordsList} />
      </footer>
    </div>
  );
};

export default ArticleContent;
