"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProp {
  label: string;
  link: string;
  icon: React.ReactNode;
}

function NavListItem({ label, link, icon }: NavItemProp): JSX.Element {
  const pathname = usePathname();
  return (
    <li
      className={`p-4 w-full font-medium hover:bg-slate-600 ${
        pathname === link ? "bg-gray-600 border-r-2 border-green-300" : ""
      }`}
    >
      <Link href={link} className="flex items-center ">
        {icon}
        {label}
      </Link>
    </li>
  );
}

export default NavListItem;
