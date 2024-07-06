import React, { useState } from "react";
import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import { usePostArticleSave } from "@/hooks/apis/articleHookApi";

const ArticleGroupSection = () => {
  //
  const saveArticle = usePostArticleSave();
  //
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  //
  const handleOnSubmit = () => {
    //
    const formData = new FormData();
    //
    formData.append(
      "formdata",
      JSON.stringify({
        Id: 0,
        Article_NextID: null,
        Article_PreID: null,
        Name: name,
        LatinName: latinName,
        Summery: "",
        IsDraft: true,
        IsEnable: true,
        TimeToRead: 0,
        IsTempSave: false,
        KeyWords: "",
        ArticleTypeId: "1",
        ParentId: null,
        RefrenceList: "[]",
      }),
    );
    //
    saveArticle.mutate(formData, {
      onSuccess: () => {},
    });
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
