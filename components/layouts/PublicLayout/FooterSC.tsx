import React, { Suspense } from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import Footer from "@/components/layouts/PublicLayout/Footer";

async function getData() {
  const res = await fetch(HOST_ADDRESS + "/PanelCustomValue/GetFooterContent", {
    method: "POST",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const FooterSC = async () => {
  //
  const data = await getData();
  //
  return (
    <Suspense fallback={<></>}>
      <Footer data={data} />
    </Suspense>
  );
};

export default FooterSC;
