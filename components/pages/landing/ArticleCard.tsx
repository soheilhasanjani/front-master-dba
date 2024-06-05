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
      <div className="shadow-[0px_5px_10px_0px_rgba(0,0,0,0.22)] rounded-sm flex-col flex">
        <div className="bg-primary px-2 rounded-t-sm h-11 flex items-center text-white">
          <h2 className="font-medium text-base truncate" title={name}>
            {name}
          </h2>
        </div>
        <div className="article-summery">
          <div className="h-32 p-4">
            <p className="text-[rgb(59,59,59)] text-sm text-justify line-clamp-5">
              {summery}
            </p>
          </div>
          <div className="flex m-2.5 items-center justify-between text-xs text-[brown] bg-[gainsboro] p-1.5 rounded">
            <span className="pe-2">{authorName}</span>
            <span className="text-[#393e43]">
              {new Intl.DateTimeFormat("fa-IR").format(
                new Date(uploadDateForOrderby)
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
