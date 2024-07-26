"use client";

import Breadcrumbs from "@/components/core/Breadcrumbs";
import Input from "@/components/core/Input";
import Pagination from "@/components/core/Pagination";
import Table from "@/components/core/Table";
import ConfirmDialog from "@/components/shared/confirm-dialog";
import {
  usePostArticleDeleteArticle,
  usePostArticleGetAllArticlesForDashboard,
  usePostArticleGetBreadCrumbListOnArticleId,
  usePostArticleToggleEnable,
} from "@/hooks/apis/articleHookApi";
import { cn } from "@/utils/cn";
import formatPersianDate from "@/utils/formatPersianDate";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  CheckSquare,
  Edit,
  FileText,
  Folder,
  Trash2,
  XSquare,
} from "react-feather";

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

interface ColumnsArgs {
  onClickTr?: (data: Article) => void;
  onClickAction?: (
    data: Article & { actionType: "trash" | "temporary-trash" | "toggle" },
  ) => void;
}

const columnHelper = createColumnHelper<Article>();

const columns = ({ onClickTr, onClickAction }: ColumnsArgs) => [
  columnHelper.accessor("Name", {
    header: "عنوان مقاله",
    cell: (info) => {
      const data = info.row.original;
      const articleTypeId = data.ArticleTypeId;
      return (
        <button
          className={cn("flex cursor-default items-center gap-2 pt-1", {
            "cursor-pointer": articleTypeId === 1,
          })}
          onClick={() => {
            if (onClickTr) onClickTr(data);
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
      //
      const data = info.row.original;
      //
      const articleGroupPathname =
        "/dashboard/articles/group-article/" +
        data.Id +
        (data.ParentId ? "/" + data.ParentId : "");
      //
      const articlePathname =
        "/dashboard/articles/article/" +
        data.Id +
        (data.ParentId ? "/" + data.ParentId : "");
      //
      return (
        <div className="flex items-center gap-3">
          {data.ArticleTypeId == 2 && !data.IsDraft ? (
            data.IsEnable ? (
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (onClickAction)
                    onClickAction({ actionType: "toggle", ...data });
                }}
              >
                <CheckSquare size={"20px"} color="green" />
              </div>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (onClickAction)
                    onClickAction({ actionType: "toggle", ...data });
                }}
              >
                <XSquare size={"20px"} color="red" />
              </div>
            )
          ) : null}
          <Link
            href={
              data.ArticleTypeId === 1 ? articleGroupPathname : articlePathname
            }
          >
            <Edit size={18} strokeWidth={1.5} className="mb-1" />
          </Link>
          <Trash2
            size={18}
            strokeWidth={1.5}
            className="mb-1 cursor-pointer"
            onClick={() => {
              if (onClickAction)
                onClickAction({ actionType: "trash", ...data });
            }}
          />
          {(data.Article_CloneId != null || data.IsDraft) &&
            data.ArticleTypeId === 2 && (
              <Trash2
                size={18}
                strokeWidth={1.5}
                className="mb-1 cursor-pointer text-[orangered]"
                onClick={() => {
                  if (onClickAction)
                    onClickAction({ actionType: "temporary-trash", ...data });
                }}
              />
            )}
        </div>
      );
    },
  }),
];

const PER_PAGE = 10;

const ArticlesPage = () => {
  //
  const [selectedFolder, setSelectedFolder] = useState(0);
  //
  const [targetDeleteArticle, setTargetDeleteArticle] = useState<{
    id: number;
    name: string;
  } | null>(null);
  //
  const toggleEnable = usePostArticleToggleEnable();
  const deleteArticle = usePostArticleDeleteArticle();
  const { data: breadCrumbData } = usePostArticleGetBreadCrumbListOnArticleId({
    "BreadCrumbViewModel.id": selectedFolder,
  });
  //
  const [forcePage, setForcePage] = useState(0);
  //
  const { data } = usePostArticleGetAllArticlesForDashboard({
    Id: selectedFolder,
    paginetedata: { perpage: PER_PAGE, currntpage: forcePage + 1, skip: 0 },
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
  const handleOnAcceptConfirmDialog = () => {
    deleteArticle.mutate(
      { "ArticleViewModel.Id": targetDeleteArticle?.id },
      {
        onSuccess: () => {
          setTargetDeleteArticle(null);
        },
      },
    );
  };
  //
  const handleToggleEnable = (articleId: number) => {
    toggleEnable.mutate({ "ArticleViewModel.Id": articleId });
  };
  //
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">مقالات</div>
        <Link
          href={
            "/dashboard/articles/group-article/add" +
            (selectedFolder !== 0 ? "/" + selectedFolder : "")
          }
        >
          <button className="h-10 whitespace-nowrap rounded border border-[#0f70b7] bg-[#0f70b7] px-3 text-xs font-normal text-white transition hover:bg-[#0f70b7]/90">
            افزودن گروه مقالات و مقاله
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
          columns={columns({
            onClickTr: (data) => {
              if (data.ArticleTypeId === 1) setSelectedFolder(data.Id);
            },
            onClickAction: (data) => {
              if (data.actionType === "trash") {
                setTargetDeleteArticle({
                  id: data.Id,
                  name: data.Name,
                });
              } else if (data.actionType === "temporary-trash") {
                setTargetDeleteArticle({
                  id: data.Article_CloneId,
                  name: data.Name,
                });
              } else if (data.actionType === "toggle") {
                handleToggleEnable(data.Id);
              }
            },
          })}
          isAnimationEnabled
        />
        {data?.TotalItems && (
          <Pagination
            forcePage={forcePage}
            pageCount={Math.ceil(data?.TotalItems / PER_PAGE)}
            onPageChange={({ selected }) => {
              setForcePage(selected);
            }}
          />
        )}
        <ConfirmDialog
          open={!!targetDeleteArticle}
          acceptButtonText="حذف"
          description={`آیا از حذف "${targetDeleteArticle?.name}" مطمئن هستید ؟`}
          onAccept={handleOnAcceptConfirmDialog}
          onReject={() => {
            setTargetDeleteArticle(null);
          }}
        />
      </div>
    </div>
  );
};

export default ArticlesPage;
