import { IMAGE_BASE_URL } from "@/configs/baseUrl";

const staticFileUrl = (src: string) => {
  return IMAGE_BASE_URL + src;
};

export default staticFileUrl;
