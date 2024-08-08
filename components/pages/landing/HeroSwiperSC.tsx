import { HOST_ADDRESS } from "@/configs/baseUrl";
import HeroSwiper from "@/components/pages/landing/HeroSwiper";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.post(HOST_ADDRESS + "/slider/GetAllSliders");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const HeroSwiperSC = async () => {
  //
  const data = await getData();
  //
  return <HeroSwiper data={data} />;
};

export default HeroSwiperSC;
