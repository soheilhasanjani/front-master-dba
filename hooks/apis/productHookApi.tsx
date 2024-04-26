import * as productApi from "@/apis/productApi";
import { useSuspenseQuery } from "@tanstack/react-query";

export const usePostProductGetAllProducts = () => {
  return useSuspenseQuery({
    queryKey: ["postProductGetAllProducts"],
    queryFn: () => productApi.postProductGetAllProducts(),
  });
};
