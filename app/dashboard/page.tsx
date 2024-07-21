"use client";

import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import Textarea from "@/components/core/Textarea";
import {
  usePostPanelCustomValueGetPanelCustomeValue,
  usePostPanelCustomValueSave,
} from "@/hooks/apis/panelCustomValueHookApi";
import React, { useEffect } from "react";
import { Bookmark } from "react-feather";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import SectionHead from "@/app/dashboard/section-head";
import ImageInput from "@/app/dashboard/image-input";
import TinymceReact from "@/components/core/TinymceReact";

// Define your form schema
const schema = z.object({
  websiteTitle: z.string(),
  websiteLogo: z.union([z.instanceof(File), z.string(), z.null()]),
  mainPageKeyword: z.string(),
  mainPageAboutUsTitle: z.string(),
  mainPageAboutUsText: z.string(),
  mainPageAboutUsImageUrl: z.union([z.instanceof(File), z.string(), z.null()]),
  footerAboutUsText: z.string(),
  tel: z.string(),
  fax: z.string(),
  enamadCode: z.string(),
  aboutUsTitle: z.string(),
  aboutUsText: z.string(),
});

// TypeScript types for form values
type FormData = z.infer<typeof schema>;

const DashboardPage = () => {
  //
  const { data } = usePostPanelCustomValueGetPanelCustomeValue();
  const panelCustomValueSave = usePostPanelCustomValueSave();
  //
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    // resolver: zodResolver(schema),
    defaultValues: {
      websiteTitle: "",
      websiteLogo: "",
      mainPageKeyword: "",
      mainPageAboutUsTitle: "",
      mainPageAboutUsText: "",
      mainPageAboutUsImageUrl: "",
      footerAboutUsText: "",
      tel: "",
      fax: "",
      enamadCode: "",
      aboutUsTitle: "",
      aboutUsText: "",
    },
  });
  //
  const onSubmit: SubmitHandler<FormData> = (data) => {
    //
    const formData = new FormData();
    //
    formData.append("WebSiteTitle", data.websiteTitle);
    formData.append(
      "WebsiteLogo",
      data.websiteLogo instanceof File ? data.websiteLogo : "",
    );
    formData.append("MainPageKeyWord", data.mainPageKeyword);
    formData.append("MainPageAboutUsTitle", data.mainPageAboutUsTitle);
    formData.append("MainPageAboutUsText", data.mainPageAboutUsText);
    formData.append(
      "MainPageAboutUsImageUrl",
      data.mainPageAboutUsImageUrl instanceof File
        ? data.mainPageAboutUsImageUrl
        : "",
    );
    formData.append("FooterAboutUsText", data.footerAboutUsText);
    formData.append("Tel", data.tel);
    formData.append("Fax", data.fax);
    formData.append("EnamadCode", data.enamadCode);
    formData.append("AboutUsTitle", data.aboutUsTitle);
    formData.append("AboutUsText", data.aboutUsText);
    //
    panelCustomValueSave.mutate(formData, {
      onSuccess: () => {
        //
        toast.success("تغییرات با موفقیت ثبت شد");
        //
      },
      onError: () => {
        //
        toast.error("خطایی رخ داده است!");
        //
      },
    });
  };
  //
  useEffect(() => {
    if (data) {
      setValue("websiteTitle", data.WebSiteTitle ?? "");
      setValue("websiteLogo", data.WebsiteLogoUrl ?? "");
      setValue("mainPageKeyword", data.MainPageKeyWord ?? "");
      setValue("mainPageAboutUsTitle", data.MainPageAboutUsTitle ?? "");
      setValue("mainPageAboutUsText", data.MainPageAboutUsText ?? "");
      setValue("mainPageAboutUsImageUrl", data.MainPageAboutUsImageUrl ?? "");
      setValue("footerAboutUsText", data.FooterAboutUsText ?? "");
      setValue("tel", data.Tel ?? "");
      setValue("fax", data.Fax ?? "");
      setValue("enamadCode", data.EnamadCode ?? "");
      setValue("aboutUsTitle", data.AboutUsTitle ?? "");
      setValue("aboutUsText", data.AboutUsText ?? "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  //
  return (
    <div className="p-5">
      <div className="text-lg font-semibold">تنظیمات</div>

      <div className="mt-5 rounded-lg bg-[#f8f9fa] p-5">
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <SectionHead title="تنظیمات سایت" icon={<Bookmark />} />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Label>عنوان سایت</Label>
                <Input {...register("websiteTitle")} />
              </div>
              <div className="col-span-12">
                <Label>لوگو سایت</Label>
                <Controller
                  control={control}
                  name="websiteLogo"
                  render={({ field }) => (
                    <ImageInput
                      value={field.value}
                      onChange={(file) => field.onChange(file)}
                    />
                  )}
                />
              </div>
              <div className="col-span-12">
                <Label> کلمات کلیدی صفحه اصلی</Label>
                <Input
                  {...register("mainPageKeyword")}
                  placeholder="کلمات را با , جدا کنید"
                />
              </div>
            </div>
          </div>

          <div>
            <SectionHead title="صفحه اصلی" icon={<Bookmark />} />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Label>عنوان درباره ما</Label>
                <Input {...register("mainPageAboutUsTitle")} />
              </div>
              <div className="col-span-12">
                <Label>متن درباره ما</Label>
                <Textarea
                  {...register("mainPageAboutUsText")}
                  rows={5}
                  className="resize-y"
                />
              </div>
              <div className="col-span-12">
                <Label>عکس درباره ما</Label>
                <Controller
                  control={control}
                  name="mainPageAboutUsImageUrl"
                  render={({ field }) => (
                    <ImageInput
                      value={field.value}
                      onChange={(file) => field.onChange(file)}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <SectionHead title="فوتر" icon={<Bookmark />} />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Label>متن درباره ما</Label>
                <Textarea
                  rows={5}
                  className="resize-y"
                  {...register("footerAboutUsText")}
                />
              </div>
              <div className="col-span-12">
                <Label>تلفن</Label>
                <Input {...register("tel")} />
              </div>
              <div className="col-span-12">
                <Label>ایمیل</Label>
                <Input {...register("fax")} />
              </div>
              <div className="col-span-12">
                <Label>ای نماد</Label>
                <Input {...register("enamadCode")} />
              </div>
            </div>
          </div>

          <div>
            <SectionHead title="درباره ما" icon={<Bookmark />} />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Label>عنوان درباره ما</Label>
                <Input {...register("aboutUsTitle")} />
              </div>
              <div className="col-span-12">
                <Label>متن درباره ما</Label>
                <Controller
                  name="aboutUsText"
                  control={control}
                  render={({ field }) => (
                    <TinymceReact
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <button className="h-10 rounded bg-[#0f70b7] px-3 text-sm font-medium text-white transition hover:bg-[#0f70b7]/90">
            ثبت
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
