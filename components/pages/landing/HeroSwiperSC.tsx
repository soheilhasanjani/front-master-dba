import { Suspense } from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import HeroSwiper from "@/components/pages/landing/HeroSwiper";

async function getData() {
  const res = await fetch(HOST_ADDRESS + "/slider/GetAllSliders", {
    method: "POST",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const HeroSwiperSC = async () => {
  //
  const data = await getData();
  //
  return (
    <Suspense fallback={<></>}>
      <HeroSwiper data={data} />
    </Suspense>
  );
};

export default HeroSwiperSC;
