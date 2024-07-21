import React, { useRef, useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/core/Dialog";
import staticFileUrl from "@/utils/staticFileUrl";

interface ImageInputProps {
  value: File | string | null;
  onChange: (file: File | null) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ value, onChange }) => {
  // states
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  //
  useEffect(() => {
    if (typeof value === "string") {
      setImageUrl(staticFileUrl(value));
    } else if (value instanceof File) {
      const url = URL.createObjectURL(value);
      setImageUrl(url);
    } else {
      setImageUrl(null);
    }

    return () => {
      // Revoke the object URL if it was created
      if (imageUrl && value instanceof File) {
        URL.revokeObjectURL(imageUrl);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile === null && value) return;
    if (selectedFile === null) {
      setImageUrl(null);
      onChange(null);
    } else {
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url);
      onChange(selectedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center">
      {imageUrl ? (
        <>
          <button
            onClick={() => setOpen(true)}
            className="h-10 w-full rounded bg-[#0f70b7] px-3 text-sm font-medium text-white transition hover:bg-[#0f70b7]/90"
          >
            نمایش تصویر
          </button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="relative z-20 m-4 rounded bg-white p-4">
              <img
                src={imageUrl}
                alt="Selected"
                className="w-full max-w-xs rounded-md object-cover"
              />
              <button
                onClick={handleButtonClick}
                className="mt-4 h-10 w-full rounded bg-[#0f70b7] px-3 text-sm font-medium text-white transition hover:bg-[#0f70b7]/90"
              >
                انتخاب مجدد
              </button>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <button
          onClick={handleButtonClick}
          className="h-10 w-full rounded bg-[#0f70b7] px-3 text-sm font-medium text-white transition hover:bg-[#0f70b7]/90"
        >
          انتخاب تصویر
        </button>
      )}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageInput;
