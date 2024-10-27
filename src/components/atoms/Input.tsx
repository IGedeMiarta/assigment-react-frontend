import React from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, disabled, type = "text" }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    disabled={disabled}
    className="border border-gray-300 rounded px-4 py-2 w-full mt-1"
  />
);

export default Input;