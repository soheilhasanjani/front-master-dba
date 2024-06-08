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
import { Edit, FileText, Folder, Trash2 } from "react-feather";

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
          className="flex cursor-pointer items-center gap-2 pt-1"
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
          <div className="max-w-md truncate">{info.getValue()}</div>
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
      return (
        <div className="flex items-center gap-3">
          <Link href={"/dashboard/articles/article/" + data.Id}>
            <Edit size={18} strokeWidth={1.5} className="mb-1" />
          </Link>
          <Trash2 size={18} strokeWidth={1.5} className="mb-1" />
          <Trash2
            size={18}
            strokeWidth={1.5}
            className="mb-1 text-[orangered]"
          />
        </div>
      );
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
      (a: any, b: any) => a.ArticleTypeId - b.ArticleTypeId,
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
    [breadCrumbData],
  );
  //
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">مقالات</div>
        <Link href="/dashboard/articles/article">
          <button className="h-10 whitespace-nowrap rounded border border-[#0f70b7] bg-[#0f70b7] px-3 text-xs font-normal text-white transition hover:bg-[#0f70b7]/90">
            افزودن مقاله
          </button>
        </Link>
      </div>
      <div className="mt-2 rounded-lg bg-[#f8f9fa] p-5 pt-1">
        <Breadcrumbs
          onClickHome={() => {
            setSelectedFolder(0);
          }}
          links={formattedBreadCrumbData}
        />
        <div className="mb-1 flex items-center gap-2">
          <Input placeholder="جستجو مقاله ..." />
        </div>
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
