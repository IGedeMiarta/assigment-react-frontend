import React from "react";
import MainLayout from "../components/templates/MainLayout";
import ButtonGroup from "../components/molecules/ButtonGroup";
import MenuTree from "../components/organisms/MenuTree";
import MenuDetailsForm from "../components/organisms/MenuDetailsForm";
import Breadcrumb from "../components/molecules/Breadcrumb";
import PageTitle from "../components/organisms/PageTitle";

const MenusPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "System", href: "/system" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <PageTitle/>
      <ButtonGroup />
      <div className="flex">
        <div className="w-1/2 pr-4 border-r border-gray-200">
          <MenuTree />
        </div>
        <div className="w-1/2 pl-4">
          <MenuDetailsForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default MenusPage;
