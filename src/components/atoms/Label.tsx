// src/components/atoms/Label.js
import React from "react";

import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
}

const Label = ({ children }: LabelProps) => (
  <label className="block text-gray-600">{children}</label>
);

export default Label;
