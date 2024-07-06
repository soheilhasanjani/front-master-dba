import React, { Suspense } from "react";
import Logo from "@/components/layouts/PublicLayout/Logo";
import { HOST_ADDRESS } from "@/configs/baseUrl";

async function getData() {
  const res = await fetch(HOST_ADDRESS + "/PanelCustomValue/GetLogImage", {
    method: "POST",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const LogoSC = async () => {
  //
  const data = await getData();
  //
  return (
    <Suspense fallback={<></>}>
      <Logo data={data} />
    </Suspense>
  );
};

export default LogoSC;
