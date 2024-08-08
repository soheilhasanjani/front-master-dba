import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import Image from "next/image";
import axios from "axios";
import axiosRetry from "axios-retry";

interface AuthorInfoSCProps {
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
      HOST_ADDRESS +
        "/user/GetPublisherProfileData?userViewModel.ID=" +
        authorId,
    );
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const AuthorInfoSC: React.FC<AuthorInfoSCProps> = async ({ authorId }) => {
  //
  const data = await getData({ authorId });
  //
  return (
    <div className="sticky top-4 flex flex-col items-center rounded-lg bg-[#ededed] px-3 py-10">
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
