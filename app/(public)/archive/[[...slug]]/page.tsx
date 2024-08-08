import React from "react";
import ArchiveBreadcrumbs from "@/app/(public)/archive/[[...slug]]/archive-breadcrumbs";
import CategoryCard from "@/app/(public)/archive/[[...slug]]/category-card";
import ArticleCard from "@/components/pages/landing/ArticleCard";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import { Metadata } from "next";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";
import axios from "axios";
import axiosRetry from "axios-retry";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `مقالات | ${title}`,
  };
}

// Create an Axios instance with a timeout and retry logic
const axiosInstance = axios.create({
  timeout: 10000, // 10 seconds timeout
});

// Apply retry logic to the Axios instance
axiosRetry(axiosInstance, { retries: 3 });

async function getData(dto: any) {
  try {
    const res = await axiosInstance.post(
      HOST_ADDRESS + "/Article/GetAllArticlesForArchiveWithPaginate",
      dto,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const ArchivePage = async ({ params }: { params: { slug?: string[] } }) => {
  //
  const archivesId = params.slug ?? [];
  const currentArchiveId = archivesId?.[archivesId.length - 1];
  //
  const data = await getData({
    Id: currentArchiveId ?? null,
    paginetedata: {
      currntpage: 1,
      perpage: 10000,
      skip: 0,
    },
  });
  //
  return (
    <section className="min-h-[60svh] px-3 xxl:container">
      <div className="flex flex-col gap-4 py-4">
        <ArchiveBreadcrumbs id={currentArchiveId} />
        <div className="grid grid-cols-12 gap-4">
          {data?.ItemList?.length
            ? data?.ItemList.map((item: any) => {
                return (
                  <div
                    key={item.Id}
                    className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
                  >
                    {item.ArticleTypeId === 1 ? (
                      <CategoryCard
                        hrefPathname={"/archive/" + item.Id}
                        name={item.Name}
                        latinName={item.LatinName}
                        numberOfChild={item.NumberOfChild}
                      />
                    ) : (
                      <ArticleCard
                        id={item.Id}
                        name={item.Name}
                        summery={item.Summery}
                        authorName={item.AuthorName}
                        uploadDateForOrderby={item.UploadDateforOrderby}
                      />
                    )}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default ArchivePage;
