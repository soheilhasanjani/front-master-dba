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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import RichTextEditor from "@/components/core/RichTextEditor";
import omit from "lodash.omit";
import SectionHead from "@/app/dashboard/section-head";
import staticFileUrl from "@/utils/staticFileUrl";
import InputFileWithPreview from "@/components/core/InputFileWithPreview";

// Define your form schema
const schema = z.object({
  websiteTitle: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  websiteLogo: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  mainPageKeyword: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  mainPageAboutUsTitle: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  mainPageAboutUsText: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  mainPageAboutUsImageUrl: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  footerAboutUsText: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  tel: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  fax: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  enamadCode: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  aboutUsTitle: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  aboutUsText: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
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
    resolver: zodResolver(schema),
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
    formData.append("WebsiteLogo", data.websiteLogo);
    formData.append("MainPageKeyWord", data.mainPageKeyword);
    formData.append("MainPageAboutUsTitle", data.mainPageAboutUsTitle);
    formData.append("MainPageAboutUsText", data.mainPageAboutUsText);
    formData.append("MainPageAboutUsImageUrl", data.mainPageAboutUsImageUrl);
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
      setValue("websiteTitle", data.WebSiteTitle);
      setValue("websiteLogo", data.WebsiteLogoUrl);
      setValue("mainPageKeyword", data.MainPageKeyWord);
      setValue("mainPageAboutUsTitle", data.MainPageAboutUsTitle);
      setValue("mainPageAboutUsText", data.MainPageAboutUsText);
      setValue("mainPageAboutUsImageUrl", data.MainPageAboutUsImageUrl);
      setValue("footerAboutUsText", data.FooterAboutUsText);
      setValue("tel", data.Tel);
      setValue("fax", data.Fax);
      setValue("enamadCode", data.EnamadCode);
      setValue("aboutUsTitle", data.AboutUsTitle);
      setValue("aboutUsText", data.AboutUsText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  //
  const websiteLogo = watch("websiteLogo");
  //
  return (
    <div className="p-5">
      <div className="text-lg font-semibold">تنظیمات</div>

      <div className="mt-5 rounded-lg bg-[#f8f9fa] p-5">
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <div>
            <SectionHead title="تنظیمات سایت" icon={<Bookmark />} />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Label>عنوان سایت</Label>
                <Input {...register("websiteTitle")} />
              </div>
              <div className="col-span-12">
                <Label>لوگو سایت</Label>
                <div className="col-sm-9">
                  <Controller
                    name="websiteLogo"
                    control={control}
                    render={({ field }) => (
                      <InputFileWithPreview
                        {...field}
                        isError={!!errors?.websiteLogo}
                      />
                    )}
                  />
                </div>
                <div className="col-sm-1">
                  {/* <img
                src={WebsiteLogoUrl}
                style={{ width: "110px", cursor: "pointer" }}
                onClick={() => handleShowImageModal(WebsiteLogoUrl)}
              /> */}
                </div>
              </div>
              <div className="col-span-12">
                <Label> کلمات کلیدی صفحه اصلی</Label>
                <div className="col-sm-10">
                  <Input
                    {...register("mainPageKeyword")}
                    placeholder="کلمات را با , جدا کنید"
                  />
                </div>
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
                <div className="col-sm-9">
                  <Input
                    type="file"
                    onChange={(e) => {
                      // setImageFile(e);
                      // setMainPageAboutUsImageUrl(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="col-sm-1">
                  {/* <img
                src={MainPageAboutUsImageUrl}
                style={{ width: "110px", cursor: "pointer" }}
                onClick={() => handleShowImageModal(MainPageAboutUsImageUrl)}
              /> */}
                </div>
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
                {/* <Controller
                  name="aboutUsText"
                  control={control}
                  render={({ field }) => (
                    <RichTextEditor
                      {...omit(field, ["ref"])}
                      isError={!!errors?.aboutUsText}
                    />
                  )}
                /> */}
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
