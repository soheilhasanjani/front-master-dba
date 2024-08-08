import React from "react";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import Footer from "@/components/layouts/PublicLayout/Footer";
import axios from "axios";
import axiosRetry from "axios-retry";

// Create an Axios instance with a timeout and retry logic
const axiosInstance = axios.create({
  timeout: 10000, // 10 seconds timeout
});

// Apply retry logic to the Axios instance
axiosRetry(axiosInstance, { retries: 3 });

async function getData() {
  try {
    const res = await axiosInstance.post(
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
