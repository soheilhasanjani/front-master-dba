import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import ArticleCard from "@/components/pages/landing/ArticleCard";

interface AuthorPostsSCProps {
  authorId: string;
}

async function getData({ authorId }: { authorId: string }) {
  const res = await fetch(HOST_ADDRESS + "/Article/GetAllArticlesOnAuthrId", {
    method: "POST",
    body: JSON.stringify({
      Id: null,
      AuthorId: authorId,
      paginetedata: { perpage: 100, currntpage: 1, skip: 0 },
    }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const AuthorPostsSC: React.FC<AuthorPostsSCProps> = async ({ authorId }) => {
  //
  const data = await getData({ authorId });
  //
  return (
    <div className="grid grid-cols-12 gap-4 rounded-lg bg-[#ededed] p-4">
      {data?.length > 0 ? (
        data?.map((article: any) => (
          <div
            key={article.Id}
            className="col-span-12 sm:col-span-6 md:col-span-4"
          >
            <ArticleCard
              id={article.Id}
              name={article.Name}
              summery={article.Summery}
              authorName={article.AuthorName}
              uploadDateForOrderby={article.UploadDateforOrderby}
            />
          </div>
        ))
      ) : (
        <p className="bold col-span-12 text-center">
          برای نویسنده مورد نظر مقاله ای یافت نشد
        </p>
      )}
    </div>
  );
};

export default AuthorPostsSC;
