// src/components/organisms/MenuTree.js
import React from "react";

const MenuTree = () => (
  <div className="text-sm text-gray-800">
    <ul>
      <li>system management</li>
      <ul className="pl-4">
        <li>System Management</li>
        <ul className="pl-4">
          <li>System Code</li>
          <ul className="pl-4">
            <li>Code Registration</li>
            <li>Code Registration - 2</li>
          </ul>
          <li>Properties</li>
          <li>Menus</li>
        </ul>
      </ul>
    </ul>
  </div>
);

export default MenuTree;
