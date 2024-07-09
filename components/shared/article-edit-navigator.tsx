import React from "react";
import RadioButton from "@/components/core/RadioButton";
import { usePathname, useRouter } from "next/navigation";

const ARTICLE_PATHNAME = "/dashboard/articles/article";
const ARTICLE_GROUP_PATHNAME = "/dashboard/articles/article-group";

const ArticleEditNavigator = () => {
  //
  const { push } = useRouter();
  const pathname = usePathname();
  //
  return (
    <div className="mb-4 flex items-center gap-6 rounded bg-[#f8f9fa] p-4">
      <RadioButton
        name="exampleOption"
        defaultChecked={pathname === ARTICLE_GROUP_PATHNAME}
        label="گروه مقالات"
        onClick={() => push(ARTICLE_GROUP_PATHNAME)}
      />
      <RadioButton
        name="exampleOption"
        defaultChecked={pathname === ARTICLE_PATHNAME}
        label="مقاله"
        onClick={() => push(ARTICLE_PATHNAME)}
      />
    </div>
  );
};

export default ArticleEditNavigator;
