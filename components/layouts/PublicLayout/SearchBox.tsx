"use client";

import React, { useState } from "react";
import { usePostArticleGetArticleUsingSearch } from "@/hooks/apis/articleHookApi";
import useDebouncedState from "@/hooks/useDebouncedState";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FileText, Search, UserCheck } from "react-feather";

const SearchBox = () => {
  //
  const [isFocus, setIsFocus] = useState(false);
  const [inputText, debouncedInputText, setInputText] = useDebouncedState("");
  //
  const { data, isLoading } = usePostArticleGetArticleUsingSearch(
    inputText
      ? { "ArticleSearchViewModel.serachValue": debouncedInputText }
      : null
  );
  //
  return (
    <div className="search-form relative">
      <div className="">
        <span className="absolute start-0 top-0 size-11 grid place-items-center">
          <Search className="text-primary" />
        </span>
        <input
          className="ps-11 border border-[#e9e7e7] w-full rounded h-11"
          type="text"
          placeholder="جست و جو ..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </div>
      <div
        className={cn(
          "absolute overflow-y-auto z-10 bottom-0 translate-y-[calc(100%+5px)] w-full bg-[#f4f4f4] shadow-[0_5px_10px_0_rgba(0,0,0,0.22)] rounded border border-[gainsboro] max-h-[350px]",
          { "opacity-0 pointer-events-none": !(isFocus && inputText) }
        )}
      >
        <ul className="p-2">{ListContent({ isLoading, data })}</ul>
      </div>
    </div>
  );
};

const ListContent = ({ isLoading, data }: any) => {
  if (isLoading) {
    return <div className="text-center">در حال جستجو ...</div>;
  } else if (data?.length > 0) {
    return data.map((suggestion: any) => {
      return (
        <li key={suggestion.Id}>
          <Link
            href={""}
            className="px-1 py-2 flex gap-2 hover:bg-[#dfdfdf] rounded hover:border-[rgb(85,85,85)] border-[1.5px] border-transparent border-dashed"
          >
            <div className="flex-grow overflow-hidden">
              <div className="flex gap-1">
                <FileText className="w-5 flex-shrink-0" />
                <span className="truncate">{suggestion.Name}</span>
              </div>
              <div className="ps-6 text-xs text-[gray] truncate">
                {suggestion.Breadcrumbs}
              </div>
            </div>
            <div className="basis-1/4 flex-shrink-0 hidden sm:block">
              <UserCheck className="flex-shrink-0 w-5" />
              {suggestion.AuthorName}
            </div>
          </Link>
        </li>
      );
    });
  } else {
    return <div className="text-center">نتیجه ای یافت نشد!</div>;
  }
};

export default SearchBox;
