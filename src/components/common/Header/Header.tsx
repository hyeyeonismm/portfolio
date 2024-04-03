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
      <header className="flex my-5 mr-20 ml-10">
        <Link href="/" className="flex">
          <Image
            src={"/images/profile.png"}
            alt="profile"
            width={75}
            height={75}
          />
          <div className="mt-10 ml-3">HYEYEON KIM</div>
        </Link>

        {/* <div className="flex gap-5 justify-center"> */}
        <div className="ml-auto mt-5 gap-5 flex items-center justify-center">
          {MENU_ITEM.map((menu, index) => (
            <div key={index}>
              <Link href={menu.link}>
                <div className="flex hover:bg-yellow-50">{menu.label}</div>
              </Link>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};
