import React, { useMemo } from "react";
import { usePostArticleGetAllArticlesForDropdown } from "@/hooks/apis/articleHookApi";
import Select, { SelectProps } from "@/components/core/Select";

interface ArticlesSelectProps extends Omit<SelectProps, "options"> {
  parentId?: string;
}

const ArticlesSelect: React.ForwardRefRenderFunction<
  any,
  ArticlesSelectProps
> = ({ value, onChange, placeholder, parentId }, ref) => {
  //
  const { data } = usePostArticleGetAllArticlesForDropdown({ Id: parentId });
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
      ref={ref}
      options={memoizedOptions}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isClearable
    />
  );
};

export default React.forwardRef(ArticlesSelect);
