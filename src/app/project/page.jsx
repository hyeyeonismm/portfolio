import { TOKEN, DATABASE_ID } from "../../config/index";

const fetchData = async () => {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Notion-Version": "2022-06-28",
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  const data = await res.json();

  return data;
};

const Project = async () => {
  const data = await fetchData();
  console.log(data);
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};
export default Project;

// const projectIds = data.results.map(
//   (aProject) => aProject.properties.주제.id
// );
// console.log(projectIds);
// return {
//   props: { projectIds },
// };
