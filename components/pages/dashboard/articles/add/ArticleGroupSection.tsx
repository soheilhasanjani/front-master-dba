import React, { useState } from "react";
import Input from "@/components/core/Input";
import Label from "@/components/core/Label";

export type ArticleGroupSectionSubmitValue = {
  articleType: 0;
  name: string;
  latinName: string;
};

type ArticleGroupSectionProps = {
  onSubmit: (value: ArticleGroupSectionSubmitValue) => void;
};

const ArticleGroupSection: React.FC<ArticleGroupSectionProps> = ({
  onSubmit,
}) => {
  //
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  //
  const handleOnSubmit = () => {
    onSubmit({ articleType: 0, name, latinName });
  };
  //
  return (
    <div className="grid grid-cols-12 gap-4 rounded bg-[#f8f9fa] p-4">
      <div className="col-span-12">
        <Label>عنوان</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="col-span-12">
        <Label>عنوان لاتین</Label>
        <Input
          value={latinName}
          onChange={(e) => setLatinName(e.target.value)}
        />
      </div>
      <div className="col-span-12 flex justify-end">
        <button
          disabled={!(name && latinName)}
          type="button"
          onClick={handleOnSubmit}
          className="h-10 rounded border border-[#0f70b7] bg-[#0f70b7] px-4 text-xs text-white transition-colors hover:bg-white hover:text-[#0f70b7] disabled:pointer-events-none disabled:border-[#5096c7] disabled:bg-[#5096c7]"
        >
          ثبت
        </button>
      </div>
    </div>
  );
};

export default ArticleGroupSection;
