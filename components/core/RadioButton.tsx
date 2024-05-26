import React, { forwardRef } from "react";

type RadioButtonProps = React.ComponentProps<"input"> & {
  label: string;
};

const RadioButton: React.ForwardRefRenderFunction<
  HTMLInputElement,
  RadioButtonProps
> = ({ label, ...props }, ref) => {
  return (
    <label className="inline-flex gap-1 cursor-pointer">
      <input ref={ref} {...props} type="radio" />
      <span className="inline-block">{label}</span>
    </label>
  );
};

export default forwardRef(RadioButton);
