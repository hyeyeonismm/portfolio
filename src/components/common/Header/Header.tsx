import React from "react";
import Link from "next/link";

const MENU_ITEM = [
  {
    label: "HOME",
    link: "/",
  },
  {
    label: "PROFILE",
    link: "/profile",
  },
  {
    label: "PROJECT",
    link: "/project",
  },
  {
    label: "CONTACT",
    link: "/contact",
  },
];

export const Header = () => {
  return (
    <>
      <div className="flex p-5 gap-5">
        {MENU_ITEM.map((menu) => (
          <>
            <Link href={menu.link} key={menu.label}>
              <div className="flex hover:bg-yellow-50">{menu.label}</div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};
