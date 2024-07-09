import React from "react";
import ArchiveBreadcrumbs from "@/app/(public)/archive/[[...slug]]/archive-breadcrumbs";
import CategoryCard from "@/app/(public)/archive/[[...slug]]/category-card";
import ArticleCard from "@/components/pages/landing/ArticleCard";
import { HOST_ADDRESS } from "@/configs/baseUrl";

async function getData(dto: any) {
  const res = await fetch(
    HOST_ADDRESS + "/Article/GetAllArticlesForArchiveWithPaginate",
    {
      method: "POST",
      body: JSON.stringify(dto),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
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
      perpage: 100,
      skip: 0,
    },
  });
  //
  return (
    <section className="px-3 xxl:container">
      <div className="flex flex-col gap-4 py-4">
        <ArchiveBreadcrumbs id={currentArchiveId} archivesId={archivesId} />
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
                        hrefPathname={
                          "/archive/" + archivesId?.join("/") + "/" + item.Id
                        }
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
