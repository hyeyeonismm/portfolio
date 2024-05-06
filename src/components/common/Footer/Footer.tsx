import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="flex justify-between w-full px-10 md:px-20 py-8 text-stone-500 dark:text-stone-300 bg-stone-200 dark:bg-slate-600">
        <div className="text-xs">
          © 2024 — HYEYEON KIM
          <br />
          <Link href="https://www.instagram.com/hyeyeonismm/">
            @hyeyeonismm
          </Link>
        </div>
        <div className="flex flex-row gap-4 md:gap-6">
          <Link target="_blank" href="">
            <Image
              src={"/images/website.png"}
              alt="website"
              width={32}
              height={30}
            />
          </Link>
          <Link target="_blank" href="mailto:hyeyeonismm@gmail.com">
            <Image
              src={"/images/email.png"}
              alt="website"
              width={30}
              height={30}
            />
          </Link>
          <Link target="_blank" href="https://github.com/hyeyeonismm">
            <Image
              src={"/images/github.svg"}
              alt="website"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </footer>
    </>
  );
};
