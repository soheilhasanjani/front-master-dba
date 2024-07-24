"use client";

import React, { FC, useEffect, useState } from "react";
import Tree from "@/components/core/Tree";

interface ArticlesNavigationProps {
  data: any;
  articleId: number;
}

type TreeNode = {
  id: number;
  name: string;
  children?: TreeNode[];
};

const findParentIds = (dataArray: TreeNode[], id: number): number[] => {
  const searchTree = (data: TreeNode, parentIds: number[] = []): number[] => {
    if (data.id === id) {
      return [...parentIds, data.id];
    }

    if (data.children && data.children.length) {
      for (const child of data.children) {
        const result = searchTree(child, [...parentIds, data.id]);
        if (result.length) {
          return result;
        }
      }
    }

    return [];
  };

  for (const data of dataArray) {
    const result = searchTree(data);
    if (result.length) {
      return result;
    }
  }

  return [];
};

const ArticlesNavigation: FC<ArticlesNavigationProps> = ({
  data,
  articleId,
}) => {
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
  const treeData = formattedList.reduce((value, currentData) => {
    return [...value, formatting(currentData)];
  }, []);
  //
  const [treeState, setTreeState] = useState<Array<number>>([]);
  //
  useEffect(() => {
    if (articleId && Array.isArray(treeData)) {
      setTreeState(findParentIds(treeData, articleId));
    }
  }, []);
  //
  return (
    <Tree
      data={treeData}
      value={treeState}
      onChange={setTreeState}
      highlighting={[articleId]}
    />
  );
};

export default ArticlesNavigation;
