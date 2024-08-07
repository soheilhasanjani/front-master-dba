import React from "react";
import Logo from "@/components/layouts/PublicLayout/Logo";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.post(
      HOST_ADDRESS + "/PanelCustomValue/GetLogImagez",
    );
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const LogoSC = async () => {
  //
  const data = await getData();
  console.log(data);
  //
  return <Logo data={data} />;
};

export default LogoSC;
