import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="flex justify-between  px-12 py-8 bg-stone-200">
        <div className="text-stone-500 text-xs pt-2">
          © 2024 — HYEYEON KIM
          <Link
            href="https://www.instagram.com/hyeyeonismm/"
            className="text-stone-500 ml-3"
          >
            @hyeyeonismm
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <Link href="">
            <Image
              src={"/images/website.png"}
              alt="website"
              width={32}
              height={30}
            />
          </Link>
          <Link href="mailto:hyeyeonismm@gmail.com">
            <Image
              src={"/images/email.png"}
              alt="website"
              width={30}
              height={30}
            />
          </Link>
          <Link href="https://github.com/hyeyeonismm">
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
