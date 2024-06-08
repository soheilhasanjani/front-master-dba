"use client";

import ArticleCard from "@/components/pages/landing/ArticleCard";
import { usePostArticleGetAllArticlesForArchiveWithPaginate } from "@/hooks/apis/articleHookApi";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { ChevronLeft, Home, IconProps } from "react-feather";

const CustomBreadCrumb = () => {
  //
  const breadCrumbList: {
    id: number;
    label?: string;
    icon: React.ComponentType<IconProps>;
    ignoreMarginIcon?: boolean;
  }[] = [
    {
      id: 0,
      icon: Home,
      ignoreMarginIcon: true,
    },
    {
      id: 1,
      label: "مقالات",
      icon: ChevronLeft,
    },
  ];
  //
  return (
    <ul className="flex items-center py-3">
      {breadCrumbList?.map((item) => (
        <li key={item.id} className="me-2">
          <Link href={"/"} className="flex items-center">
            <item.icon
              className={cn("mb-1", { "me-2": !item.ignoreMarginIcon })}
              size={18}
            />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const ArchiveByIdPage = () => {
  //
  const { id } = useParams();
  console.log(id);
  //
  const { data: articles } = usePostArticleGetAllArticlesForArchiveWithPaginate(
    {
      Id: id,
      paginetedata: {
        currntpage: 1,
        perpage: 100,
        skip: 0,
      },
    },
  );
  //
  return (
    <div className="container mb-8">
      <div className="grid grid-cols-12 gap-4 pt-4">
        <div className="col-span-12">
          <CustomBreadCrumb />
        </div>
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-4">
            {articles?.ItemList?.map((article: any) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveByIdPage;
