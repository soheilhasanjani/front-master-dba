import getDateAgo from "@/utils/getDateAgo";
import Link from "next/link";
import React from "react";
import { Calendar, Clock, Edit2, Eye, Watch } from "react-feather";

type ArticleInformationProps = {
  uploadDate: number;
  updateDate: number;
  timeToRead: number;
  views: number;
  authorName: string;
  authorId: number;
};

const ArticleInformation = (props: ArticleInformationProps) => {
  return (
    <ul className="flex items-center gap-3 mb-4">
      {[
        {
          id: 0,
          icon: <Calendar className="me-2" size="18px" />,
          value: props.uploadDate,
        },
        {
          id: 1,
          icon: <Clock className="me-2" size="18px" />,
          value: getDateAgo(props.updateDate),
        },
        {
          id: 2,
          icon: <Watch className="me-2" size="18px" />,
          value: <>{props.timeToRead} دقیقه برای مطالعه</>,
        },
        {
          id: 3,
          icon: <Eye className="me-2" size="18px" />,
          value: (
            <>
              تعداد بازدید{" "}
              <span>
                {props.views > 1000
                  ? props.views / 1000 + " " + "هزار"
                  : props.views}
              </span>
            </>
          ),
        },
        {
          id: 4,
          icon: <Eye className="me-2" size="18px" />,
          value: (
            <>
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
            </>
          ),
        },
        {
          id: 5,
          icon: <Edit2 className="me-2" size="18px" />,
          value: (
            <>
              <Link
                href={`/authorpage/${props.authorId}/${props.authorName
                  .replace(" ", "_")
                  .replace(/ /g, "_")}`}
              >
                {" "}
                <span className="authorname">{props.authorName}</span>
              </Link>
            </>
          ),
        },
      ].map((item) => {
        return (
          <li key={item.id} className="flex items-center gap-1">
            {item.icon}
            {item.value}
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleInformation;
