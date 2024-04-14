import React from "react";
import { Lock, User } from "react-feather";
import { z } from "zod";

// Define your form schema
const schema = z.object({
  username: z.string().min(1, "وارد کردن نام کاربری الزامیست !"),
  password: z.string().min(1, "وارد کردن رمز عبور الزامیست !"),
  email: z
    .string()
    .min(1, "وارد کردن ایمیل الزامیست !")
    .email("ساختار ایمیل درست نمی باشد ."),
  emailPass: z.string().min(1, "وارد کردن رمز عبور ایمیل الزامیست !"),
});

const LoginPage = () => {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      emailPass: "",
    },
  });
  //
  return (
    <main className="client-page">
      <div className="row px-0 container-xxl register_container">
        <div className="col-md-8 col-12">
          <div className="register-form my-5">
            <header className="text-center pb-4">
              <h2 className="bold"> ورود به سایت </h2>
            </header>

            <div className="form-layer">
              <form autocomplete="off" onSubmit={(e) => handleLogin(e)}>
                <div className="form-account  mb-3">
                  <span className="search-icon">
                    <User color="rgb(39 103 169)" />
                  </span>
                  <input
                    autocomplete="false"
                    type="text"
                    name="UserName"
                    className="form-control"
                    placeholder="نام کاربری"
                    aria-describedby="username"
                    value={UserName}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      loginValidation.current.showMessageFor("UserName");
                    }}
                  />
                </div>
                {loginValidation.current.message(
                  "UserName",
                  UserName,
                  "required"
                )}
                <div className="form-account  mb-3">
                  <span className="search-icon">
                    <Lock color="rgb(39 103 169)" />
                  </span>
                  <input
                    autocomplete="false"
                    type="password"
                    id="password"
                    className="noborder w-100"
                    aria-describedby="password"
                    placeholder="رمز عبور"
                    name="Password"
                    value={Password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      loginValidation.current.showMessageFor("Password");
                    }}
                  />

                  <span
                    className="toggleshowpass"
                    id="togglePassword"
                    onClick={(e) => handleToggleShowPass(e)}
                  >
                    <Eye size={18} color={"gray"} />
                  </span>
                </div>
                {loginValidation.current.message(
                  "Password",
                  Password,
                  "required"
                )}

                {/* <Recaptcha
                                    ref={refRecaptcha}
                                    sitekey={'6LepF-MeAAAAABMWi7tyymnbuWZjc7p7p9WLX2A0'}
                                    onResolved={() => onResolvedRecaptcha(Login)}
                                /> */}
                <div className="d-grid gap-2 py-3">
                  <button className="btn main-background-color-btn text-white">
                    ورود به سایت
                  </button>
                </div>
              </form>

              <div className="link text-center">
                <span className="forgetpass" onClick={handleForgetPass}>
                  رمز عبور خود را فراموش کرده اید؟
                </span>
              </div>
            </div>
          </div>
          {/* <div className="container-content my-3 text-center" style={{ background: "#ededed" }}>
                        <span>عضو نیستید؟</span>&nbsp;<NavLink to="/register" ><span className="main-color">ثبت نام</span></NavLink>
                    </div> */}
        </div>
        <div className="col-md-4 d-none d-md-flex register-info">
          <div className="register-info-content px-3">
            <span className="register-info-content_icon p-3 mb-5">
              <User size={50} />
            </span>
            <h3 className="bold pb-2">ورود به حساب کاربری در سایت DBA </h3>
            <p className="pb-2">
              به سادگی با کلیک بر روی دکمه ورود به حساب کاربری خود وارد شوید
            </p>
            <NavLink to="/register">
              <span className="btn btn-outline-light"> ثبت نام</span>
            </NavLink>
          </div>
        </div>
      </div>

      {Loading && (
        <div className="preloader">
          <BarLoader
            color="rgb(39 103 169);"
            width={"100%"}
            loading={Loading}
            speedMultiplier={0.5}
          />
        </div>
      )}
    </main>
  );
};

export default LoginPage;
