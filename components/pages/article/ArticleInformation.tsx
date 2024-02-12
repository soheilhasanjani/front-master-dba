import Link from "next/link";
import React from "react";
import { Calendar, Clock, Edit2, Eye, Watch } from "react-feather";

const ArticleInformation = ({ article }: any) => {
  return (
    <div>
      <div className="flex flex-wrap mt-2">
        <div className="col-md-11">
          <ul className="article-data mb-2 flex gap-3 text-[#6a6a6a]">
            {[
              {
                id: 0,
                icon: Calendar,
                content: article.UploadDate,
              },
              {
                id: 1,
                icon: Clock,
                content: article.UploadDate,
              },
              {
                id: 2,
                icon: Watch,
                content: <>{article.TimeToRead} دقیقه برای مطالعه</>,
              },
              {
                id: 3,
                icon: Eye,
                content: (
                  <>
                    تعداد بازدید{" "}
                    <span>
                      {article.Views > 1000
                        ? article.Views / 1000 + " " + "هزار"
                        : article.Views}
                    </span>
                  </>
                ),
              },
              {
                id: 4,
                icon: Eye,
                content: (
                  <>
                    تعداد بازدید{" "}
                    <span>
                      {article.Views > 1000
                        ? article.Views / 1000 + " " + "هزار"
                        : article.Views}
                    </span>
                  </>
                ),
              },
              {
                id: 5,
                icon: Eye,
                content: (
                  <>
                    تعداد بازدید{" "}
                    <span>
                      {article.Views > 1000
                        ? article.Views / 1000 + " " + "هزار"
                        : article.Views}
                    </span>
                  </>
                ),
              },
            ].map((item) => (
              <li
                key={item.id}
                className="flex gap-0.5 items-center whitespace-nowrap"
              >
                <item.icon className="me-2" size="18px" />
                {item.content}
              </li>
            ))}
            <li className="me-3 mb-2 mb-lg-auto">
              <Calendar className="me-2" size="18px" />
              {article.UploadDate}
            </li>
            {article.UpdateDate != 0 && (
              <li className="me-3  mb-2 mb-lg-auto" title="تاریخ ویرایش">
                <Clock className="me-2" size="18px" />
                {/* {getDateago(article.UpdateDate)} */}
              </li>
            )}
            <li className="me-3  mb-2 mb-lg-auto">
              <Watch className="me-2" size="18px" /> {article.TimeToRead} دقیقه
              برای مطالعه
            </li>
            <li className="me-3  mb-2 mb-lg-auto">
              <Eye className="me-2" size="18px" />
              تعداد بازدید{" "}
              <span>
                {article.Views > 1000
                  ? article.Views / 1000 + " " + "هزار"
                  : article.Views}
              </span>
            </li>
            <li className="me-3  mb-2 mb-lg-auto d-none d-xl-block">
              {/* <OverlayTrigger
                        trigger="hover"
                        placement="left"
                        rootClose
                        overlay={popoverLeft2}
                      >
                        <div>
                          <Edit2 className="me-2" size="18px" />
                          <Link
                            to={`/authorpage/${
                              article.AuthorId
                            }/${article.AuthorName.replace(" ", "_").replace(
                              / /g,
                              "_"
                            )}`}
                          >
                            {" "}
                            <span className="authorname">
                              {article.AuthorName}
                            </span>
                          </Link>
                        </div>
                      </OverlayTrigger> */}
            </li>
            <li className="me-3 mb-2 mb-lg-auto d-block d-xl-none">
              <Edit2 className="me-2" size="18px" />
              <Link
                href={`/authorpage/${
                  article.AuthorId
                }/${article.AuthorName.replace(" ", "_").replace(/ /g, "_")}`}
              >
                {" "}
                <span className="authorname">{article.AuthorName}</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="col-md-1">
                  {isLogin && panelMenu.length > 0 && (
                    <span>
                      <Link
                        to={`/dashboard/articleeditorpage/${article.ParentId}/${article.Id}`}
                        target="_blank"
                      >
                        <Edit size="18px" />
                      </Link>
                    </span>
                  )}
                </div> */}
      </div>
    </div>
  );
};

export default ArticleInformation;
