import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DarkModeBtn } from "@components/common/Button";

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
];

export const Header = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row m-5 justify-between">
        <div className="flex flex-row justify-center gap-3">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src={"/images/header_profile.png"}
              alt="profile"
              width={75}
              height={75}
            />
            <div className="font-bold mt-5 dark:text-white">HYEYEON KIM</div>
          </Link>
          <DarkModeBtn />
        </div>

        <div className="gap-2 md:gap-5 flex items-center justify-center font-semibold">
          {MENU_ITEM.map((menu, index) => (
            <div key={index}>
              <Link href={menu.link}>
                <div className="flex p-2 rounded-lg hover:bg-marin-skyblue text-marin-txt dark:text-white">
                  {menu.label}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};
