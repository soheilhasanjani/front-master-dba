"use client";

import React, { FC } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/Popover";
import ArticleInformation from "@/components/pages/article/ArticleInformation";
import Link from "next/link";
import Keywords from "@/app/(public)/article/[...slug]/keywords";
import dynamic from "next/dynamic";

const MarkdownRenderer = dynamic(
  () => import("@/components/shared/markdown-renderer"),
  {
    ssr: false,
  },
);

interface ArticleContentProps {
  data: any;
}

const ArticleContent: FC<ArticleContentProps> = ({ data }) => {
  const article = data?.Article;
  if (!article) return null;
  return (
    <div>
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
      <section className="mt-4">
        {article.Body ? <MarkdownRenderer content={article.Body} /> : null}
      </section>
      <footer>
        {article.Refrences && (
          <Popover placement="bottom-start" typeInteract="click">
            <PopoverTrigger>
              <div className="mb-2 font-bold text-primary">مشاهده منابع</div>
            </PopoverTrigger>
            <PopoverContent className="rounded-xl border bg-white p-3">
              <div className="flex flex-col gap-4">
                {JSON.parse(article.Refrences).map((item: any) => {
                  return (
                    <Link
                      target="_blank"
                      href={item.Link}
                      key={item.Index}
                      className="hover:text-primary"
                    >
                      {item.Title}
                    </Link>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        )}
        <Keywords keyWordsList={article.KeyWordsList} />
      </footer>
    </div>
  );
};

export default ArticleContent;
