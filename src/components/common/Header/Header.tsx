import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      <header className="flex flex-col md:flex-row m-5 justify-between">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={"/images/profile.png"}
            alt="profile"
            width={75}
            height={75}
          />
          <div className="font-bold">HYEYEON KIM</div>
        </Link>

        <div className="gap-2 md:gap-5 flex items-center justify-center font-semibold">
          {MENU_ITEM.map((menu, index) => (
            <div key={index}>
              <Link href={menu.link}>
                <div className="flex p-2 rounded-lg hover:bg-marin-skyblue">
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
