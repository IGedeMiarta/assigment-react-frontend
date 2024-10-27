import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary" }) => {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white px-4 py-2 rounded"
      : "bg-gray-800 text-white px-4 py-2 rounded";

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;