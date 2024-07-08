import { cn } from "@/utils/cn";
import React, { FC } from "react";
import { ChevronLeft } from "react-feather";

interface TreeItem {
  id: string;
  name: string;
  children?: TreeItem[];
  mainItem?: boolean;
}

interface TreeProps {
  data: Array<TreeItem>;
  value: Record<string, boolean>;
  onChange: (value: Record<string, boolean>) => void;
}

const ctx = React.createContext<{
  value: Record<string, boolean>;
  onChange: (value: Record<string, boolean>) => void;
} | null>(null);

const TreeProvider = ctx.Provider;

const useTree = () => React.useContext(ctx);

const Tree: React.FC<TreeProps> = ({ data, value, onChange }) => {
  return (
    <TreeProvider value={{ value, onChange }}>
      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <TreeItem key={item.id} {...item} mainItem />
        ))}
      </div>
    </TreeProvider>
  );
};

const TreeItem: FC<TreeItem> = ({ id, name, children, mainItem }) => {
  const tree = useTree();

  const isCollapsed = tree?.value[id] ?? true;

  const toggleCollapse = () => {
    if (children) tree?.onChange({ ...tree?.value, [id]: !isCollapsed });
  };
  return (
    <div className="w-full">
      <button
        onClick={toggleCollapse}
        className={cn(
          "flex w-full items-center justify-between rounded p-2 hover:bg-black/5",
          { "bg-black/10": !isCollapsed },
          { "": !mainItem },
        )}
      >
        <span className="block truncate">{name}</span>
        {children && (
          <ChevronLeft
            size={"16px"}
            className={cn(
              "transition-transform",
              !isCollapsed ? "-rotate-90" : "rotate-0",
            )}
          />
        )}
      </button>
      {!isCollapsed && children && (
        <div className="ms-2 mt-2 flex flex-col gap-2 border-s border-dashed ps-2">
          {children.map((child) => (
            <TreeItem key={child.id} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tree;
