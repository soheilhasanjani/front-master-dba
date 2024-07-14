import React, { FC } from "react";
import { Tag } from "react-feather";

interface KeywordsProps {
  keyWordsList: Array<string>;
}

const Keywords: FC<KeywordsProps> = ({ keyWordsList }) => {
  return keyWordsList ? (
    <div className="flex flex-wrap gap-1">
      {keyWordsList.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-0.5 rounded border border-primary px-1 py-0.5"
        >
          <Tag size="14px" className="me-1" />
          <span className="whitespace-nowrap">{item}</span>
        </span>
      ))}
    </div>
  ) : null;
};

export default Keywords;
