import HeroSwiperSC from "@/components/pages/landing/HeroSwiperSC";
import MostVisitedSC from "@/components/pages/landing/MostVisitedSC";
import LatestArticlesSC from "@/components/pages/landing/LatestArticlesSC";
import OurServicesSC from "@/components/pages/landing/OurServicesSC";

export default function Home() {
  return (
    <div className="flex min-h-[60svh] flex-col gap-y-4 px-3 py-4 xxl:container">
      <div>
        <HeroSwiperSC />
      </div>
      <div>
        <LatestArticlesSC />
      </div>
      <div>
        <OurServicesSC />
      </div>
      <div>
        <MostVisitedSC />
      </div>
    </div>
  );
}
