import Link from "next/link";
import React from "react";
import { Tag } from "react-feather";

const KeyWordsList = ({ keyWordsList }: { keyWordsList: Array<string> }) => {
  return keyWordsList ? (
    <div className="flex items-center gap-1 flex-wrap">
      {keyWordsList.map((item, i) => (
        <Link key={i} href={`/archive/${item}/${1}`}>
          <span
            onClick={(e) => {
              //   dispatch(setSearchValue(item));
              window.scrollTo(0, 0);
            }}
            className="border border-[#0f70b7] py-0.5 px-1 rounded cursor-pointer flex items-center gap-0.5"
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
