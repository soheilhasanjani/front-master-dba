import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface AuthorCardProps {
  id: string;
  imageSrc?: string;
  fullName: string;
}

const AuthorCard: FC<AuthorCardProps> = ({ id, imageSrc, fullName }) => {
  return (
    <figure className="relative aspect-square rounded border-4 border-[#0f70b7]">
      {imageSrc ? (
        <Image src={imageSrc} alt="author-profile" fill />
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
          {fullName}
        </h2>
        <Link
          prefetch={false}
          href={`/authors/${id}/${fullName}`}
          className="block w-fit whitespace-nowrap border-2 border-[#0f70b7] px-3 py-1.5 text-white transition hover:bg-[#0f70b7]"
        >
          مشاهده رزومه
        </Link>
      </figcaption>
    </figure>
  );
};

export default AuthorCard;
