"use client";

import Breadcrumbs from "@/components/core/Breadcrumbs";
import Input from "@/components/core/Input";
import Table from "@/components/core/Table";
import {
  usePostArticleGetAllArticlesForDashboard,
  usePostArticleGetBreadCrumbListOnArticleId,
} from "@/hooks/apis/articleHookApi";
import formatPersianDate from "@/utils/formatPersianDate";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { FileText, Folder } from "react-feather";

type Article = {
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
  UploadDateforOrderby: string;
};

const columnHelper = createColumnHelper<Article>();

const columns = (onClickTr: (id: number) => void) => [
  columnHelper.accessor("Name", {
    header: "عنوان مقاله",
    cell: (info) => {
      const articleTypeId = info.row.original.ArticleTypeId;
      const Id = info.row.original.Id;
      return (
        <button
          className="flex items-center gap-2 pt-1 cursor-pointer"
          onClick={() => {
            if (onClickTr) onClickTr(Id);
          }}
        >
          {articleTypeId === 1 && (
            <Folder size={20} strokeWidth={1} className="mb-1 text-amber-500" />
          )}
          {articleTypeId === 2 && (
            <FileText
              size={20}
              strokeWidth={1}
              className="mb-1 text-[#0f70b7]"
            />
          )}
          {info.getValue()}
        </button>
      );
    },
  }),
  columnHelper.accessor("AuthorName", {
    header: "نام نویسنده",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("UploadDateforOrderby", {
    header: "تاریخ ویرایش دوره",
    cell: (info) => formatPersianDate(new Date(info.getValue())),
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
  const [selectedFolder, setSelectedFolder] = useState(0);
  //
  const { data: breadCrumbData } = usePostArticleGetBreadCrumbListOnArticleId({
    "BreadCrumbViewModel.id": selectedFolder,
  });
  const { data } = usePostArticleGetAllArticlesForDashboard({
    Id: selectedFolder,
    paginetedata: { perpage: 10, currntpage: 1, skip: 0 },
  });
  //
  const sortedList = useMemo(() => {
    if (!Array.isArray(data?.ItemList)) return [];
    return data?.ItemList.sort(
      (a: any, b: any) => a.ArticleTypeId - b.ArticleTypeId
    );
  }, [data?.ItemList]);
  //
  const formattedBreadCrumbData = useMemo(
    () =>
      Array.isArray(breadCrumbData)
        ? breadCrumbData.map((item) => ({
            id: item.Id,
            label: item.Name,
            onClick: (id: string) => {
              setSelectedFolder(+id);
            },
          }))
        : [],
    [breadCrumbData]
  );
  //
  return (
    <div className="p-5">
      <div className="font-semibold text-sm">مقالات</div>
      <div className="bg-[#f8f9fa] p-5 mt-5 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Input placeholder="جستجو مقاله ..." />
          <Link href="/dashboard/articles/add">
            <button className="text-white border border-[#0f70b7] bg-[#0f70b7] whitespace-nowrap hover:bg-[#0f70b7]/90 transition rounded text-xs font-normal px-3 h-10">
              افزودن مقاله
            </button>
          </Link>
        </div>
        <Breadcrumbs
          onClickHome={() => {
            setSelectedFolder(0);
          }}
          links={formattedBreadCrumbData}
        />
        <Table
          data={sortedList}
          columns={columns((id) => {
            setSelectedFolder(id);
          })}
          isAnimationEnabled
        />
      </div>
    </div>
  );
};

export default ArticlesPage;
