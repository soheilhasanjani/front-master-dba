import HeroSwiperSC from "@/components/pages/landing/HeroSwiperSC";
import MostVisitedSC from "@/components/pages/landing/MostVisitedSC";
import LatestArticlesSC from "@/components/pages/landing/LatestArticlesSC";
import OurServicesSC from "@/components/pages/landing/OurServicesSC";
import { Suspense } from "react";
import LoadingComponent from "@/components/shared/loading-component";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  return (
    <div className="flex min-h-[60svh] flex-col gap-y-4 px-3 py-4 xxl:container">
      <div>
        <ErrorBoundary fallback={<div></div>}>
          <Suspense fallback={<LoadingComponent />}>
            <HeroSwiperSC />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary fallback={<div></div>}>
          <Suspense fallback={<LoadingComponent />}>
            <LatestArticlesSC />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary fallback={<div></div>}>
          <Suspense fallback={<LoadingComponent />}>
            <OurServicesSC />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary fallback={<div></div>}>
          <Suspense fallback={<LoadingComponent />}>
            <MostVisitedSC />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
