import Link from "next/link";
import React from "react";
import { Tag } from "react-feather";

const KeyWordsList = ({ keyWordsList }: { keyWordsList: Array<string> }) => {
  return keyWordsList ? (
    <div className="flex flex-wrap items-center gap-1">
      {keyWordsList.map((item, i) => (
        <Link key={i} href={`/archive/${item}/${1}`}>
          <span
            onClick={(e) => {
              //   dispatch(setSearchValue(item));
              window.scrollTo(0, 0);
            }}
            className="flex cursor-pointer items-center gap-0.5 rounded border border-[#0f70b7] px-1 py-0.5"
          >
            <Tag size="14px" className="me-1" />
            <span className="whitespace-nowrap">{item}</span>
          </span>
        </Link>
      ))}
    </div>
  ) : null;
};

export default KeyWordsList;
