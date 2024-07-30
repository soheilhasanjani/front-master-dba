"use client";

import React, { useEffect } from "react";
import ArticleEditNavigator from "@/components/shared/article-edit-navigator";
import {
  usePostArticleGetArticlesForEdit,
  usePostArticleSave,
} from "@/hooks/apis/articleHookApi";
import Label from "@/components/core/Label";
import Input from "@/components/core/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(1, ""),
  latinName: z.string().min(1, ""),
});

// Define types for form data
type FormData = z.infer<typeof schema>;

//
const DEFAULT_IS_ENABLE = true;
const DEFAULT_IS_DRAFT = true;
//
const ArticleGroupPage = ({ params }: { params: { slug?: string[] } }) => {
  //
  const addOrArticleGroupId = params?.slug?.[0];
  const parentId = params?.slug?.[1];
  //
  const { push } = useRouter();
  const saveArticle = usePostArticleSave();
  const { data: articleData } = usePostArticleGetArticlesForEdit(
    addOrArticleGroupId !== "add"
      ? {
          "ArticleViewModel.Id": addOrArticleGroupId,
        }
      : null,
  );
  //
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      latinName: "",
    },
  });
  //
  const handleOnSubmit = (values: FormData) => {
    //
    const formData = new FormData();
    //
    formData.append(
      "formdata",
      JSON.stringify({
        Id: addOrArticleGroupId !== "add" ? addOrArticleGroupId : 0,
        Article_NextID: null,
        Article_PreID: null,
        Name: values.name,
        LatinName: values.latinName,
        Summery: "",
        IsDraft: DEFAULT_IS_DRAFT,
        IsEnable: DEFAULT_IS_ENABLE,
        TimeToRead: 0,
        IsTempSave: false,
        KeyWords: "",
        ArticleTypeId: "1",
        ParentId: parentId ?? null,
        RefrenceList: "[]",
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
    if (addOrArticleGroupId !== "add" && articleData) {
      setValue("name", articleData.Name);
      setValue("latinName", articleData.LatinName);
    }
  }, [addOrArticleGroupId, articleData]);
  //
  useEffect(() => {
    window.onbeforeunload = function () {
      return "Are you sure you want to leave?";
    };
  }, []);
  //
  return (
    <div className="p-5">
      <ArticleEditNavigator />
      <div className="grid grid-cols-12 gap-4 rounded bg-[#f8f9fa] p-4">
        <div className="col-span-12">
          <Label>عنوان</Label>
          <Input {...register("name")} isError={!!errors?.name} />
        </div>
        <div className="col-span-12">
          <Label>عنوان لاتین</Label>
          <Input {...register("latinName")} isError={!!errors?.latinName} />
        </div>
        <div className="col-span-12 flex justify-end">
          <button
            disabled={saveArticle.isPending}
            type="button"
            onClick={handleSubmit(handleOnSubmit)}
            className="h-10 rounded border border-[#0f70b7] bg-[#0f70b7] px-4 text-xs text-white transition-colors hover:bg-white hover:text-[#0f70b7] disabled:pointer-events-none disabled:border-[#5096c7] disabled:bg-[#5096c7]"
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleGroupPage;
