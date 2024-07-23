import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeading } from "@/components/core/Dialog";
import Label from "@/components/core/Label";
import Input from "@/components/core/Input";

interface ForgetPasswordDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (value: string) => void;
}

const ForgetPasswordDialog: React.FC<ForgetPasswordDialogProps> = ({
  open,
  onOpenChange,
  onSubmit,
}) => {
  //
  const [mobile, setMobile] = useState("");
  //
  useEffect(() => {
    if (open) {
      setMobile("");
    }
  }, [open]);
  //
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="z-20 m-4 min-w-80 rounded bg-white p-4">
        <DialogHeading className="mb-4 text-center text-base font-bold">
          فراموشی رمز
        </DialogHeading>
        <div className="flex w-full flex-col gap-4">
          <div className="">
            <Label>شماره موبایل</Label>
            <Input value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
          <button
            onClick={() => onSubmit(mobile)}
            disabled={mobile === ""}
            className="h-10 w-full rounded border border-[#0f70b7] bg-[#0f70b7] text-white transition hover:bg-white hover:text-[#0f70b7] disabled:opacity-50"
          >
            ارسال کد
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ForgetPasswordDialog;
