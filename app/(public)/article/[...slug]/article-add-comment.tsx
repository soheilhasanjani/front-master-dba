"use client";

import React from "react";
import { useState } from "react";
//
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { usePostCommentSaveComment } from "@/hooks/apis/commentHookApi";
import { toast } from "react-toastify";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useGetAccountGetUserData } from "@/hooks/apis/accountHookApi";
import "highlight.js/styles/atom-one-light.css";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

interface ArticleAddCommentProps {
  articleId: number;
}

const ArticleAddComment: React.FC<ArticleAddCommentProps> = ({ articleId }) => {
  //
  const { isChecked, isLogin } = useAppSelector((state) => state.auth);
  const { data: user } = useGetAccountGetUserData(isChecked && isLogin);
  //
  const [description, setDescription] = useState("");
  const saveComment = usePostCommentSaveComment();

  const handleEditorChange = ({ text }: { text: string }) => {
    setDescription(text);
  };

  function renderHTML(text: string) {
    return mdParser.render(text);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    saveComment.mutate(
      {
        ArticleId: articleId,
        Description: description,
      },
      {
        onSuccess: (res) => {
          if (res.Status == "success") {
            setDescription("");
            if (user?.IsAdmin) toast.success("نظر شما با موفقیت ثبت شد");
            else
              toast.warn(
                "نظر شما با موفقیت ثبت شد. بعد از تایید توسط کارشناسان به اشتراک گذاشته می شود.",
              );
          } else {
            toast.error("خطایی رخ داده است");
          }
        },
      },
    );
  };
  return (
    <section>
      <h3 className="mb-2 font-bold text-primary"> نظرات کاربران </h3>
      {user ? (
        <form onSubmit={handleSubmit}>
          <MdEditor
            style={{
              height: "200px",
            }}
            value={description}
            onChange={handleEditorChange}
            renderHTML={renderHTML}
            custom-html-style
          />
          <button
            disabled={!description}
            type="submit"
            className="mt-4 h-10 w-full rounded border border-[#0f70b7] bg-[#0f70b7] px-4 text-xs text-white transition-colors hover:bg-white hover:text-[#0f70b7] disabled:pointer-events-none disabled:border-[#5096c7] disabled:bg-[#5096c7]"
          >
            ثبت دیدگاه
          </button>
        </form>
      ) : (
        <div className="border border-[#b6effb] bg-[#cff4fc] p-4 text-center text-[#055160]">
          <span className="font-bold">برای ثبت نظر باید وارد شوید</span>
        </div>
      )}
    </section>
  );
};

export default ArticleAddComment;
