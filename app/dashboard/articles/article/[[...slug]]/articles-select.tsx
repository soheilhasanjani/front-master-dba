import React, { FC, useMemo } from "react";
import { usePostArticleGetAllArticlesForDropdown } from "@/hooks/apis/articleHookApi";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("@/components/core/Select"), {
  ssr: false,
});

interface ArticlesSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ArticlesSelect: FC<ArticlesSelectProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  //
  const { data } = usePostArticleGetAllArticlesForDropdown({});
  //
  const memoizedOptions = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return data.map((item) => ({
      label: item.label,
      value: String(item.value),
    }));
  }, [data]);
  //
  return (
    <Select
      options={memoizedOptions}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isClearable
    />
  );
};

export default ArticlesSelect;
