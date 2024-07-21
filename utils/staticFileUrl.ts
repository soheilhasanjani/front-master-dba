import { IMAGE_BASE_URL } from "@/configs/baseUrl";

const staticFileUrl = (src: string) => {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return IMAGE_BASE_URL + src;
};

export default staticFileUrl;
