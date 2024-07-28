"use client";

import React, { useState } from "react";
import {
  usePostCommentDeleteComment,
  usePostCommentGetArticleComment,
} from "@/hooks/apis/commentHookApi";
import staticFileUrl from "@/utils/staticFileUrl";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useGetAccountGetUserData } from "@/hooks/apis/accountHookApi";
import formatPersianDate from "@/utils/formatPersianDate";
import { Edit, Trash2 } from "react-feather";
import { CustomArticleParser } from "@/app/(public)/article/[...slug]/custom-article-parser";
import Image from "next/image";
import { toast } from "react-toastify";
import ArticleCommentDialog from "@/app/(public)/article/[...slug]/article-comment-dialog";

interface ArticleCommentListProps {
  articleId: number;
}

const ArticleCommentList: React.FC<ArticleCommentListProps> = ({
  articleId,
}) => {
  //
  const [commentDialogData, setCommentDialogData] = useState<any>(null);
  //
  const { isChecked, isLogin } = useAppSelector((state) => state.auth);
  const { data: user } = useGetAccountGetUserData(isChecked && isLogin);
  //
  const deleteComment = usePostCommentDeleteComment();
  const { data: comments } = usePostCommentGetArticleComment({
    ArticleId: articleId,
    currentSection: 1,
    perSection: 5,
  });
  //
  const handleDeleteComment = (id: string) => {
    deleteComment.mutate(
      { "CommentViewModel.Id": id },
      {
        onSuccess: (res) => {
          if (res.Status == "success") {
            toast.success(res.Message);
          }
        },
      },
    );
  };
  //
  return (
    <>
      <ArticleCommentDialog
        data={commentDialogData}
        onChangeData={setCommentDialogData}
      />
      <div className="flex flex-col gap-4 pb-4">
        {comments?.length > 0 &&
          comments
            .filter((x: any) => x.Comment_ReplyId == null)
            .map((item: any) => (
              <div key={item.Id} className="flex gap-4">
                <div>
                  <Image
                    width={70}
                    height={70}
                    className="size-[70px] overflow-hidden rounded-full border object-cover"
                    src={
                      item.UserImage
                        ? staticFileUrl(item.UserImage)
                        : "/images/jess-bailey-q10VITrVYUM-unsplash.jpg"
                    }
                    alt=""
                  />
                </div>

                <div className="flex-grow rounded border p-4">
                  <div className="flex items-center gap-3">
                    <h3> {item.FullName}</h3>
                    {user !== undefined &&
                      item.UserId != user.ID &&
                      user.IsAdmin && (
                        <span
                          onClick={() =>
                            setCommentDialogData({ isReplay: true, ...item })
                          }
                        >
                          <Image
                            width={30}
                            height={30}
                            className="size-[30px] cursor-pointer"
                            src="/images/326683_all_reply_icon.svg"
                            alt=""
                          />
                        </span>
                      )}
                  </div>
                  {item.UserId == user?.ID ? (
                    <div className="flex items-center">
                      <span dir="ltr">
                        {formatPersianDate(new Date(item.Date))}
                      </span>
                      &nbsp; &nbsp; | &nbsp; &nbsp;
                      <span
                        onClick={() =>
                          setCommentDialogData({ isEdit: true, ...item })
                        }
                      >
                        <Edit className="comment-edit" size={18} />
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => handleDeleteComment(item.Id)}
                      >
                        <Trash2 className="comment-delete" size={18} />
                      </span>
                    </div>
                  ) : (
                    <span dir="ltr">
                      {formatPersianDate(new Date(item.Date))}
                    </span>
                  )}
                  <p className="">
                    {item.Description ? (
                      <CustomArticleParser content={item.Description} />
                    ) : null}
                  </p>
                  {comments
                    .filter((el: any) => el.Comment_ReplyId == item.Id)
                    .map((replay: any) => (
                      <div
                        key={replay.Id}
                        className="mt-4 flex items-center gap-4 rounded bg-black/5 p-4"
                      >
                        <Image
                          width={70}
                          height={70}
                          className="size-[70px] overflow-hidden rounded-full border object-cover"
                          src={
                            replay.UserImage
                              ? staticFileUrl(replay.UserImage)
                              : "/images/jess-bailey-q10VITrVYUM-unsplash.jpg"
                          }
                          alt=""
                        />

                        <div className="left-col">
                          <h3> {replay.FullName} </h3>
                          {replay.UserId == user?.ID ? (
                            <div className="flex items-center">
                              <span dir="ltr">
                                {formatPersianDate(new Date(replay.Date))}
                              </span>
                              &nbsp; &nbsp; | &nbsp; &nbsp;
                              <span
                                onClick={() =>
                                  setCommentDialogData({
                                    isEdit: true,
                                    ...replay,
                                  })
                                }
                              >
                                <Edit className="comment-edit" size={18} />
                              </span>
                              <span
                                className="cursor-pointer"
                                onClick={() => handleDeleteComment(replay.Id)}
                              >
                                <Trash2 className="comment-delete" size={18} />
                              </span>
                            </div>
                          ) : (
                            <span dir="ltr">
                              {formatPersianDate(new Date(replay.Date))}
                            </span>
                          )}
                          <p>
                            {replay.Description ? (
                              <CustomArticleParser
                                content={replay.Description}
                              />
                            ) : null}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default ArticleCommentList;
