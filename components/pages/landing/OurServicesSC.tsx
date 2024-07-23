import React, { Suspense } from "react";
import OurServices from "@/components/pages/landing/OurServices";
import { HOST_ADDRESS } from "@/configs/baseUrl";

async function getData() {
  const res = await fetch(HOST_ADDRESS + "/Product/GetAllProducts", {
    method: "POST",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const OurServicesSC = async () => {
  //
  const data = await getData();
  //
  return (
    <Suspense fallback={<></>}>
      <OurServices data={data} />
    </Suspense>
  );
};

export default OurServicesSC;
