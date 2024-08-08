import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import ArticleCard from "@/components/pages/landing/ArticleCard";
import axios from "axios";
import axiosRetry from "axios-retry";

interface AuthorPostsSCProps {
  authorId: string;
}

// Create an Axios instance with a timeout and retry logic
const axiosInstance = axios.create({
  timeout: 10000, // 10 seconds timeout
});

// Apply retry logic to the Axios instance
axiosRetry(axiosInstance, { retries: 3 });

async function getData({ authorId }: { authorId: string }) {
  try {
    const res = await axiosInstance.post(
      HOST_ADDRESS + "/Article/GetAllArticlesOnAuthrId",
      {
        Id: null,
        AuthorId: authorId,
        paginetedata: { perpage: 1000000, currntpage: 1, skip: 0 },
      },
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

const AuthorPostsSC: React.FC<AuthorPostsSCProps> = async ({ authorId }) => {
  //
  const data = await getData({ authorId });
  //
  return (
    <div className="grid grid-cols-12 gap-4 rounded-lg bg-[#ededed] p-4">
      {data?.length > 0 ? (
        data
          ?.filter((item: any) => item?.ArticleTypeId === 2)
          ?.map((article: any) => (
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
