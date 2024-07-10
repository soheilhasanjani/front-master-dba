import React from "react";
import Input from "@/components/core/Input";
import { Trash2 } from "react-feather";

export type Reference = {
  id: number;
  title: string;
  link: string;
};

interface ReferencesProps {
  value: Array<Reference>;
  onChange: (e: {
    target: {
      value: Array<Reference>;
    };
  }) => void;
}

const References: React.FC<ReferencesProps> = ({ value = [], onChange }) => {
  //
  const handleInputsItem = (id: number, k: string, v: string) => {
    if (onChange) {
      onChange({
        target: {
          value: value.map((item) => {
            if (id === item.id) {
              return { ...item, [k]: v };
            }
            return item;
          }),
        },
      });
    }
  };
  //
  const handleAddNewReference = () => {
    if (onChange) {
      onChange({
        target: {
          value: [...value, { id: Date.now(), title: "", link: "" }],
        },
      });
    }
  };
  //
  const handleRemoveReference = (id: number) => {
    if (onChange) {
      onChange({
        target: {
          value: value.filter((item) => item.id !== id),
        },
      });
    }
  };
  //
  return (
    <div className="flex flex-col gap-2">
      {value.map((item) => {
        return (
          <div key={item.id} className="flex items-center gap-2">
            <Input
              placeholder="عنوان"
              value={item.title}
              onChange={(e) =>
                handleInputsItem(item.id, "title", e.target.value)
              }
            />
            <Input
              placeholder="لینک"
              value={item.link}
              onChange={(e) =>
                handleInputsItem(item.id, "link", e.target.value)
              }
            />
            <Trash2
              size="20px"
              className="flex-shrink-0 cursor-pointer text-red-500"
              onClick={() => handleRemoveReference(item.id)}
            />
          </div>
        );
      })}
      <button
        onClick={handleAddNewReference}
        type="button"
        className="h-10 w-full rounded border border-[#0f70b7] bg-[#0f70b7] px-4 text-white transition-colors hover:bg-white hover:text-[#0f70b7] disabled:pointer-events-none disabled:border-[#5096c7] disabled:bg-[#5096c7]"
      >
        افزودن منبع جدید
      </button>
    </div>
  );
};

export default References;
