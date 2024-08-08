import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import AuthorCard from "@/app/(public)/authors/author-card";
import { Metadata } from "next";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";
import axios from "axios";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `نویسندگان | ${title}`,
  };
}

async function getData() {
  try {
    const res = await axios.post(HOST_ADDRESS + "/user/GetAllAuthorList");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const AuthorsPage = async () => {
  //
  const data = await getData();
  //
  return (
    <div className="my-4 min-h-[60svh] px-3 xxl:container">
      <div className="grid grid-cols-12 gap-4">
        {data?.map((author: any) => (
          <div
            key={author.ID}
            className="col-span-6 sm:col-span-4 lg:col-span-3"
          >
            <AuthorCard
              id={author.ID}
              fullName={author.FullName}
              imageSrc={
                author.ImageUrl
                  ? "http://masterdba.ir:8080" + author.ImageUrl
                  : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorsPage;
