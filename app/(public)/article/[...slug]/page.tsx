"use client";

import ArticleInformation from "@/components/pages/article/ArticleInformation";
import CustomBreadcrumb from "@/components/pages/article/CustomBreadCrumb";
import { usePostArticleGetArticleDetail } from "@/hooks/apis/articleHookApi";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import {
  Calendar,
  Clock,
  CornerLeftUp,
  CornerRightDown,
  Edit2,
  Eye,
  Watch,
} from "react-feather";

const ArticlePage = () => {
  //
  const { slug } = useParams();
  const articleDetail = usePostArticleGetArticleDetail({
    "ArticleViewModel.id": slug[0],
  });
  console.log(articleDetail.data);
  //
  const article = articleDetail?.data?.Article;

  //
  if (article === undefined) return "";
  return (
    <section className="term-content container pt-3">
      <CustomBreadcrumb />
      <div className="grid gap-4 grid-cols-12 justify-center mt-4">
        <div className="lg:col-span-3 md:col-span-4 col-span-12 stickymode">
          <div className="term-image mb-3">
            <nav>
              <ul className="nav nav-list" style={{ display: "inherit" }}>
                {/* {articleMenu && <MultiLevelList list={articleMenu} />} */}
              </ul>
            </nav>
          </div>
        </div>
        <hr className="md:hidden w-full" />
        <div
          className="lg:col-span-9 md:col-span-8 sm:col-span-12 col-span-12 pull-left"
          style={{ zIndex: "9" }}
        >
          <div className="col-md-12 col-sm-12 col-12 pull-left">
            {/* {article.Name && (
              <Helmet>
                <title>
                  {article.Name} |{webSiteTitle}
                </title>
                <meta name="keywords" content={article.KeyWordsList}></meta>
                <meta name="author" content={article.AuthorName}></meta>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={article.Name} />
                <meta
                  property="og:image"
                  content="https://masterdba.ir/DBA_DIRECTORY/panel/DBA123.png"
                />
                <meta property="og:description" content={article.Summery} />
              </Helmet>
            )} */}

            <header className="px-3">
              <div className="row mb-3">
                {article.Article_PreID && (
                  <div className="col">
                    <Link
                      className="btn btn-pre"
                      href={`/article/${
                        article.Article_PreID
                      }/${article.Article_PreName?.replace(" ", "_").replace(
                        / /g,
                        "_"
                      )}`}
                    >
                      <CornerRightDown /> {article.Article_PreName}{" "}
                    </Link>
                  </div>
                )}
                {article.Article_NextID && (
                  <div className="col d-flex justify-content-end">
                    <Link
                      className="btn btn-next"
                      href={`/article/${
                        article.Article_NextID
                      }/${article.Article_NextName?.replace(" ", "_").replace(
                        / /g,
                        "_"
                      )}`}
                    >
                      {article.Article_NextName} <CornerLeftUp />
                    </Link>
                  </div>
                )}
              </div>

              <h2 className="font-bold text-2xl">{article.Name}</h2>

              <ArticleInformation article={article} />

              <hr className="my-0"></hr>
            </header>
            <section className="term-description">
              {/* {article.Body ? (
                <CustomeArticleParser content={article.Body} />
              ) : null} */}
            </section>

            <footer className="px-4" style={{ clear: "both" }}>
              {/* {!isEmpty(article.Refrences) && (
                <div className="col-12 pb-3">
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    rootClose
                    overlay={popoverLeft}
                  >
                    <span className="pointer bold main-color">
                      مشاهده منابع
                    </span>
                  </OverlayTrigger>
                </div>
              )} */}

              <div className="col-12">
                {/* {article.KeyWordsList
                  ? article.KeyWordsList.map((item) => (
                      // <Link to={`/archive/${item}/${1}`}>
                      <span
                        onClick={(e) => {
                          dispatch(setSearchValue(item));
                          window.scrollTo(0, 0);
                        }}
                        className="article-tag pointer"
                      >
                        <Tag size={"14px"} className="me-1" />
                        {item}
                      </span>
                      // </Link>
                    ))
                  : null} */}
              </div>
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

            {/* <div id="imgZoomModal" className="image-modal">
              <span className="close" onClick={handleCloseImageModal}>
                &times;
              </span>
              <img className="image-modal-content" id="img02" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
