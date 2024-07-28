"use client";

import { postAccountVerifyCaptchaResponse } from "@/apis/accountApi";
import VerifyCodeDialog from "@/app/(public)/register/verify-code-dialog";
import { usePostAccountRegister } from "@/hooks/apis/accountHookApi";
import useRecaptcha from "@/hooks/useRecaptcha";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { Lock, Phone, User } from "react-feather";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

// Define your form schema
const schema = z
  .object({
    firstName: z.string().min(1, "وارد کردن نام الزامیست !"),
    mobile: z.string().min(1, "وارد کردن موبایل الزامیست !"),
    password: z.string().min(1, "وارد کردن رمز عبور الزامیست !"),
    repeatPassword: z.string().min(1, "وارد کردن مجدد رمز عبور الزامیست !"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "باید با رمز عبور مشابه باشد.",
    path: ["repeatPassword"],
  });

type FormData = z.infer<typeof schema>;

const RegisterContent = () => {
  //
  const [isOpenVerifyCodeDialog, setIsOpenVerifyCodeDialog] = useState(false);
  //
  const { getCaptchaToken } = useRecaptcha();
  const accountRegister = usePostAccountRegister();
  //
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      mobile: "",
      password: "",
      repeatPassword: "",
    },
  });
  //
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    //
    try {
      const captchaToken = await getCaptchaToken();
      const verifyCaptcha = await postAccountVerifyCaptchaResponse({
        CaptchaToken: captchaToken as string,
      });
      if (verifyCaptcha.Success === true && verifyCaptcha.score >= 0.6) {
        accountRegister.mutate(
          {
            FName: data.firstName,
            Mobile: data.mobile,
            Password: data.password,
            RepeatPassword: data.repeatPassword,
          },
          {
            onSuccess: (res) => {
              if (res.Status == "success") {
                toast.success("پیامکی حاوی کد تایید برای شما ارسال گردید");
                setIsOpenVerifyCodeDialog(true);
              } else {
                toast.error(res.Message);
              }
            },
            onError: () => {
              toast.error("خطایی رخ داده است !");
            },
          },
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //
  const mobile = watch("mobile");
  //
  return (
    <>
      <VerifyCodeDialog
        username={mobile.substring(1)}
        open={isOpenVerifyCodeDialog}
        onOpenChange={setIsOpenVerifyCodeDialog}
      />
      <div className="min-h-[60svh] px-3 xxl:container">
        <div className="my-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <div className="h-full bg-[#f2f2f2] py-10">
              <header className="pb-4 text-center">
                <h2 className="text-2xl font-bold">عضویت به سایت</h2>
              </header>
              <div className="mx-auto w-3/4">
                <form
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <div className="flex h-10 items-center gap-2.5 rounded border px-2.5 text-sm">
                      <User color="rgb(39 103 169)" />
                      <input
                        className="h-full flex-grow bg-transparent outline-none"
                        autoComplete="false"
                        type="text"
                        placeholder="نام و نام خانوادگی "
                        {...register("firstName")}
                      />
                    </div>
                    <span className="text-red-500">
                      {errors?.firstName?.message}
                    </span>
                  </div>

                  <div>
                    <div className="flex h-10 items-center gap-2.5 rounded border px-2.5 text-sm">
                      <Phone color="rgb(39 103 169)" />
                      <input
                        className="h-full flex-grow bg-transparent outline-none"
                        autoComplete="false"
                        type="text"
                        placeholder="شماره موبایل "
                        {...register("mobile")}
                      />
                    </div>
                    <span className="text-red-500">
                      {errors?.mobile?.message}
                    </span>
                  </div>

                  <div>
                    <div className="flex h-10 items-center gap-2.5 rounded border px-2.5 text-sm">
                      <Lock color="rgb(39 103 169)" />
                      <input
                        className="h-full flex-grow bg-transparent outline-none"
                        autoComplete="false"
                        type="password"
                        placeholder="رمز عبور "
                        {...register("password")}
                      />
                    </div>
                    <span className="text-red-500">
                      {errors?.password?.message}
                    </span>
                  </div>

                  <div>
                    <div className="flex h-10 items-center gap-2.5 rounded border px-2.5 text-sm">
                      <Lock color="rgb(39 103 169)" />
                      <input
                        className="h-full flex-grow bg-transparent outline-none"
                        autoComplete="false"
                        type="password"
                        placeholder="تکرار رمز عبور "
                        {...register("repeatPassword")}
                      />
                    </div>
                    <span className="text-red-500">
                      {errors?.repeatPassword?.message}
                    </span>
                  </div>

                  <button className="h-10 rounded border border-[#0f70b7] bg-[#0f70b7] text-white transition-colors hover:bg-white hover:text-[#0f70b7]">
                    عضویت به سایت
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden place-items-center bg-[#0f70b7] px-3 py-10 md:col-span-4 md:grid">
            <div className="flex h-fit flex-col items-center text-center text-white">
              <span className="mb-5 rounded-full border border-[#c6c6c6] p-3">
                <User size={50} />
              </span>
              <h3 className="pb-2 text-xl font-bold">
                ایجاد حساب کاربری در سایت DBA
              </h3>
              <p className="pb-2">
                به سادگی با کلیک بر روی دکمه ورود به حساب کاربری خود وارد شوید
              </p>
              <Link href="/login">
                <span className="block rounded border border-white px-3 py-2">
                  ورود
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterContent;
