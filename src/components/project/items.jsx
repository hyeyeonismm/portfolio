import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties["이름"].title
    .map((textItem) => textItem.plain_text)
    .join("");
  const github = data.properties["깃허브 링크"].url || "깃허브 링크 없음";
  const projectUrl = data.properties["작동 영상"].url || "배포 링크 없음";
  const description =
    data.properties["설명"].rich_text[0]?.plain_text || "설명 없음";
  const stacks = data.properties["기술 스택"]?.rich_text[0].plain_text || "";
  const skillset = stacks.split(" ");
  // const imgSrc = data.cover.file?.url || "/default-image.jpg";
  // const tags = data.properties["역할"].multi_select;

  // const workPeriod =
  //   data.properties["기간"].rich_text[0]?.plain_text || "기간 정보 없음";

  return (
    <div className="project-grid p-6">
      <div className="flex border-2 rounded-lg">
        <div className="flex flex-col p-4 md:w-full sm:mb-0">
          <div className="rounded-lg h-52 overflow-hidden">
            <Image
              className="object-cover object-center h-full w-full"
              src=""
              alt="cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold title-font dark:text-white text-gray-900">
              {title}
            </h2>
            <p className="leading-relaxed">{description}</p>
            <a href={github} className="text-indigo-500 items-center ">
              깃허브로 이동
            </a>
            <a href={projectUrl} className="text-indigo-500 items-center">
              시연 영상으로 이동
            </a>
            <div className="flex flex-row gap-2 flex-wrap">
              {skillset.map((stack, i) => (
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

        {/* <div className="p-4 flex flex-col"> 
        <h1 className="text-2xl font-bold">{title}</h1>
          <h3 className="mt-4 text-xl">{description}</h3> */}

        {/* <p className="my-1 ">작업기간 : {workPeriod}</p> */}
        {/* <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <h1
              key={tag.id}
              className={`px-2 py-1 mr-2 rounded-md text-white w-30 bg-${
                colorMapping[tag.color]
              }`}
            >
              {tag.name}
            </h1>
          ))}
        </div> 
        </div>*/}
      </div>
    </div>
  );
}
