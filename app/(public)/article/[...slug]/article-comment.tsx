import React from "react";
import ArticleAddComment from "@/app/(public)/article/[...slug]/article-add-comment";
import ArticleCommentList from "@/app/(public)/article/[...slug]/article-comment-list";

interface ArticleCommentProps {
  articleId: number;
}

const ArticleComment: React.FC<ArticleCommentProps> = ({ articleId }) => {
  return (
    <div className="flex flex-col gap-8">
      <ArticleAddComment articleId={articleId} />
      <ArticleCommentList articleId={articleId} />
    </div>
  );
};

export default ArticleComment;
