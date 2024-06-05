import AuthorsList from "@/components/pages/authors/AuthorsList";
import React, { Suspense } from "react";

const AuthorsPage = () => {
  return (
    <div className="container my-4">
      <Suspense fallback={<></>}>
        <AuthorsList />
      </Suspense>
    </div>
  );
};

export default AuthorsPage;
