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
        <div key={author.ID} className="lg:col-span-3 mb-2">
          <figure className="aspect-square relative rounded border-4 border-[#0f70b7]">
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

            <div className="bg-[linear-gradient(0deg,rgba(0,0,0,.66)_10%,rgba(255,255,255,0)_100%)] w-full h-full absolute start-0 top-0" />

            <figcaption className="absolute bottom-6 px-5 text-center start-1/2 translate-x-1/2 flex flex-col items-center">
              <h2 className="drop-shadow-lg text-white text-lg whitespace-nowrap mb-2">
                {author.FullName}
              </h2>
              <Link
                href={`/authors/${author.ID}/${author.FullName}`}
                className="hover:bg-[#0f70b7] transition border-2 border-[#0f70b7] py-1.5 px-3 w-fit block whitespace-nowrap text-white"
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
