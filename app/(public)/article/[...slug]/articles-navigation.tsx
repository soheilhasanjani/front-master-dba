"use client";

import React, { FC, useState } from "react";
import Tree from "@/components/core/Tree";

interface ArticlesNavigationProps {
  data: any;
}

const ArticlesNavigation: FC<ArticlesNavigationProps> = ({ data }) => {
  //
  const formattedList = data ? (JSON.parse(data) as Array<any>) : [];
  //
  const formatting = (data: any) => {
    if (data?.Childs?.length) {
      return {
        id: data.ID,
        name: data.Name,
        children: data.Childs.map((child: any) => formatting(child)),
      };
    } else {
      return { id: data.ID, name: data.Name };
    }
  };
  //
  const x = formattedList.reduce((value, currentData) => {
    return [...value, formatting(currentData)];
  }, []);
  //
  const [treeState, setTreeState] = useState<Record<string, boolean>>({});
  //
  return <Tree data={x} value={treeState} onChange={setTreeState} />;
};

export default ArticlesNavigation;
