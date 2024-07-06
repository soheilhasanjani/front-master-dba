import React, { Suspense } from "react";
import MostVisited from "@/components/pages/landing/MostVisited";
import { HOST_ADDRESS } from "@/configs/baseUrl";

async function getData() {
  const res = await fetch(HOST_ADDRESS + "/Article/GetAllArticlesForMainPage", {
    method: "POST",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MostVisitedSC = async () => {
  //
  const data = await getData();
  //
  return (
    <Suspense fallback={<></>}>
      <MostVisited data={data} />
    </Suspense>
  );
};

export default MostVisitedSC;
