"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePostUserGetAllAuthorList } from "@/hooks/apis/userHookApi";

const AuthorsList = () => {
  //
  const { data: authorsList } = usePostUserGetAllAuthorList();
  //
  console.log(authorsList);
  return (
    <div className="grid grid-cols-12 gap-4">
      {authorsList?.map((author: any) => (
        <div key={author.ID} className="mb-2 lg:col-span-3">
          <figure className="relative aspect-square rounded border-4 border-[#0f70b7]">
            {author.ImageUrl ? (
              <Image
                src={"http://masterdba.ir:8080" + author.ImageUrl}
                alt="author-profile"
                fill
              />
            ) : (
              <Image
                src="/images/placeholder-author.jpg"
                alt="author-profile-placeholder"
                fill
              />
            )}

            <div className="absolute start-0 top-0 h-full w-full bg-[linear-gradient(0deg,rgba(0,0,0,.66)_10%,rgba(255,255,255,0)_100%)]" />

            <figcaption className="absolute bottom-6 start-1/2 flex translate-x-1/2 flex-col items-center px-5 text-center">
              <h2 className="mb-2 whitespace-nowrap text-lg text-white drop-shadow-lg">
                {author.FullName}
              </h2>
              <Link
                href={`/authors/${author.ID}/${author.FullName}`}
                className="block w-fit whitespace-nowrap border-2 border-[#0f70b7] px-3 py-1.5 text-white transition hover:bg-[#0f70b7]"
              >
                مشاهده رزومه
              </Link>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default AuthorsList;
