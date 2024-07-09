"use client";

import React, { useState } from "react";
import ArticleEditNavigator from "@/components/shared/article-edit-navigator";
import Grid from "@/components/core/Grid";
import Label from "@/components/core/Label";
import Input from "@/components/core/Input";
import Textarea from "@/components/core/Textarea";
import Editor from "@/components/core/TextEditor";
import ReferenceComponent, {
  Reference,
} from "@/components/pages/dashboard/articles/add/ReferenceComponent";
import ArticlesSelect from "@/app/dashboard/articles/article/[[...slug]]/articles-select";
import { usePostArticleSave } from "@/hooks/apis/articleHookApi";
import RichTextEditor from "@/components/core/RichTextEditor";

const ArticlePage = () => {
  //
  const saveArticle = usePostArticleSave();
  //
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [referenceList, setReferenceList] = useState<Array<Reference>>([]);
  const [timeToRead, setTimeToRead] = useState(0);
  const [articleNextID, setArticleNextID] = useState("");
  const [articlePreID, setArticlePreID] = useState("");
  const [summery, setSummery] = useState("");
  //
  const handleOnSubmit = () => {
    //
    const formData = new FormData();
    //
    formData.append(
      "formdata",
      JSON.stringify({
        Id: 0,
        Article_NextID: articleNextID || null,
        Article_PreID: articlePreID || null,
        Name: name,
        LatinName: latinName,
        Summery: summery,
        IsDraft: true,
        IsEnable: true,
        TimeToRead: timeToRead,
        IsTempSave: false,
        // Body: editorRef?.current?.getContent(),
        KeyWords: "",
        ArticleTypeId: "1",
        ParentId: null,
        RefrenceList: "[]",
        //
      }),
    );
    //
    saveArticle.mutate(formData, {
      onSuccess: () => {},
    });
  };
  return (
    <div className="p-5">
      <ArticleEditNavigator />
      <Grid className="gap-4 rounded bg-[#f8f9fa] p-4">
        <div className="col-span-12 flex items-center justify-between border-b pb-4">
          <div className="text-base font-bold">ثبت مقاله جدید</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-10 w-full whitespace-nowrap rounded border border-[#198754] bg-[#198754] px-4 text-white transition-colors hover:bg-white hover:text-[#198754] disabled:pointer-events-none disabled:border-[#53b889] disabled:bg-[#53b889]"
            >
              ثبت نهایی
            </button>
            <button
              type="button"
              className="h-10 w-full whitespace-nowrap rounded border border-[#0f70b7] bg-[#0f70b7] px-4 text-white transition-colors hover:bg-white hover:text-[#0f70b7] disabled:pointer-events-none disabled:border-[#5096c7] disabled:bg-[#5096c7]"
            >
              ثبت موقت
            </button>
          </div>
        </div>
        <div className="col-span-6">
          <Label>عنوان</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-span-6">
          <Label>عنوان لاتین</Label>
          <Input
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </div>
        <div className="col-span-4">
          <Label>مدت زمان مطالعه</Label>
          <Input
            type="number"
            value={timeToRead}
            onChange={(e) => setTimeToRead(+e.target.value)}
            placeholder="مقدار وارد شده براساس دقیقه می باشد"
          />
        </div>
        <div className="col-span-4">
          <Label>مقاله قبلی</Label>
          <ArticlesSelect
            placeholder="در صورت نیاز مقاله ای را انتخاب کنید"
            value={articlePreID}
            onChange={(value) => setArticlePreID(value)}
          />
        </div>
        <div className="col-span-4">
          <Label>مقاله بعدی</Label>
          <ArticlesSelect
            placeholder="در صورت نیاز مقاله ای را انتخاب کنید"
            value={articleNextID}
            onChange={(value) => setArticleNextID(value)}
          />
        </div>
        <div className="col-span-12">
          <Label>خلاصه</Label>
          <Textarea
            rows={8}
            value={summery}
            onChange={(e) => setSummery(e.target.value)}
          />
        </div>
        <div className="col-span-12">
          <Label>متن</Label>
          {/* <Editor
          // value={name} onChange={(e) => setName(e.target.value)}
          /> */}
          <RichTextEditor />
        </div>
        <div className="col-span-12">
          <Label>کلمات کلیدی</Label>
          <Textarea
            rows={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="کلمات کلیدی را با ویرگول (,) جدا نمایید"
          />
        </div>
        <div className="col-span-12">
          <Label className="mb-2">منابع</Label>
          <ReferenceComponent
            value={referenceList}
            onChange={(value) => setReferenceList(value)}
          />
        </div>
      </Grid>
    </div>
  );
};

export default ArticlePage;
