"use client";

import React from "react";
import ReactSelect, { StylesConfig } from "react-select";
import { SingleValue } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  options: OptionType[];
  onChange: (value: string) => void;
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

const Select: React.FC<SelectProps> = ({
  value,
  options,
  onChange,
  placeholder,
  isClearable,
}) => {
  //
  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    onChange(selectedOption ? selectedOption.value : "");
  };
  //
  const selectedOption = options.find((option) => option.value === value);
  //
  return (
    <ReactSelect
      value={selectedOption}
      onChange={handleChange}
      options={options}
      styles={customStyles}
      placeholder={placeholder}
      isClearable={isClearable}
    />
  );
};

export default Select;
