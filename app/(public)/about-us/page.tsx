import AboutUsContent from "@/components/pages/landing/AboutUsContent";
import React, { Suspense } from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Suspense>
        <AboutUsContent />
      </Suspense>
    </div>
  );
};

export default AboutUsPage;
