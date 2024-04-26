"use client";

import LatestArticles from "@/components/pages/landing/LatestArticles";
import MostVisited from "@/components/pages/landing/MostVisited";
import OurServices from "@/components/pages/landing/OurServices";
import PromotionalSlider from "@/components/pages/landing/PromotionalSlider";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container flex flex-col gap-y-4 py-4">
      <div>
        <Suspense fallback={<div></div>}>
          <PromotionalSlider />
        </Suspense>
      </div>
      <div>
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
      </div>
    </div>
  );
}
