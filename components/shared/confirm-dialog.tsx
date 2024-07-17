import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeading,
} from "@/components/core/Dialog";

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  onAccept?: () => void;
  onReject?: () => void;
  acceptButtonText?: string;
  rejectButtonText?: string;
}

const DEFAULT_TITLE = "هشدار";
const DEFAULT_DESCRIPTION = "";
const DEFAULT_ACCEPT_BUTTON_TEXT = "";
const DEFAULT_REJECT_BUTTON_TEXT = "انصراف";

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onOpenChange,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  onAccept,
  onReject,
  acceptButtonText = DEFAULT_ACCEPT_BUTTON_TEXT,
  rejectButtonText = DEFAULT_REJECT_BUTTON_TEXT,
}) => {
  //
  const handleOnAccept = () => {
    if (onAccept) onAccept();
  };
  //
  const handleOnReject = () => {
    if (onReject) onReject();
  };
  //
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="z-20 m-4 rounded bg-white p-4">
        <DialogHeading className="mb-4 text-base font-bold">
          {title}
        </DialogHeading>
        <DialogDescription>{description}</DialogDescription>
        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            className="h-10 rounded bg-red-500 px-3 text-sm text-white transition hover:bg-red-500"
            onClick={handleOnAccept}
          >
            {acceptButtonText}
          </button>
          <button
            className="h-10 rounded bg-gray-200 px-3 text-sm text-black transition hover:bg-gray-300"
            onClick={handleOnReject}
          >
            {rejectButtonText}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
