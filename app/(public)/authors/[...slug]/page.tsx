import React from "react";
import AuthorInfoSC from "@/app/(public)/authors/[...slug]/author-info-sc";
import AuthorPostsSC from "@/app/(public)/authors/[...slug]/author-posts-sc";
import { postPanelCustomValueGetWebSiteTitle } from "@/apis/panelCustomValueApi";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title] = await Promise.all([postPanelCustomValueGetWebSiteTitle()]);

  return {
    title: `نویسندگان | ${title}`,
  };
}

const AuthorPage = ({ params }: { params: { slug: string[] } }) => {
  //
  const { slug } = params;
  const authorId = slug?.[0];
  //
  return (
    <div className="min-h-[60svh] px-3 xxl:container">
      <div className="my-3 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <AuthorInfoSC authorId={authorId} />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <AuthorPostsSC authorId={authorId} />
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
