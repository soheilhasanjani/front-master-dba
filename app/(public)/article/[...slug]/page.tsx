import React from "react";
import ArticlesNavigationSC from "@/app/(public)/article/[...slug]/articles-navigation-sc";
import ArticleContentSC from "@/app/(public)/article/[...slug]/article-content-sc";
import ArticleBreadcrumbs from "@/app/(public)/article/[...slug]/article-breadcrumbs";
import Container from "@/components/core/Container";
import Grid from "@/components/core/Grid";
import ArticleComment from "@/app/(public)/article/[...slug]/article-comment";
import { Metadata } from "next";
import axiosInstance from "@/configs/axios";

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const articleId = +params.slug?.[0];
  // fetch data
  const res = await axiosInstance({
    method: "POST",
    url: "/Article/GetArticleDetail",
    params: { "ArticleViewModel.id": String(articleId) },
  });
  //
  const article = res.data.Article;
  //
  return {
    description: article.Summery,
    keywords: article.KeyWords,
    authors: { name: article.AuthorName },
    openGraph: {
      title: article.Name,
      description: article.Summery,
    },
    twitter: {
      title: article.Name,
      description: article.Summery,
    },
    title: article.Name,
  };
}

const ArticlePage = ({ params: { slug } }: { params: { slug: string[] } }) => {
  //
  const articleId = +slug?.[0];
  //
  return (
    <Container className="min-h-[60svh]">
      <div className="pb-3 pt-4">
        <ArticleBreadcrumbs id={articleId} />
      </div>
      <Grid className="mb-4 gap-6">
        <div className="col-span-3">
          <div className="sticky top-4">
            <ArticlesNavigationSC articleId={articleId} />
          </div>
        </div>
        <div className="col-span-9">
          <Grid className="gap-8">
            <div className="col-span-12">
              <ArticleContentSC articleId={articleId} />
            </div>
            <div className="col-span-12">
              <ArticleComment articleId={articleId} />
            </div>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
};

export default ArticlePage;
