"use client";

import React from "react";
import { useParams } from "next/navigation";
import { usePostUserGetPublisherProfileData } from "@/hooks/apis/userHookApi";
import { usePostArticleGetAllArticlesOnAuthrId } from "@/hooks/apis/articleHookApi";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/pages/landing/ArticleCard";

const AuthorPage = () => {
  //
  const { slug } = useParams();
  //
  const authorId = slug?.[0];
  //
  const { data: profile } = usePostUserGetPublisherProfileData({
    "userViewModel.ID": authorId,
  });
  const { data: authorArticles } = usePostArticleGetAllArticlesOnAuthrId({
    Id: null,
    AuthorId: authorId,
    paginetedata: { perpage: 9, currntpage: 1, skip: 0 },
  });
  //
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4 my-3">
        <div className="md:col-span-3 mb-2">
          <div className="bg-[#ededed] rounded-lg px-3 py-10 flex items-center flex-col">
            <div className="relative w-[150px] aspect-square overflow-hidden border-4 border-[gray] rounded-full">
              {profile?.ImageUrl ? (
                <Image
                  src={"http://masterdba.ir:8080" + profile.ImageUrl}
                  fill
                  alt="profile-image"
                />
              ) : (
                <Image
                  src="/images/placeholder-author.jpg"
                  fill
                  alt="profile-image"
                />
              )}
            </div>
            <h4 className="text-2xl">{profile?.FullName}</h4>
            <h6>{profile?.Email}</h6>
            <p className="text-center text-xs leading-6">
              {profile?.Description}
            </p>
          </div>
        </div>
        <div className="md:col-span-9 author-articles relative">
          <div className="grid grid-cols-12 gap-4 bg-[#ededed] rounded-lg p-6">
            {authorArticles?.length > 0 ? (
              authorArticles?.map((article) => (
                <div key={article.Id} className="col-span-4">
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
              <span style={{ position: "absolute", top: "190px" }}>
                <p className="text-center bold">
                  برای نویسنده مورد نظر مقاله ای یافت نشد
                </p>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
