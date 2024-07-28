"use client";

import Input from "@/components/core/Input";
import Textarea from "@/components/core/Textarea";
import { usePostContentUsSave } from "@/hooks/apis/contentUsHookApi";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

// Define your form schema
const schema = z.object({
  fullName: z.string().min(1, "وارد کردن نام و نام خانوادگی الزامیست !"),
  email: z
    .string()
    .email("لطفا ایمیل صحیح وارد کنید.")
    .min(1, "وارد کردن ایمیل الزامیست !"),
  subject: z.string().min(1, "وارد کردن موضوع الزامیست !"),
  description: z.string().min(1, "وارد کردن توضیحات الزامیست !"),
});

type FormData = z.infer<typeof schema>;

const ContactUsContent = () => {
  //
  const contentUsSave = usePostContentUsSave();
  //
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      description: "",
    },
  });
  //
  const onSubmit: SubmitHandler<FormData> = (data) => {
    //
    contentUsSave.mutate(
      {
        FullName: data.fullName,
        Email: data.email,
        Subject: data.subject,
        Description: data.description,
      },
      {
        onSuccess: (res) => {
          toast.success(res.Message);
          reset();
        },
        onError: (err) => {
          toast.error("خطایی رخ داده است !");
        },
      },
    );
  };
  //
  return (
    <div className="min-h-[60svh] px-3 xxl:container">
      <div className="my-10 grid grid-cols-12 items-center gap-3 rounded bg-[#ededed] p-10">
        <div className="col-span-12 md:col-span-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <header className="pb-4 text-center">
              <h2 className="text-xl font-semibold">تماس با ما</h2>
            </header>
            <div>
              <Input
                placeholder="نام و نام خانوادگی"
                {...register("fullName")}
              />
              <span className="text-red-500">{errors?.fullName?.message}</span>
            </div>
            <div>
              <Input placeholder="ایمیل" {...register("email")} />
              <span className="text-red-500">{errors?.email?.message}</span>
            </div>
            <div>
              <Input placeholder="موضوع" {...register("subject")} />
              <span className="text-red-500">{errors?.subject?.message}</span>
            </div>
            <div>
              <Textarea placeholder="توضیحات" {...register("description")} />
              <span className="text-red-500">
                {errors?.description?.message}
              </span>
            </div>
            <button
              className="h-10 rounded border border-[#0f70b7] bg-[#0f70b7] text-white transition-colors hover:bg-white hover:text-[#0f70b7]"
              type="submit"
            >
              ثبت
            </button>
          </form>
        </div>
        <div className="relative col-span-6 hidden h-full md:block">
          <Image
            fill
            alt=""
            src="/images/undraw-contact.svg"
            className="size-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
