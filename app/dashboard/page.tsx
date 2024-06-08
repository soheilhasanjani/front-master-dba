"use client";

import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import Textarea from "@/components/core/Textarea";
import { usePostPanelCustomValueGetPanelCustomeValue } from "@/hooks/apis/panelCustomValueHookApi";
import React, { useEffect } from "react";
import { Bookmark } from "react-feather";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define your form schema
const schema = z.object({
  WebSiteTitle: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  MainPageKeyWord: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  MainPageAboutUsTitle: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  MainPageAboutUsText: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  FooterAboutUsText: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  Tel: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  Fax: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  EnamadCode: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
});

// TypeScript types for form values
type FormData = z.infer<typeof schema>;

const DashboardPage = () => {
  //
  const { data } = usePostPanelCustomValueGetPanelCustomeValue();
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      WebSiteTitle: "",
      MainPageKeyWord: "",
      MainPageAboutUsTitle: "",
      MainPageAboutUsText: "",
      FooterAboutUsText: "",
      Tel: "",
      Fax: "",
      EnamadCode: "",
    },
  });
  //
  const onSubmit: SubmitHandler<FormData> = (data) => {};
  //
  useEffect(() => {
    if (data) {
      setValue("WebSiteTitle", data.WebSiteTitle);
      setValue("MainPageKeyWord", data.MainPageKeyWord);
      setValue("MainPageAboutUsTitle", data.MainPageAboutUsTitle);
      setValue("MainPageAboutUsText", data.MainPageAboutUsText);
      setValue("FooterAboutUsText", data.FooterAboutUsText);
      setValue("Tel", data.Tel);
      setValue("Fax", data.Fax);
      setValue("EnamadCode", data.EnamadCode);
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
          <div className="">
            <div className="mb-3 flex items-center gap-2 border-b pb-3">
              <Bookmark />
              <h6>تنظیمات سایت</h6>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Label>عنوان سایت</Label>
                <Input {...register("WebSiteTitle")} />
              </div>
              <div className="col-span-12">
                <Label>لوگو سایت</Label>
                <div className="col-sm-9">
                  <Input
                    type="file"
                    onChange={(e) => {
                      // setImageFile(e);
                      // setWebsiteLogo(e.target.files[0]);
                    }}
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
                    {...register("MainPageKeyWord")}
                    placeholder="کلمات را با , جدا کنید"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="mb-3 flex items-center gap-2 border-b pb-3">
              <Bookmark />
              <h6>صفحه اصلی</h6>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Label>عنوان درباره ما</Label>
                <Input {...register("MainPageAboutUsTitle")} />
              </div>
              <div className="col-span-12">
                <Label>متن درباره ما</Label>
                <Textarea
                  {...register("MainPageAboutUsText")}
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

          <div className="">
            <div className="mb-3 flex items-center gap-2 border-b pb-3">
              <Bookmark />
              <h6>فوتر</h6>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Label>متن درباره ما</Label>
                <Textarea
                  rows={5}
                  className="resize-y"
                  {...register("FooterAboutUsText")}
                />
              </div>
              <div className="col-span-12">
                <Label>تلفن</Label>
                <Input {...register("Tel")} />
              </div>
              <div className="col-span-12">
                <Label>ایمیل</Label>
                <Input {...register("Fax")} />
              </div>
              <div className="col-span-12">
                <Label>ای نماد</Label>
                <Input {...register("EnamadCode")} />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 border-b pb-3">
              <Bookmark />
              <h6>درباره ما</h6>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <Label>عنوان درباره ما</Label>
                <Input
                // value={AboutUsTitle}
                // onChange={(e) => setAboutUsTitle(e.target.value)}
                />
              </div>

              <div className="col-span-12">
                <Label>متن درباره ما</Label>
                {/* <Editor
                tinymceScriptSrc={
                  process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                }
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={AboutUsText}
                init={{
                  height: 600,
                  menubar: true,
                  directionality: "rtl",
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "imagetools",
                    "charmap",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "codesample",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "preview",
                    "help",
                    "wordcount",
                    "emoticons",
                    "quickbars",
                    "pagebreak",
                    "nonbreaking",
                    "searchreplace ",
                    "directionality",
                    "textcolor colorpicker",
                    "print",
                  ],
                  toolbar:
                    "undo redo | bold italic underline strikethrough |formats blocks fontsize|" +
                    "alignleft aligncenter alignright justify alignjustify  " +
                    "pagebreak nonbreaking searchreplace| bullist numlist outdent indent | " +
                    "removeformat forecolor| codesample |table image media link emoticons |preview fullscreen " +
                    "styleselect ltr rtl forecolor backcolor print ",

                  quickbars_image_toolbar: true,
                  quickbars_image_toolbar:
                    "alignleft aligncenter alignright rotateleft rotateright | flipv fliph | editimage imageoptions ",
                  quickbars_selection_toolbar:
                    "bold italic | quicklink blockquote",
                  quickbars_insert_toolbar:
                    "quickimage quicktable | hr pagebreak",
                  advlist_bullet_styles: "square",
                  a11y_advanced_options: true,
                  image_title: true,
                  codesample_global_prismjs: true,
                  forced_root_block: "div",
                  images_file_types: "jpg,png,jpeg,sql,pdf,docx",
                  file_picker_types: "file image media",
                  images_upload_handler: handleImageUpload,
                  codesample_languages: [
                    { text: "Python", value: "python" },
                    { text: "HTML/XML", value: "markup" },
                    { text: "CSS", value: "css" },
                    { text: "JavaScript", value: "javascript" },
                    { text: "C#", value: "csharp" },
                    { text: "SQL", value: "sql" },
                  ],
                  content_style:
                    "@font-face {" +
                    'font-family: "IranSanse";' +
                    'src: url("../fonts/BYekan-webfont.eot") format("eot"),' +
                    'url("../fonts/BYekan-webfont.woff") format("woff"),' +
                    'url("../fonts/BYekan-webfont.ttf") format("truetype");' +
                    'url("../fonts/IRANSansWeb.woff2") format("woff")' +
                    "};" +
                    "body { font-family:IranSanse; font-size:14px }",
                }}
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
