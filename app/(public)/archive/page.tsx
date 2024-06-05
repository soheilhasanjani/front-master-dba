"use client";

import { usePostArticleGetAllArticlesForArchiveWithPaginate } from "@/hooks/apis/articleHookApi";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import { ChevronLeft, FileText, Home, IconProps } from "react-feather";

const CustomBreadCrumb = () => {
  //
  const breadCrumbList: {
    id: number;
    label?: string;
    icon: React.ComponentType<IconProps>;
    ignoreMarginIcon?: boolean;
    ariaLabel?: string;
  }[] = [
    {
      id: 0,
      icon: Home,
      ignoreMarginIcon: true,
      ariaLabel: "Website homepage link",
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
          <Link
            href={"/"}
            className="flex items-center"
            aria-label={item.ariaLabel}
          >
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

const ArchivePage = () => {
  //
  const { data: articles } = usePostArticleGetAllArticlesForArchiveWithPaginate(
    {
      Id: null,
      paginetedata: {
        currntpage: 1,
        perpage: 12,
        skip: 0,
      },
    }
  );

  //
  return (
    <section className="container">
      <div className="grid grid-cols-12 gap-4 pt-4">
        <div className="col-span-12">
          <CustomBreadCrumb />
        </div>
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-4">
            {articles?.ItemList?.length &&
              articles?.ItemList.map((item, i: number) => (
                <Link
                  key={item.Id}
                  className="block col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
                  href={{
                    pathname: "/archive/" + item.Id,
                  }}
                >
                  <div className="shadow-[0_5px_10px_0_rgba(0,0,0,0.22)] rounded bg-[#0f70b7] flex flex-col items-center justify-center gap-4 p-8">
                    <h2 className="text-white text-lg font-medium">
                      {item.Name}
                    </h2>
                    <h2>{item.LatinName}</h2>
                    <span className="bg-[brown] rounded p-2 flex gap-2 items-center text-white">
                      {item.NumberOfChild} <FileText />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="col-span-12">
          <div
            className="row"
            style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
          >
            {/* {articles.ItemList?.length > 1 && (
                <Pagination
                  className="pagination-bar justify-content-center "
                  currentPage={currentPage}
                  totalCount={articles.TotalItems}
                  pageSize={perPage}
                  onPageChange={
                    handleChangePage 
                  }
                />
              )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchivePage;
