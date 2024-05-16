"use client";

import Input from "@/components/core/Input";
import Table from "@/components/core/Table";
import { usePostArticleGetAllArticlesForDashboard } from "@/hooks/apis/articleHookApi";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import React from "react";

type article = {
  Name: string;
  AuthorName: string;
  UploadDate: string;
  ArticleTypeId: number;
  IsDraft: boolean;
  IsEnable: boolean;
  ParentId: number;
  Id: number;
  Article_CloneId: number;
  HasChild: boolean;
};

const columnHelper = createColumnHelper<article>();

const columns = [
  columnHelper.accessor("Name", {
    header: "عنوان مقاله",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("AuthorName", {
    header: "نام نویسنده",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("UploadDate", {
    header: "تاریخ ویرایش دوره",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    header: "عملیات",
    cell: (info) => {
      const data = info.row.original;
      return <div className="flex items-center gap-4"></div>;
    },
  }),
];

const ArticlesPage = () => {
  //
  const { data } = usePostArticleGetAllArticlesForDashboard({
    Id: 0,
    paginetedata: { perpage: 10, currntpage: 1, skip: 0 },
  });
  //
  return (
    <div className="p-5">
      <div className="font-semibold text-lg">مقالات</div>
      <div className="bg-[#f8f9fa] p-5 mt-5 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Input placeholder="جستجو مقاله ..." />
          <Link href="/dashboard/articles/add">
            <button className="text-white border border-[#0f70b7] bg-[#0f70b7] whitespace-nowrap hover:bg-[#0f70b7]/90 transition rounded text-sm font-medium px-3 h-10">
              افزودن مقاله
            </button>
          </Link>
        </div>
        <Table data={data?.ItemList ?? []} columns={columns} />
      </div>
    </div>
  );
};

export default ArticlesPage;
