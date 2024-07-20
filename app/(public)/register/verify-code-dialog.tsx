import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeading } from "@/components/core/Dialog";
import OtpInput from "react-otp-input";
import { useTimer } from "react-timer-hook";
import {
  usePostAccountCheckVerifyCode,
  usePostAccountGetVerifyCode,
} from "@/hooks/apis/accountHookApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface VerifyCodeDialogProps {
  username: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const expiryTimestamp = () => new Date(Date.now() + 120 * 1000); // 2 minute from now

const VerifyCodeDialog: React.FC<VerifyCodeDialogProps> = ({
  username,
  open,
  onOpenChange,
}) => {
  //
  const { push } = useRouter();
  const [otp, setOtp] = useState("");
  const [isExpire, setIsExpire] = useState(false);
  //
  const getVerifyCode = usePostAccountGetVerifyCode();
  const checkVerifyCode = usePostAccountCheckVerifyCode();
  //
  const { seconds, minutes, restart } = useTimer({
    autoStart: false,
    expiryTimestamp: expiryTimestamp(),
    onExpire: () => setIsExpire(true),
  });
  //
  const handleResendVerifyCode = () => {
    getVerifyCode.mutate(
      { "checkVerifyCodeViewModel.Username": username },
      {
        onSuccess: () => {
          //
          restart(expiryTimestamp());
          setIsExpire(false);
          setOtp("");
        },
      },
    );
  };
  //
  const handleVerifyCode = () => {
    checkVerifyCode.mutate(
      {
        "checkVerifyCodeViewModel.Username": username,
        "checkVerifyCodeViewModel.Code": otp,
      },
      {
        onSuccess: (res) => {
          //
          if (res.Status == "success") {
            onOpenChange(false);
            toast.success("عملیات با موفقیت انجام شد");
            push("/login");
          } else {
            toast.error(res.Message);
          }
        },
      },
    );
  };
  //
  const renderer = ({
    minutes,
    seconds,
    isExpire,
  }: {
    minutes: number;
    seconds: number;
    isExpire: boolean;
  }) => {
    if (isExpire) {
      // Render a completed state
      return (
        <button
          className="h-10 w-full rounded border border-[#0f70b7] bg-[#0f70b7] text-white transition-colors hover:bg-white hover:text-[#0f70b7]"
          onClick={handleResendVerifyCode}
        >
          ارسال مجدد کد
        </button>
      );
    } else {
      // Render a countdown
      return (
        <div className="">{`${minutes}:${seconds} تا درخواست مجدد کد`}</div>
      );
    }
  };
  //
  useEffect(() => {
    if (open) {
      restart(expiryTimestamp());
      setOtp("");
    }
  }, [open]);
  //
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="z-20 m-4 rounded bg-white p-10">
        <DialogHeading className="mb-4 text-center text-base font-bold">
          کد تایید را وارد نمایید
        </DialogHeading>
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            کد تایید پنج رقمی به شماره شما ارسال شد.
          </div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            containerStyle="justify-between ltr gap-4 mt-4 mb-0.5"
            renderInput={(props) => (
              <input
                {...props}
                className="aspect-square !size-11 rounded border px-2.5 text-xs"
              />
            )}
          />
          {renderer({ isExpire, minutes, seconds })}
          {!isExpire && (
            <button
              onClick={handleVerifyCode}
              disabled={otp.length !== 5}
              className="h-10 w-full rounded border border-[#0f70b7] bg-[#0f70b7] text-white transition-colors transition-opacity hover:bg-white hover:text-[#0f70b7] disabled:opacity-50"
            >
              ثبت
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyCodeDialog;
