"use client";
import React from "react";
import Animation from "./Animation";

export const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex  flex-row justify-cener items-center p-10">
        <Animation />

        <div className="space-y-4 ">
          <div className="text-marin-blue text-lg font-bold">
            #꾸준함 #능동적 #커뮤니케이션
          </div>

          <div className="pt-4 text-lg leading-8">
            어제보다 나은 내일을 위해 노력하는{" "}
            <span className="font-bold text-xl">개발자 김혜연</span>입니다.
            <br />
            로직을 설계하고 플랫폼을 개발하며{" "}
            <span className="text-marin-semiblue font-semibold">
              기술적인 솔루션
            </span>
            을 제공하는 데 보람을 느낍니다.
            <br />
            꾸준함을 무기로 삼아{" "}
            <span className="text-marin-semiblue font-semibold">
              깊이 있는 개발자
            </span>
            로 성장하고자 합니다.
          </div>
        </div>
      </div>
    </div>
  );
};
