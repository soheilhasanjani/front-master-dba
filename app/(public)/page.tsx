"use client";

import { usePostSliderGetAllSliders } from "@/hooks/apis/sliderHookApi";

export default function Home() {
  usePostSliderGetAllSliders();
  return (
    <div className="container">
      <div className="new-article container-xxl pt-3">
        <h4>جدیدترین مقالات</h4>
        <div className="p-relative pb-4">
          <div className="rx-border-rectangle"></div>
          <div className="rx-border-rectangle-after"></div>
        </div>

        {/* <Articles
          articles={articles.LatestArticles}
          handleClickArticle={handleClickArticle}
        /> */}
      </div>
      <div className=" pb-4 container-xxl">
        {/* {mainPageData ? <About mainPageData={mainPageData} /> : null} */}
        {/* {mainPageData ? <Products /> : null} */}
      </div>
      <div className="new-article container-xxl">
        <h4>پر بازدیدترین ها</h4>
        <div className="p-relative pb-4">
          <div className="rx-border-rectangle"></div>
          <div className="rx-border-rectangle-after"></div>
        </div>

        {/* <Articles
          articles={articles.MostVisitedArticles}
          handleClickArticle={handleClickArticle}
        /> */}
      </div>
    </div>
  );
}
