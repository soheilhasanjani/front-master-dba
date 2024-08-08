import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import Footer from "@/components/layouts/PublicLayout/Footer";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.post(
      HOST_ADDRESS + "/PanelCustomValue/GetFooterContent",
    );
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const FooterSC = async () => {
  //
  const data = await getData();
  //
  return <Footer data={data} />;
};

export default FooterSC;
