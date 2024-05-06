import Image, { StaticImageData } from "next/image";
import { Properties } from "../../app/project/page";

interface ProjectItemProps {
  properties: Properties;
  image: StaticImageData;
  url: string;
}

export const ProjectItem = ({ properties, image, url }: ProjectItemProps) => {
  const titles = properties.이름.title
    .map((title) => title.plain_text)
    .join("");
  const githubs = properties["깃허브 링크"].url;
  const projectUrls = properties["작동 영상"].url || "not-found";
  const descriptions = properties.설명.rich_text[0]?.plain_text;
  const stacks = properties["기술 스택"]?.rich_text[0].plain_text;
  const skillsets = stacks.split(" ");

  return (
    <div className="project-grid p-6 border-2 rounded-lg h-full">
      <div className="overflow-hidden mb-5">
        <Image
          className="object-cover object-center h-full w-full"
          src={image.src}
          alt="cover"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col gap-2">
        <a
          target="_blank"
          href={url}
          className="text-xl font-bold dark:text-white text-gray-900 cursor-pointer hover:underline underline-offset-1"
        >
          {titles}
        </a>
        <p className="leading-relaxed">{descriptions}</p>
        <a target="_blank" href={githubs} className="a-class">
          깃허브로 이동
        </a>
        <a target="_blank" href={projectUrls} className="a-class">
          시연 영상으로 이동
        </a>
        <div className="flex flex-row gap-2 flex-wrap">
          {skillsets.map((stack, i) => (
            <div
              key={i}
              className="bg-marin-skyblue dark:bg-marin-semiblue px-2 py-1 rounded-xl"
            >
              {stack}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
