import Skeleton from "@/components/core/Skeleton";
import LatestArticles from "@/components/pages/landing/LatestArticles";
import MostVisited from "@/components/pages/landing/MostVisited";
import OurServices from "@/components/pages/landing/OurServices";
import HeroSwiper from "@/components/pages/landing/HeroSwiper";
import { Suspense } from "react";
import HeroSwiperServerComponent from "@/components/pages/landing/HeroSwiperServerComponent";

export default function Home() {
  return (
    <div className="container flex flex-col gap-y-4 py-4">
      <div>
        {/* <Suspense fallback={<Skeleton className="h-[340px] w-full" />}> */}
        <HeroSwiperServerComponent />
        {/* </Suspense> */}
      </div>
      {/* <div>
        <Suspense fallback={<div></div>}>
          <LatestArticles />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div></div>}>
          <OurServices />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div></div>}>
          <MostVisited />
        </Suspense>
      </div> */}
    </div>
  );
}
