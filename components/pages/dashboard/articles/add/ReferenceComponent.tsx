import React from "react";
import Input from "@/components/core/Input";
import { Trash2 } from "react-feather";

export type Reference = {
  index: number;
  title: string;
  link: string;
};

type ReferenceComponentProps = {
  value: Array<Reference>;
  onChange: (value: Array<Reference>) => void;
};

const ReferenceComponent: React.FC<ReferenceComponentProps> = ({
  value = [],
  onChange,
}) => {
  //
  const handleInputsItem = (i: number, k: string, v: string) => {
    if (onChange) {
      onChange(
        value.map((item) => {
          if (i === item.index) {
            return { ...item, [k]: v };
          }
          return item;
        })
      );
    }
  };
  //
  const handleAddNewReference = () => {
    if (onChange) {
      onChange([...value, { index: Date.now(), title: "", link: "" }]);
    }
  };
  //
  const handleRemoveReference = (i: number) => {
    if (onChange) {
      onChange(value.filter((item) => item.index !== i));
    }
  };
  //
  return (
    <div>
      {value.map((item, i) => {
        return (
          <div key={item.index} className="flex flex-col gap-2 mb-2">
            <div className="text-[#0f70b7] flex items-center justify-between">
              <div>منبع شماره {i + 1}</div>
              <Trash2
                size="20px"
                className="text-red-500 cursor-pointer"
                onClick={() => handleRemoveReference(item.index)}
              />
            </div>
            <Input
              placeholder="عنوان"
              value={item.title}
              onChange={(e) =>
                handleInputsItem(item.index, "title", e.target.value)
              }
            />
            <Input
              placeholder="لینک"
              value={item.link}
              onChange={(e) =>
                handleInputsItem(item.index, "link", e.target.value)
              }
            />
          </div>
        );
      })}
      <button
        onClick={handleAddNewReference}
        type="button"
        className="bg-[#0f70b7] border border-[#0f70b7] disabled:bg-[#5096c7] w-full disabled:border-[#5096c7] disabled:pointer-events-none hover:bg-white px-4 transition-colors h-10 rounded text-white hover:text-[#0f70b7]"
      >
        افزودن منبع جدید
      </button>
    </div>
  );
};

export default ReferenceComponent;
