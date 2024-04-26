import React from "react";
import Image from "next/image";
import staticFileUrl from "@/utils/staticFileUrl";
import { usePostPanelCustomValueGetLogImage } from "@/hooks/apis/panelCustomValueHookApi";

const Logo = () => {
  //
  const { data: logoSrc } = usePostPanelCustomValueGetLogImage();
  //
  return (
    <>
      {logoSrc && (
        <Image
          width={110}
          height={53}
          src={staticFileUrl(logoSrc)}
          alt="logo"
        />
      )}
    </>
  );
};

export default Logo;
