import * as productApi from "@/apis/productApi";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export const postProductGetAllProductsQueryOptions = queryOptions({
  queryKey: ["postProductGetAllProducts"],
  queryFn: () => productApi.postProductGetAllProducts(),
});

export const usePostProductGetAllProducts = () => {
  return useSuspenseQuery(postProductGetAllProductsQueryOptions);
};
