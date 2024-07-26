"use client";

import React, { useEffect } from "react";
import ArticleEditNavigator from "@/components/shared/article-edit-navigator";
import Grid from "@/components/core/Grid";
import Label from "@/components/core/Label";
import Input from "@/components/core/Input";
import Textarea from "@/components/core/Textarea";
import ArticlesSelect from "@/app/dashboard/articles/article/[[...slug]]/articles-select";
import {
  usePostArticleGetArticlesForEdit,
  usePostArticleSave,
} from "@/hooks/apis/articleHookApi";
import References from "@/app/dashboard/articles/article/[[...slug]]/references";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TinymceReact from "@/components/core/TinymceReact";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
    z.object({ Index: z.number(), Title: z.string(), Link: z.string() }),
  ),
});

// Define types for form data
type FormData = z.infer<typeof schema>;

//
const DEFAULT_IS_ENABLE = true;
const DEFAULT_IS_DRAFT = true;
//
const ArticlePage = ({ params }: { params: { slug?: string[] } }) => {
  //
  const addOrArticleId = params?.slug?.[0];
  const parentId = params?.slug?.[1];
  //
  const { push } = useRouter();
  const saveArticle = usePostArticleSave();
  const { data: articleData } = usePostArticleGetArticlesForEdit(
    addOrArticleId !== "add"
      ? {
          "ArticleViewModel.Id": addOrArticleId,
        }
      : null,
  );
  //
  const {
    control,
    register,
    handleSubmit,
    setValue,
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
  const handleOnSubmit = (values: FormData, isTempSave: boolean) => {
    //
    const formData = new FormData();
    //
    formData.append(
      "formdata",
      JSON.stringify({
        Id: addOrArticleId !== "add" ? addOrArticleId : 0,
        // for article
        ArticleTypeId: "2",
        IsTempSave: isTempSave,
        // fill from states
        IsDraft: articleData?.isDraft ?? DEFAULT_IS_DRAFT,
        IsEnable: articleData?.isEnable ?? DEFAULT_IS_ENABLE,
        ParentId: parentId ?? null,
        Article_NextID: +values.articleNextID || null,
        Article_PreID: +values.articlePreID || null,
        Name: values.name,
        LatinName: values.latinName,
        Summery: values.summery,
        TimeToRead: values.timeToRead,
        Body: values.body,
        KeyWords: values.keywords,
        RefrenceList: JSON.stringify(
          values.referenceList.filter((r) => r.Link || r.Title),
        ),
        //
      }),
    );
    //
    saveArticle.mutate(formData, {
      onSuccess: () => {
        toast.success("با موفقیت ثبت گردید.");
        push("/dashboard/articles/");
      },
      onError: () => {
        toast.error("خطایی رخ داده است.");
      },
    });
  };
  //
  useEffect(() => {
    if (addOrArticleId !== "add" && articleData) {
      setValue(
        "articleNextID",
        articleData.Article_NextID ? String(articleData.Article_NextID) : "",
      );
      setValue(
        "articlePreID",
        articleData.Article_PreID ? String(articleData.Article_PreID) : "",
      );
      setValue("name", articleData.Name);
      setValue("latinName", articleData.LatinName);
      setValue("summery", articleData.Summery);
      setValue("timeToRead", articleData.TimeToRead);
      setValue("body", articleData.Body);
      setValue("keywords", articleData.KeyWords);
      setValue("referenceList", JSON.parse(articleData.Refrences));
    }
  }, [addOrArticleId, articleData]);
  //
  return (
    <form className="p-5">
      <ArticleEditNavigator />
      <Grid className="gap-4 rounded bg-[#f8f9fa] p-4">
        <div className="col-span-12 flex items-center justify-between border-b pb-4">
          <div className="text-base font-bold">ثبت مقاله جدید</div>
          <div className="flex items-center gap-2">
            <button
              disabled={saveArticle.isPending}
              onClick={() =>
                handleSubmit((values) => handleOnSubmit(values, false))()
              }
              type="button"
              className="h-10 w-full whitespace-nowrap rounded border border-[#198754] bg-[#198754] px-4 text-white transition-colors hover:bg-white hover:text-[#198754] disabled:pointer-events-none disabled:border-[#53b889] disabled:bg-[#53b889]"
            >
              ثبت نهایی
            </button>
            <button
              disabled={saveArticle.isPending}
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
          <Input {...register("name")} isError={!!errors?.name} />
        </div>
        <div className="col-span-6">
          <Label>عنوان لاتین</Label>
          <Input {...register("latinName")} isError={!!errors?.latinName} />
        </div>
        <div className="col-span-4">
          <Label>مدت زمان مطالعه</Label>
          <Input
            type="number"
            placeholder="مقدار وارد شده براساس دقیقه می باشد"
            {...register("timeToRead", { valueAsNumber: true })}
            isError={!!errors?.timeToRead}
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
                parentId={parentId}
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
                parentId={parentId}
                placeholder="در صورت نیاز مقاله ای را انتخاب کنید"
              />
            )}
          />
        </div>
        <div className="col-span-12">
          <Label>خلاصه</Label>
          <Textarea
            rows={8}
            {...register("summery")}
            isError={!!errors?.summery}
          />
        </div>
        <div className="col-span-12">
          <Label>متن</Label>
          <Controller
            name="body"
            control={control}
            render={({ field }) => (
              <TinymceReact
                value={field.value}
                onChange={(value) => field.onChange(value)}
              />
            )}
          />
        </div>
        <div className="col-span-12">
          <Label>کلمات کلیدی</Label>
          <Textarea
            rows={2}
            placeholder="کلمات کلیدی را با ویرگول (,) جدا نمایید"
            {...register("keywords")}
            isError={!!errors?.keywords}
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
