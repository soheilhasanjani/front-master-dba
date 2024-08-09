"use client";

import { useSearchBox } from "@/components/providers/SearchBoxProvider";
import React, { FC } from "react";
import { Tag } from "react-feather";

interface KeywordsProps {
  keyWordsList: Array<string>;
}

const Keywords: FC<KeywordsProps> = ({ keyWordsList }) => {
  //
  const { setInputText, setIsFocus } = useSearchBox();
  //
  return keyWordsList ? (
    <div className="flex flex-wrap gap-1">
      {keyWordsList.map((item, i) => (
        <span
          onClick={() => {
            setIsFocus(true);
            setInputText(item);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          key={i}
          className="flex cursor-pointer items-center gap-0.5 rounded border border-primary px-1 py-0.5"
        >
          <Tag size="14px" className="me-1" />
          <span className="whitespace-nowrap">{item}</span>
        </span>
      ))}
    </div>
  ) : null;
};

export default Keywords;
