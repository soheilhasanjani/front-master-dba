import * as commentApi from "@/apis/commentApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const usePostCommentGetArticleComment = (params: {
  ArticleId: number;
  perSection: number;
  currentSection: number;
}) => {
  return useQuery({
    queryKey: ["postCommentGetArticleComment", params],
    queryFn: () => commentApi.postCommentGetArticleComment(params),
  });
};

export const usePostCommentSaveComment = () => {
  const QC = useQueryClient();
  return useMutation({
    mutationFn: commentApi.postCommentSaveComment,
    onSuccess: () => {
      QC.invalidateQueries({
        queryKey: ["postCommentGetArticleComment"],
      });
    },
  });
};
