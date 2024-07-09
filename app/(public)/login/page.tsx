"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Eye, EyeOff, Lock, User } from "react-feather";
import { z } from "zod";
import { usePostLogin } from "@/hooks/apis/authHookApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setIsLogin } from "@/redux/authSlice";
import Cookies from "js-cookie";

// Define your form schema
const schema = z.object({
  username: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  password: z.string().min(1, "وارد کردن رمز عبور الزامیست !"),
});

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  //
  const dispatch = useAppDispatch();
  //
  const { push } = useRouter();
  //
  const [isHidePassword, setIsHidePassword] = useState(true);
  //
  const login = usePostLogin();
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  //
  const onSubmit: SubmitHandler<FormData> = (data) => {
    //
    const querystring = new URLSearchParams();
    querystring.append("grant_type", "password");
    querystring.append("username", data.username);
    querystring.append("password", data.password);
    //
    login.mutate(querystring, {
      onSuccess: (res) => {
        dispatch(setIsLogin(true));
        Cookies.set("TOKEN", res.access_token);
        push("/");
        toast.success("با موفقیت وارد شدید !");
      },
      onError: () => {
        toast.error("خطایی رخ داده است !");
      },
    });
  };
  //
  return (
    <div className="px-3 xxl:container">
      <div className="my-10 grid grid-cols-12 overflow-hidden rounded">
        <div className="col-span-12 md:col-span-8">
          <div className="h-full bg-[#f2f2f2] py-10">
            <header className="pb-4 text-center">
              <h2 className="text-2xl font-bold">ورود به سایت</h2>
            </header>
            <div className="mx-auto w-3/4">
              <form
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
                      placeholder="نام کاربری"
                      {...register("username")}
                    />
                  </div>
                  <span className="text-red-500">
                    {errors?.username?.message}
                  </span>
                </div>

                <div>
                  <div className="flex h-10 items-center gap-2.5 rounded border px-2.5 text-sm">
                    <Lock color="rgb(39 103 169)" />
                    <input
                      className="h-full flex-grow bg-transparent outline-none"
                      autoComplete="false"
                      type={isHidePassword ? "password" : "text"}
                      aria-describedby="password"
                      placeholder="رمز عبور"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setIsHidePassword((prev) => !prev)}
                    >
                      {isHidePassword ? (
                        <EyeOff size={18} color={"gray"} />
                      ) : (
                        <Eye size={18} color={"gray"} />
                      )}
                    </button>
                  </div>
                  <span className="text-red-500">
                    {errors?.password?.message}
                  </span>
                </div>

                <button className="h-10 rounded border border-[#0f70b7] bg-[#0f70b7] text-white transition-colors hover:bg-white hover:text-[#0f70b7]">
                  ورود به سایت
                </button>
              </form>

              <div className="mt-10 text-center">
                رمز عبور خود را فراموش کرده اید؟
              </div>
            </div>
          </div>
        </div>
        <div className="hidden bg-[#0f70b7] py-10 md:col-span-4 md:flex">
          <div className="flex flex-col items-center px-3 text-center text-white">
            <span className="mb-5 rounded-full border border-[#c6c6c6] p-3">
              <User size={50} />
            </span>
            <h3 className="pb-2 text-xl font-bold">
              ورود به حساب کاربری در سایت DBA{" "}
            </h3>
            <p className="pb-2">
              به سادگی با کلیک بر روی دکمه ورود به حساب کاربری خود وارد شوید
            </p>
            <Link
              href="/register"
              className="block rounded border border-white px-3 py-2"
            >
              ثبت نام
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
