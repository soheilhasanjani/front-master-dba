import * as commentApi from "@/apis/commentApi";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

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

export const useInfiniteArticleComment = (params: {
  ArticleId: number;
  perSection: number;
}) => {
  return useInfiniteQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["ArticleComment"],
    queryFn: ({ pageParam }) => {
      return commentApi.postCommentGetArticleComment({
        ...params,
        currentSection: pageParam,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length >= params.perSection ? lastPageParam + 1 : null;
    },
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

export const usePostCommentDeleteComment = () => {
  const QC = useQueryClient();
  return useMutation({
    mutationFn: commentApi.postCommentDeleteComment,
    onSuccess: () => {
      QC.invalidateQueries({
        queryKey: ["postCommentGetArticleComment"],
      });
    },
  });
};
