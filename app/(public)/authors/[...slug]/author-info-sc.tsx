import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import Image from "next/image";

interface AuthorInfoSCProps {
  authorId: string;
}

async function getData({ authorId }: { authorId: string }) {
  const res = await fetch(
    HOST_ADDRESS + "/user/GetPublisherProfileData?userViewModel.ID=" + authorId,
    {
      method: "POST",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const AuthorInfoSC: React.FC<AuthorInfoSCProps> = async ({ authorId }) => {
  //
  const data = await getData({ authorId });
  //
  return (
    <div className="flex flex-col items-center rounded-lg bg-[#ededed] px-3 py-10">
      <div className="relative aspect-square size-[150px] overflow-hidden rounded-full border-4 border-[gray]">
        {data?.ImageUrl ? (
          <Image
            src={"http://masterdba.ir:8080" + data.ImageUrl}
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
      <h4 className="text-2xl">{data?.FullName}</h4>
      <h6>{data?.Email}</h6>
      <p className="text-center text-xs leading-6">{data?.Description}</p>
    </div>
  );
};

export default AuthorInfoSC;
