"use client";

import React from "react";
import { usePostAccountChangePassword } from "@/hooks/apis/accountHookApi";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "react-feather";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Define your form schema
const schema = z
  .object({
    password: z.string().min(1, "وارد کردن رمز عبور الزامیست !"),
    repeatPassword: z.string().min(1, "وارد کردن مجدد رمز عبور الزامیست !"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "باید با رمز عبور مشابه باشد.",
    path: ["repeatPassword"],
  });

type FormData = z.infer<typeof schema>;

const ForgetPasswordPage = ({ params }: { params: { mobile: string } }) => {
  //
  const { push } = useRouter();
  const changePassword = usePostAccountChangePassword();
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });
  //
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    changePassword.mutate(
      {
        Username: params.mobile,
        Password: data.password,
      },
      {
        onSuccess: (res) => {
          if (res.Status == "success") {
            toast.success("تغییرات با موفقیت ثبت شد");
            push("/login");
          } else {
            toast.error(res.Message);
          }
        },
        onError: () => {
          toast.error("خطایی رخ داده است !");
        },
      },
    );
  };
  //
  return (
    <div className="my-10 min-h-[60svh] px-3 xxl:container">
      <div className="flex justify-center">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-96 flex-col gap-6 rounded bg-[#f2f2f2] p-10"
        >
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
            <span className="text-red-500">{errors?.password?.message}</span>
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
            ثبت رمز عبور جدید
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
