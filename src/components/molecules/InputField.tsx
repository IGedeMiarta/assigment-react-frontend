// src/components/molecules/InputField.js
import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

interface InputFieldProps {
  label: string;
  [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, ...props }) => (
  <div className="mb-4">
    <Label>{label}</Label>
    <Input value={value} onChange={onChange} {...props} />
  </div>
);

export default InputField;
