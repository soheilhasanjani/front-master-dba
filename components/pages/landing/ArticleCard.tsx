import Link from "next/link";
import React from "react";

const ArticleCard = ({
  id,
  name,
  summery,
  authorName,
  uploadDateForOrderby,
}: any) => {
  return (
    <Link
      href={`/article/${id}/${name.replace(" ", "_").replace(/ /g, "_")}`}
      className="w-100"
    >
      <div className="flex flex-col rounded-sm shadow-[0px_5px_10px_0px_rgba(0,0,0,0.22)]">
        <div className="flex h-11 items-center rounded-t-sm bg-primary px-2 text-white">
          <h2 className="truncate text-base font-medium" title={name}>
            {name}
          </h2>
        </div>
        <div className="article-summery">
          <div className="h-32 p-4">
            <p className="line-clamp-5 text-justify text-sm text-[rgb(59,59,59)]">
              {summery}
            </p>
          </div>
          <div className="m-2.5 flex items-center justify-between rounded bg-[gainsboro] p-1.5 text-xs text-[brown]">
            <span className="pe-2">{authorName}</span>
            <span className="text-[#393e43]">
              {new Intl.DateTimeFormat("fa-IR").format(
                new Date(uploadDateForOrderby),
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
