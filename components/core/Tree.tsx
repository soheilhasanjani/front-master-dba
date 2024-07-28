import { cn } from "@/utils/cn";
import React, { FC } from "react";
import { ChevronLeft } from "react-feather";

interface TreeItem {
  id: number;
  name: string;
  children?: TreeItem[];
}

interface TreeProps {
  data: Array<TreeItem>;
  value: Array<number>;
  onChange: (value: Array<number>) => void;
  highlighting?: Array<number>;
  onLeafClick: (item: TreeItem) => void;
}

const ctx = React.createContext<{
  value: Array<number>;
  onChange: (value: Array<number>) => void;
  highlighting?: Array<number>;
  onLeafClick: (item: TreeItem) => void;
} | null>(null);

const TreeProvider = ctx.Provider;

const useTree = () => React.useContext(ctx);

const Tree: React.FC<TreeProps> = ({
  data,
  value,
  onChange,
  highlighting,
  onLeafClick,
}) => {
  return (
    <TreeProvider value={{ value, onChange, highlighting, onLeafClick }}>
      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <TreeItem key={item.id} {...item} />
        ))}
      </div>
    </TreeProvider>
  );
};

const TreeItem: FC<TreeItem> = ({ id, name, children }) => {
  const tree = useTree();
  const isExpanded = tree?.value.includes(id);
  const isHighlight = tree?.highlighting?.includes(id);

  const toggleCollapse = () => {
    if (children) {
      if (isExpanded) {
        tree?.onChange(tree?.value.filter((valueId) => valueId !== id));
      } else {
        tree?.onChange([...tree.value, id]);
      }
    } else {
      if (tree?.onLeafClick) tree?.onLeafClick({ id, name });
    }
  };
  return (
    <div className="w-full">
      <button
        onClick={toggleCollapse}
        className={cn(
          "flex w-full items-center justify-between rounded p-2 hover:bg-black/5",
          { "bg-black/10": isExpanded },
          { "bg-primary text-white hover:bg-primary/90": isHighlight },
        )}
      >
        <span className="block truncate" title={name}>
          {name}
        </span>
        {children && (
          <ChevronLeft
            size={"16px"}
            className={cn(
              "transition-transform",
              isExpanded ? "-rotate-90" : "rotate-0",
            )}
          />
        )}
      </button>
      {isExpanded && children && (
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
