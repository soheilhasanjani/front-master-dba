import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeading } from "@/components/core/Dialog";
import { usePostCommentSaveComment } from "@/hooks/apis/commentHookApi";
import MarkdownEditor from "@/app/(public)/article/[...slug]/markdown-editor";
import { toast } from "react-toastify";
import omit from "lodash.omit";

interface ArticleCommentDialogProps {
  data: any;
  onChangeData: (data: any) => void;
}

const ArticleCommentDialog: React.FC<ArticleCommentDialogProps> = ({
  data,
  onChangeData,
}) => {
  //
  const saveComment = usePostCommentSaveComment();
  const [description, setDescription] = useState("");
  //
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveComment.mutate(
      omit(
        {
          Id: data?.Id,
          Description: description,
          IsConfirm: data?.IsConfirm,
          IsReplyByAdmin: data?.isReplay ? true : data?.IsReplyByAdmin,
          ArticleId: data?.ArticleId,
          Comment_ReplyID: data?.isReplay ? data?.Id : data?.Comment_ReplyID,
        },
        data?.isReplay ? ["Id"] : [],
      ),
      {
        onSuccess: (res) => {
          if (res.Status == "success") {
            toast.success(res.Message);
            onChangeData(null);
          } else {
            toast.error("خطایی رخ داده است");
          }
        },
      },
    );
  };
  //
  useEffect(() => {
    if (data?.isEdit) {
      setDescription(data?.Description);
    } else {
      setDescription("");
    }
  }, [data]);
  //
  return (
    <Dialog
      open={Boolean(data)}
      onOpenChange={(open) => {
        if (open === false) onChangeData(null);
      }}
    >
      <DialogContent className="z-20 m-4 min-w-80 rounded bg-white p-4">
        <DialogHeading className="mb-4 text-start text-base font-bold">
          {data?.isEdit && "ویرایش"}
          {data?.isReplay && "پاسخ"}
        </DialogHeading>
        <form onSubmit={handleSubmit}>
          <MarkdownEditor value={description} onChange={setDescription} />
          <button
            disabled={!description || saveComment.isPending}
            type="submit"
            className="mt-4 h-10 w-full rounded border border-[#0f70b7] bg-[#0f70b7] px-4 text-xs text-white transition-colors hover:bg-white hover:text-[#0f70b7] disabled:pointer-events-none disabled:border-[#5096c7] disabled:bg-[#5096c7]"
          >
            ثبت
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleCommentDialog;
