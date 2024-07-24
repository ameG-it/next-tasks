import React from "react";
import NavList from "./NavList/NavList";

function SideMenu() {
  return (
    <div className="w-56 bg-gray-800 text-white">
      <h2 className="font-bold p-4">SideMenu</h2>
      <NavList />
    </div>
  );
}

export default SideMenu;
