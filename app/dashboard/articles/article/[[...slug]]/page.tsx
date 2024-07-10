"use client";

import React, { useState } from "react";
import ArticleEditNavigator from "@/components/shared/article-edit-navigator";
import Grid from "@/components/core/Grid";
import Label from "@/components/core/Label";
import Input from "@/components/core/Input";
import Textarea from "@/components/core/Textarea";
import ArticlesSelect from "@/app/dashboard/articles/article/[[...slug]]/articles-select";
import { usePostArticleSave } from "@/hooks/apis/articleHookApi";
import RichTextEditor from "@/components/core/RichTextEditor";
import References from "@/app/dashboard/articles/article/[[...slug]]/references";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  articleNextID: z.string(),
  articlePreID: z.string(),
  name: z.string().min(1, ""),
  latinName: z.string().min(1, ""),
  summery: z.string().min(1, ""),
  timeToRead: z.number().gt(5),
  body: z.string().min(1, ""),
  keywords: z.string(),
  referenceList: z.array(
    z.object({ id: z.number(), title: z.string(), link: z.string() }),
  ),
});

// Define types for form data
type FormData = z.infer<typeof schema>;

const ArticlePage = () => {
  //
  const saveArticle = usePostArticleSave();
  //
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      articleNextID: "",
      articlePreID: "",
      name: "",
      latinName: "",
      summery: "",
      timeToRead: 0,
      body: "",
      keywords: "",
      referenceList: [],
    },
  });
  //
  const [isDraft, setIsDraft] = useState(true);
  const [isEnable, setIsEnable] = useState(true);
  const [parentId, setParentId] = useState(null);
  //
  const handleOnSubmit = (values: FormData, isTempSave: boolean) => {
    //
    const formData = new FormData();
    //
    formData.append(
      "formdata",
      JSON.stringify({
        Id: 0,
        // for article
        ArticleTypeId: "2",
        IsTempSave: isTempSave,
        // fill from states
        IsDraft: isDraft,
        IsEnable: isEnable,
        ParentId: parentId,
        Article_NextID: values.articleNextID || null,
        Article_PreID: values.articlePreID || null,
        Name: values.name,
        LatinName: values.latinName,
        Summery: values.summery,
        TimeToRead: values.timeToRead,
        Body: values.body,
        KeyWords: values.keywords,
        RefrenceList: JSON.stringify(values.referenceList),
        //
      }),
    );
    //
    // saveArticle.mutate(formData, {
    //   onSuccess: () => {},
    // });
  };
  //
  return (
    <form className="p-5">
      <ArticleEditNavigator />
      <Grid className="gap-4 rounded bg-[#f8f9fa] p-4">
        <div className="col-span-12 flex items-center justify-between border-b pb-4">
          <div className="text-base font-bold">ثبت مقاله جدید</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                handleSubmit((values) => handleOnSubmit(values, false))()
              }
              type="button"
              className="h-10 w-full whitespace-nowrap rounded border border-[#198754] bg-[#198754] px-4 text-white transition-colors hover:bg-white hover:text-[#198754] disabled:pointer-events-none disabled:border-[#53b889] disabled:bg-[#53b889]"
            >
              ثبت نهایی
            </button>
            <button
              onClick={() =>
                handleSubmit((values) => handleOnSubmit(values, true))()
              }
              type="button"
              className="h-10 w-full whitespace-nowrap rounded border border-[#0f70b7] bg-[#0f70b7] px-4 text-white transition-colors hover:bg-white hover:text-[#0f70b7] disabled:pointer-events-none disabled:border-[#5096c7] disabled:bg-[#5096c7]"
            >
              ثبت موقت
            </button>
          </div>
        </div>
        <div className="col-span-6">
          <Label>عنوان</Label>
          <Input {...register("name")} />
        </div>
        <div className="col-span-6">
          <Label>عنوان لاتین</Label>
          <Input {...register("latinName")} />
        </div>
        <div className="col-span-4">
          <Label>مدت زمان مطالعه</Label>
          <Input
            type="number"
            placeholder="مقدار وارد شده براساس دقیقه می باشد"
            {...register("timeToRead", { valueAsNumber: true })}
          />
        </div>
        <div className="col-span-4">
          <Label>مقاله قبلی</Label>
          <Controller
            name="articlePreID"
            control={control}
            render={({ field }) => (
              <ArticlesSelect
                {...field}
                placeholder="در صورت نیاز مقاله ای را انتخاب کنید"
              />
            )}
          />
        </div>
        <div className="col-span-4">
          <Label>مقاله بعدی</Label>
          <Controller
            name="articleNextID"
            control={control}
            render={({ field }) => (
              <ArticlesSelect
                {...field}
                placeholder="در صورت نیاز مقاله ای را انتخاب کنید"
              />
            )}
          />
        </div>
        <div className="col-span-12">
          <Label>خلاصه</Label>
          <Textarea rows={8} {...register("summery")} />
        </div>
        <div className="col-span-12">
          <Label>متن</Label>
          <Controller
            name="body"
            control={control}
            render={({ field }) => <RichTextEditor {...field} />}
          />
        </div>
        <div className="col-span-12">
          <Label>کلمات کلیدی</Label>
          <Textarea
            rows={2}
            placeholder="کلمات کلیدی را با ویرگول (,) جدا نمایید"
            {...register("keywords")}
          />
        </div>
        <div className="col-span-12">
          <Label className="mb-2">منابع</Label>
          <Controller
            name="referenceList"
            control={control}
            render={({ field }) => (
              <References
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
        </div>
      </Grid>
    </form>
  );
};

export default ArticlePage;
