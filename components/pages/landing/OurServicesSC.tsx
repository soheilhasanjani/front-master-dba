import React from "react";
import OurServices from "@/components/pages/landing/OurServices";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.post(HOST_ADDRESS + "/Product/GetAllProducts");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const OurServicesSC = async () => {
  //
  const data = await getData();
  //
  return <OurServices data={data} />;
};

export default OurServicesSC;
