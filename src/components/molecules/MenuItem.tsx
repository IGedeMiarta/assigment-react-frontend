import React from "react";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive, onClick }) => {
  const activeStyles = isActive ? "bg-[#9FF443] text-gray-900 rounded-lg" : "text-gray-300 hover:bg-gray-700";

  return (
    <li
      className={`flex items-center space-x-2 p-2 cursor-pointer rounded-lg ${activeStyles}`}
      onClick={onClick}
    >
      <div className="text-lg">{icon}</div>
      <span className="text-sm">{label}</span>
    </li>
  );
};

export default MenuItem;