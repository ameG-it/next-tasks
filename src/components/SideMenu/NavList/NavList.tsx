import React from "react";
import { FaTasks } from "react-icons/fa";
import NavListItem from "./NavItem/NavListItem";

interface NavItem {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

function NavList() {
  const tasks: NavItem[] = [
    { id: 1, label: "All Tasks", link: "/", icon: <FaTasks /> },
    { id: 2, label: "Completed Tasks", link: "/Completed", icon: <FaTasks /> },
    { id: 2, label: "Expired Tasks", link: "/Expired", icon: <FaTasks /> },
  ];

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return (
            <NavListItem
              key={task.id}
              label={task.label}
              link={task.link}
              icon={task.icon}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default NavList;
