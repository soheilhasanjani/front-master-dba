"use client";

import React, { FC, useMemo } from "react";
import Breadcrumbs from "@/components/core/Breadcrumbs";
import { usePostArticleGetBreadCrumbListOnArticleId } from "@/hooks/apis/articleHookApi";
import { useRouter } from "next/navigation";

interface ArticleBreadcrumbsProps {
  id?: number;
}

const ArticleBreadcrumbs: FC<ArticleBreadcrumbsProps> = ({ id }) => {
  //
  const { push } = useRouter();
  //
  const { data: breadCrumbData } = usePostArticleGetBreadCrumbListOnArticleId(
    id
      ? {
          "BreadCrumbViewModel.id": id,
        }
      : null,
  );
  //
  const hierarchy = breadCrumbData?.map((item: any) => item.Id) ?? [];
  //
  const formattedBreadCrumbData = useMemo(
    () =>
      Array.isArray(breadCrumbData)
        ? breadCrumbData.map((item, index) => ({
            id: item.Id,
            label: item.Name,
            onClick: () => {
              push("/archive/" + hierarchy.slice(0, index + 1)?.join("/"));
            },
          }))
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [breadCrumbData],
  );
  //
  return (
    <Breadcrumbs
      onClickHome={() => {
        push("/");
      }}
      links={[
        {
          id: "0",
          label: "مقالات",
          onClick: () => push("/archive"),
        },
        ...formattedBreadCrumbData,
      ]}
    />
  );
};

export default ArticleBreadcrumbs;
