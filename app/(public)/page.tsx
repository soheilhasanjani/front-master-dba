import HeroSwiperServerComponent from "@/components/pages/landing/HeroSwiperServerComponent";
import MostVisitedServerComponent from "@/components/pages/landing/MostVisitedServerComponent";
import LatestArticlesServerComponent from "@/components/pages/landing/LatestArticlesServerComponent";
import OurServicesServerComponent from "@/components/pages/landing/OurServicesServerComponent";

export default function Home() {
  return (
    <div className="container flex flex-col gap-y-4 py-4">
      <div>
        <HeroSwiperServerComponent />
      </div>
      <div>
        <LatestArticlesServerComponent />
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
