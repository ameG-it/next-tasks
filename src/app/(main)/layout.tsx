import SideMenu from "@/components/SideMenu/SideMenu";
import React from "react";

function Mainlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <div className="bg-gray-50 flex-1 overflow-auto">{children}</div>
    </div>
  );
}

export default Mainlayout;
