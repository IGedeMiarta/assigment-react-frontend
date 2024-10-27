// src/components/organisms/Sidebar.js
import React, { useState } from "react";
import { BsFillFolderFill, BsFillGridFill } from "react-icons/bs";
import MenuItem from "../molecules/MenuItem";


const Sidebar = () => {
  const [isSystemExpanded, setIsSystemExpanded] = useState(false);

  const toggleSystem = () => {
    setIsSystemExpanded(!isSystemExpanded);
  };

  return (
    <div className="w-64 bg-[#0F1828] text-gray-200 m-5 p-5 rounded-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">CLOIT</h1>
      </div>
      <ul className="space-y-2">
        {/* Main menu item with collapsible functionality */}
        <li className={isSystemExpanded?'bg-gray-700 rounded-xl p-2':''}>
          <div
            className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-800 rounded-lg "
            onClick={toggleSystem}
          >
            <div className="flex items-center space-x-2 ">
              <BsFillFolderFill className="text-lg" />
              <span className="text-sm">System</span>
            </div>
          </div>

          {/* Collapsible submenu items */}
          {isSystemExpanded && (
            <ul className="mt-2 space-y-1 ">
              <MenuItem icon={<BsFillGridFill />} label="System Code" isActive={false} onClick={() => {}} />
              <MenuItem icon={<BsFillGridFill />} label="Properties" isActive={false} onClick={() => {}} />
              <MenuItem icon={<BsFillGridFill />} label="Menus" isActive={true} onClick={() => {}} />
            </ul>
          )}
        </li>

        {/* Other main menu items */}
        <MenuItem icon={<BsFillFolderFill />} label="Users" isActive={false} onClick={() => {}} />
        <MenuItem icon={<BsFillFolderFill />} label="API List" isActive={false} onClick={() => {}} />
      </ul>
    </div>
  );
};

export default Sidebar;
