import React from "react";
import ProfileItems from "@components/profile/ProfileItems";
import Image from "next/image";

type Props = {};

function Profile({}: Props) {
  return (
    <div className="flex flex-col mx-6 mb-4">
      <div className="text-xl flex flex-col font-semibold items-center dark:text-slate-400 my-5">
        <div>
          Ab<span className="border-solid border-b-2 border-red-300">out</span>{" "}
          Me!
        </div>
        <Image
          src={"/images/profile.jpg"}
          alt="profile"
          width={125}
          height={135}
          className="mt-5 mb-5 md:mb-14"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <ProfileItems
          title="Education"
          content={[
            "🎓 동국대학교 편입 및 졸업 (21. 03 ~ 24. 02)",
            "🎓 경영정보학과 주전공, 컴퓨터공학과 복수전공",
          ]}
        />
        <ProfileItems
          title="Awards"
          content={[
            "🏅 한국통신학회 아이디어 경진대회 - 장려상 (23. 06)",
            "🏅 동국대학교 SW 교육원 해커톤 - 최우수상 (23. 12)",
          ]}
        />
        <ProfileItems
          title="Certificates"
          content={[
            "📚 운전면허 2종 보통 (17. 01)",
            "📚 컴퓨터활용능력 2급 (20. 10)",
            "📚 SQLD (23. 12)",
            "📚 Toeic Speaking IH (150) (24. 01)",
          ]}
        />
        <ProfileItems
          title="Activities"
          content={[
            "🌐 인천시 장애인재활협회 중학생 꿈찾기 멘토링 봉사",
            "🌐 신한투자증권 ICT부서 인턴 (23. 10 ~ 23. 11)",
          ]}
        />
      </div>
    </div>
  );
}

export default Profile;
