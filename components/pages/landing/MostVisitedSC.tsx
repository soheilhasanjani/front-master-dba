import React from "react";
import MostVisited from "@/components/pages/landing/MostVisited";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.post(
      HOST_ADDRESS + "/Article/GetAllArticlesForMainPage",
    );
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const MostVisitedSC = async () => {
  //
  const data = await getData();
  //
  return <MostVisited data={data} />;
};

export default MostVisitedSC;
