import React from "react";
import lottieJson from "@public/animation.json";
// import Lottie from "react-lottie-player";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
export default function Animation() {
  return (
    <>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: "40%", height: "40%" }}
      />
    </>
  );
}
