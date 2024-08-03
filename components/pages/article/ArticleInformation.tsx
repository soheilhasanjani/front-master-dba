import getDateAgo from "@/utils/getDateAgo";
import Link from "next/link";
import React from "react";
import { Calendar, Clock, Edit, Edit2, Eye, Watch } from "react-feather";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/Popover";
import staticFileUrl from "@/utils/staticFileUrl";
import Image from "next/image";
import formatPersianDate from "@/utils/formatPersianDate";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useGetAccountGetUserData } from "@/hooks/apis/accountHookApi";

type ArticleInformationProps = {
  uploadDate: number;
  updateDate: number;
  timeToRead: number;
  views: number;
  authorName: string;
  authorId: number;
  authorImage: any;
  authorDescription: any;
  authorEmail: any;
  parentId: any;
  id: any;
};

const ArticleInformation = (props: ArticleInformationProps) => {
  //
  const { isChecked, isLogin } = useAppSelector((state) => state.auth);
  const { data: user } = useGetAccountGetUserData(isChecked && isLogin);
  //
  const articlePathnameForEdit =
    "/dashboard/articles/article/" +
    props.id +
    (props.parentId ? "/" + props.parentId : "");
  //
  return (
    <div className="mb-3 flex items-center justify-between">
      <ul className="flex items-center gap-4">
        {[
          {
            id: 0,
            icon: <Calendar className="mb-1" size="18px" />,
            value: (
              <div dir="ltr">
                {formatPersianDate(new Date(props.uploadDate))}
              </div>
            ),
          },
          {
            id: 1,
            icon: <Clock className="mb-1" size="18px" />,
            value: getDateAgo(props.updateDate),
          },
          {
            id: 2,
            icon: <Watch className="mb-1" size="18px" />,
            value: <>{props.timeToRead} دقیقه برای مطالعه</>,
          },
          {
            id: 3,
            icon: <Eye className="" size="18px" />,
            value: (
              <>
                تعداد بازدید
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
            icon: <Edit2 className="" size="18px" />,
            value: (
              <>
                <Popover placement="bottom-start" typeInteract="hover">
                  <PopoverTrigger>
                    <Link
                      className="font-bold text-primary"
                      href={`/authors/${props.authorId}/${props.authorName
                        .replace(" ", "_")
                        .replace(/ /g, "_")}`}
                    >
                      <span>{props.authorName}</span>
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent className="max-w-72 rounded-xl border bg-white p-3 outline-none">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <Image
                          alt=""
                          width={50}
                          height={50}
                          className="size-[50px] flex-shrink-0 rounded-full border object-cover"
                          src={
                            props.authorImage === null
                              ? "/images/writer.jpg"
                              : staticFileUrl(props.authorImage)
                          }
                        />
                        <div className="flex flex-col gap-2">
                          <h6>{props.authorName}</h6>
                          <p>{props.authorEmail}</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p>{props.authorDescription}</p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </>
            ),
          },
        ].map((item) => {
          return (
            <li key={item.id} className="flex items-center gap-1.5">
              {item.icon}
              {item.value}
            </li>
          );
        })}
      </ul>
      {isChecked && isLogin && user?.IsAdmin && (
        <Link href={articlePathnameForEdit} target="_blank">
          <Edit size="18px" />
        </Link>
      )}
    </div>
  );
};

export default ArticleInformation;
