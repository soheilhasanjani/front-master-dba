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
    <div className="grid grid-cols-12 gap-4 bg-[#f8f9fa] p-4 rounded">
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
          className="bg-[#0f70b7] border text-xs border-[#0f70b7] disabled:bg-[#5096c7] disabled:border-[#5096c7] disabled:pointer-events-none hover:bg-white px-4 transition-colors h-10 rounded text-white hover:text-[#0f70b7]"
        >
          ثبت
        </button>
      </div>
    </div>
  );
};

export default ArticleGroupSection;
