import React, { FC } from "react";
import Image from "next/image";
import staticFileUrl from "@/utils/staticFileUrl";

interface LogoProps {
  data: any;
}

const Logo: FC<LogoProps> = ({ data }) => {
  return (
    <>
      {data && (
        <Image width={110} height={53} src={staticFileUrl(data)} alt="logo" />
      )}
    </>
  );
};

export default Logo;
