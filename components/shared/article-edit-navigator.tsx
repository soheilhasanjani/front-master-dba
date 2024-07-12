import React from "react";
import RadioButton from "@/components/core/RadioButton";
import { usePathname, useRouter } from "next/navigation";
import isNumber from "is-number";

const ARTICLE_PATHNAME = "/dashboard/articles/article";
const ARTICLE_GROUP_PATHNAME = "/dashboard/articles/group-article";

const ArticleEditNavigator = () => {
  //
  const { push } = useRouter();
  const pathname = usePathname();
  //
  const partOfPathname = pathname.split("/");
  const lastPartOfPathname = +partOfPathname?.[partOfPathname.length - 1];
  //
  return (
    <div className="mb-4 flex items-center gap-6 rounded bg-[#f8f9fa] p-4">
      <RadioButton
        name="exampleOption"
        defaultChecked={pathname.startsWith(ARTICLE_GROUP_PATHNAME)}
        label="گروه مقالات"
        onClick={() =>
          push(
            ARTICLE_GROUP_PATHNAME +
              "/add" +
              (isNumber(lastPartOfPathname) ? `/${lastPartOfPathname}` : ""),
          )
        }
      />
      <RadioButton
        name="exampleOption"
        defaultChecked={pathname.startsWith(ARTICLE_PATHNAME)}
        label="مقاله"
        onClick={() =>
          push(
            ARTICLE_PATHNAME +
              "/add" +
              (isNumber(lastPartOfPathname) ? `/${lastPartOfPathname}` : ""),
          )
        }
      />
    </div>
  );
};

export default ArticleEditNavigator;
