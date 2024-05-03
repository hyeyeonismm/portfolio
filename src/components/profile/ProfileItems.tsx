import React from "react";

interface ProfileProps {
  title: string;
  content: string[];
}

const ProfileItems: React.FC<ProfileProps> = ({ title, content }) => {
  return (
    <>
      <div>
        <div className="profile_title dark:bg-slate-600 dark:text-slate-400">
          {title}
        </div>
        <div className="profile_content">
          {content.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileItems;
