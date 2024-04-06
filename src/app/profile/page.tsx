import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

function Profile({}: Props) {
  return (
    <div className="flex flex-col mx-6">
      <div className="text-xl flex flex-col font-semibold items-center">
        <div>
          Ab<span className="border-solid border-b-2 border-red-300">out</span>{" "}
          Me!
        </div>
        <Image
          src={"/images/profile.jpg"}
          alt="profile"
          width={125}
          height={135}
          className="my-4"
        />
      </div>
      <div className="profile_title">Education</div>
      <div className="profile_content">
        🎓 동국대학교 편입 및 졸업 (21. 03 ~ 24. 02)
        <br />
        🎓 경영정보학과 주전공, 컴퓨터공학과 복수전공
      </div>
      <div className="profile_title">Awards</div>
      <div className="profile_content">
        🏅 동국대학교 SW 교육원 해커톤 - 최우수상 (23. 12)
        <br />
        🏅 한국통신학회 아이디어 경진대회 - 장려상 (23. 06)
      </div>
      <div className="profile_title">Certificates</div>
      <div className="profile_content">
        📚 SQLD (23. 12)
        <br />
        📚 Toeic Speaking IH (150) (24. 01)
        <br />
        📚 컴퓨터활용능력 2급 (20. 10)
        <br />
        📚 운전면허 2종 보통 (17. 01)
      </div>
      <div className="profile_title">Activities</div>
      <div className="profile_content">
        🌐 신한투자증권 ICT부서 인턴 (23. 10 ~ 23. 11)
        <br />
        🌐 인천시 장애인재활협회 중학생 꿈찾기 멘토링 봉사활동
      </div>
    </div>
    // <div className="border-4 border-yellow-500 text-2xl text-yellow-400 p-2">
    //   This is Todos Page
    // </div>
  );
}

export default Profile;
