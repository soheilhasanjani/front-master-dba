import HeroSwiperSC from "@/components/pages/landing/HeroSwiperSC";
import MostVisitedServerComponent from "@/components/pages/landing/MostVisitedServerComponent";
import LatestArticlesSC from "@/components/pages/landing/LatestArticlesSC";
import OurServicesServerComponent from "@/components/pages/landing/OurServicesServerComponent";

export default function Home() {
  return (
    <div className="container flex flex-col gap-y-4 py-4">
      <div>
        <HeroSwiperSC />
      </div>
      <div>
        <LatestArticlesSC />
      </div>
      <div>
        <OurServicesServerComponent />
      </div>
      <div>
        <MostVisitedServerComponent />
      </div>
    </div>
  );
}
