// src/components/templates/MainLayout.js
import Sidebar from "../organisms/Sidebar";

import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="flex h-screen bg-white">
    <Sidebar />
    <main className="flex-1 p-8 bg-white">{children}</main>
  </div>
);

export default MainLayout;
