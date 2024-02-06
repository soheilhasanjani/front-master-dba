import * as productApi from "@/apis/productApi";
import { useQuery } from "@tanstack/react-query";

export const usePostProductGetAllProducts = () => {
  return useQuery({
    queryKey: ["postProductGetAllProducts"],
    queryFn: () => productApi.postProductGetAllProducts(),
  });
};
