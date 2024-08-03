import React, { useState } from "react";
import VerifyCodeDialog from "@/app/(public)/login/verify-code-dialog";
import ForgetPasswordDialog from "@/app/(public)/login/forget-password-dialog";
import { usePostAccountCheckMobileNumber } from "@/hooks/apis/accountHookApi";

const ForgetPassword = () => {
  //
  const checkMobileNumber = usePostAccountCheckMobileNumber();
  //
  const [isOpenForgetPasswordDialog, setIsOpenForgetPasswordDialog] =
    useState(false);
  const [isOpenVerifyCodeDialog, setIsOpenVerifyCodeDialog] = useState(false);
  const [mobile, setMobile] = useState("");
  //
  const handleOnSubmitMobile = (mobile: string) => {
    checkMobileNumber.mutate(
      { "checkMobileNumberViewModel.Mobile": mobile },
      {
        onSuccess: () => {
          setMobile(mobile);
          setIsOpenForgetPasswordDialog(false);
          setIsOpenVerifyCodeDialog(true);
        },
      },
    );
  };
  //
  return (
    <>
      <button
        onClick={() => {
          setMobile("");
          setIsOpenForgetPasswordDialog(true);
        }}
        className="mt-10 block w-full text-center hover:text-primary"
      >
        رمز عبور خود را فراموش کرده اید؟
      </button>
      <ForgetPasswordDialog
        open={isOpenForgetPasswordDialog}
        onOpenChange={setIsOpenForgetPasswordDialog}
        onSubmit={handleOnSubmitMobile}
      />
      <VerifyCodeDialog
        mobile={mobile.substring(1)}
        open={isOpenVerifyCodeDialog}
        onOpenChange={setIsOpenVerifyCodeDialog}
      />
    </>
  );
};

export default ForgetPassword;
