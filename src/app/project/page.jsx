import { TOKEN, DATABASE_ID } from "../../config/index";
import ProjectItem from "@components/project/items";

const fetchData = async () => {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,

    {
      next: { revalidate: 60 },
      method: "POST",
      headers: {
        Accept: "application/json",
        "Notion-Version": "2022-06-28",
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  const data = await res.json();
  // const projectNames = data.results.map((name) =>
  //   // JSON.parse(JSON.stringify(name.properties.이름.title[0].plain_text))
  //   JSON.parse(JSON.stringify(name.properties.이름.title[0].plain_text))
  // );
  // const projectLinks = data.results.map

  return data;
};

const Project = async () => {
  const data = await fetchData();
  console.log(data);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:p-10 w-full my-5">
        {data.results.map((aProject) => (
          <div key={aProject.id}>
            <ProjectItem data={aProject} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Project;
