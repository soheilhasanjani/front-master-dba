import React, { useMemo } from "react";
import { usePostArticleGetAllArticlesForDropdown } from "@/hooks/apis/articleHookApi";
import Select, { SelectProps } from "@/components/core/Select";

interface ArticlesSelectProps extends Omit<SelectProps, "options"> {}

const ArticlesSelect: React.ForwardRefRenderFunction<
  any,
  ArticlesSelectProps
> = ({ value, onChange, placeholder }, ref) => {
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
