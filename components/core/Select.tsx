"use client";

import React, { forwardRef } from "react";
import ReactSelect, { StylesConfig, SingleValue } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string;
  options: OptionType[];
  onChange: (e: {
    target: {
      value: string;
      name?: string;
    };
  }) => void;
  onBlur?: () => void;
  name?: string;
  placeholder?: string;
  isClearable?: boolean;
}

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    height: "40px",
    borderColor: "#e5e7eb",
    "&:hover": {
      borderColor: "#015fcc",
    },
    fontSize: "0.75rem",
    lineHeight: "1rem",
  }),
  input: (provided) => ({
    ...provided,
    fontSize: "0.75rem",
    lineHeight: "1rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "0.75rem",
    lineHeight: "1rem",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: "0.75rem",
    lineHeight: "1rem",
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: "0.75rem",
    lineHeight: "1rem",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "0.75rem",
    lineHeight: "1rem",
  }),
};

const Select: React.ForwardRefRenderFunction<any, SelectProps> = (
  { value, options, onChange, onBlur, name, placeholder, isClearable },
  ref,
) => {
  //
  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    onChange({
      target: {
        value: selectedOption ? selectedOption.value : "",
        name,
      },
    });
  };
  //
  const selectedOption = options.find((option) => option.value === value);
  //
  return (
    <ReactSelect
      ref={ref}
      name={name}
      value={selectedOption}
      onChange={handleChange}
      onBlur={onBlur}
      options={options}
      styles={customStyles}
      placeholder={placeholder}
      isClearable={isClearable}
    />
  );
};

export default forwardRef(Select);
