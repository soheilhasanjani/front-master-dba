"use client";

import {
  usePostArticleGetAllArticleMenu,
  usePostArticleGetArticleDetail,
  usePostArticleGetBreadCrumbListOnArticleId,
} from "@/hooks/apis/articleHookApi";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { ChevronLeft, Home, IconProps } from "react-feather";
import { useCollapse } from "react-collapsed";
import KeyWordsList from "@/components/pages/article/KeyWordsList";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/Popover";
import ArticleInformation from "@/components/pages/article/ArticleInformation";
import MarkdownRenderer from "@/components/pages/article/MarkdownRenderer";

const CustomBreadCrumb = ({ articleId }: { articleId: number }) => {
  //
  const { data } = usePostArticleGetBreadCrumbListOnArticleId({
    "BreadCrumbViewModel.id": articleId,
  });
  //
  const breadCrumbList: {
    id: number;
    label?: string;
    icon: React.ComponentType<IconProps>;
    ignoreMarginIcon?: boolean;
  }[] = [
    {
      id: 0,
      icon: Home,
      ignoreMarginIcon: true,
    },
    {
      id: 1,
      label: "مقالات",
      icon: ChevronLeft,
    },
    ...(Array.isArray(data)
      ? data.map((item: any) => ({
          id: item.Id,
          label: item.Name,
          icon: ChevronLeft,
        }))
      : []),
  ];
  //
  return (
    <ul className="flex items-center py-3">
      {breadCrumbList?.map((item) => (
        <li key={item.id} className="me-2">
          <Link href={"/"} className="flex items-center">
            <item.icon
              className={cn("mb-1", { "me-2": !item.ignoreMarginIcon })}
              size={18}
            />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const CollapsibleMenuItem = ({
  title,
  childrenItem,
}: {
  title: string;
  childrenItem: any[];
}) => {
  //
  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } =
    useCollapse();
  //
  return (
    <li
      className={cn("rounded-md", {
        "bg-[#f6f6f6]": isExpanded,
      })}
    >
      <div
        {...getToggleProps()}
        className={cn(
          "p-2.5 rounded-md hover:bg-[#e0e0e0] transition-colors flex items-center justify-between",
          {
            "bg-[#e0e0e0]": isExpanded,
          }
        )}
      >
        {title}
        <ChevronLeft
          size={"16px"}
          className={cn(
            "transition-transform",
            isExpanded ? "rotate-90" : "-rotate-90"
          )}
        />
      </div>
      <ul {...getCollapseProps()} className="bg-[#f6f6f6] rounded-md ps-2">
        {childrenItem?.map((item: any) => (
          <CollapsibleMenuItem
            key={item.ID}
            title={item.Name}
            childrenItem={item.Childs}
          />
        ))}
      </ul>
    </li>
  );
};

function MultiLevelList() {
  //
  const { data } = usePostArticleGetAllArticleMenu();
  // console.log(JSON.parse(data));
  //
  const list = [];
  // const dispatch = useDispatch();
  // // const items = useSelector(state => state.breadCrumbList);
  // // const articleMenu = useSelector(state => state.articleMenu);

  // const handleBreadCrumb = (article) => {
  //   dispatch(getBreadCrumbListOnArticleId(article.ID));
  // };
  //
  const formattedList = data ? JSON.parse(data) : [];
  //
  console.log(formattedList);
  return (
    <ul className="flex flex-col gap-2">
      {formattedList?.map((item: any) => (
        <CollapsibleMenuItem
          key={item.ID}
          title={item.Name}
          childrenItem={item.Childs}
        />
      ))}
      {/* {list.map((item) => (
        <>
          {item.Childs.length == 0 && (
            <li className="w-100" onClick={() => handleBreadCrumb(item)}>
              <Link
                href={`/article/${item.ID}/${item.Name.replace(
                  " ",
                  "_"
                ).replace(/ /g, "_")}`}
                id={item.ID}
                // activeClassName="active-border"
                aria-expanded="true"
              >
                {item.Name}
              </Link>
            </li>
          )}
          {item.Childs.length > 0 && <MultiLevelListItem listItem={item} />}
        </>
      ))} */}
    </ul>
  );
}

const ArticlePage = () => {
  //
  const { slug } = useParams();
  const articleDetail = usePostArticleGetArticleDetail({
    "ArticleViewModel.id": slug[0],
  });
  //
  const article = articleDetail?.data?.Article;
  //
  if (article === undefined) return "";
  return (
    <section className="container">
      <div className="grid grid-cols-12 gap-4 pt-4">
        <div className="col-span-12">
          <CustomBreadCrumb articleId={Number(slug[0])} />
        </div>
        <div className="col-span-3">
          <nav>
            <ul className="nav nav-list" style={{ display: "inherit" }}>
              {/* <MultiLevelList /> */}
            </ul>
          </nav>
        </div>
        <div className="col-span-9">
          <header>
            <h2 className="text-2xl mb-4">{article.Name}</h2>
            <ArticleInformation
              authorId={article.AuthorId}
              authorName={article.AuthorName}
              timeToRead={article.TimeToRead}
              updateDate={article.UpdateDate}
              uploadDate={article.UploadDate}
              views={article.Views}
            />
            <hr />
          </header>
          <section className="mt-4">
            {article.Body ? <MarkdownRenderer content={article.Body} /> : null}
          </section>

          <footer>
            {article.Refrences && (
              <div className="col-12 pb-3">
                <Popover placement="left" typeInteract="click">
                  <PopoverTrigger>
                    <span className="pointer bold main-color">
                      مشاهده منابع
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white rounded-xl border p-3">
                    <div className="flex flex-col gap-4">تست نمونه</div>
                  </PopoverContent>
                </Popover>
              </div>
            )}

            <KeyWordsList keyWordsList={article.KeyWordsList} />
          </footer>

          {/* {isLogin ? (
              <Comment articleId={id} />
            ) : (
              <div className="mt-3 text-center alert alert-info" role="alert">
                <span className="font-bold">برای ثبت نظر باید وارد شوید</span>
              </div>
            )} */}

          {/* <CommentList
              articleId={id}
              articleComment={articleComment}
              islogin={isLogin}
            /> */}

          <div id="imgZoomModal" className="image-modal">
            {/* <span className="close" onClick={handleCloseImageModal}>
                &times;
              </span> */}
            <img className="image-modal-content" id="img02" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
