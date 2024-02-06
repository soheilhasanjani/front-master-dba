"use client";

import LatestArticles from "@/components/pages/landing/LatestArticles";
import MostVisited from "@/components/pages/landing/MostVisited";
import OurServices from "@/components/pages/landing/OurServices";
import PromotionalSlider from "@/components/pages/landing/PromotionalSlider";

export default function Home() {
  return (
    <div className="container flex flex-col gap-y-4 py-4">
      <div>
        <PromotionalSlider />
      </div>
      <div>
        <LatestArticles />
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <MostVisited />
      </div>
    </div>
  );
}
