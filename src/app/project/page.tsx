import { TOKEN, DATABASE_ID } from "../../config/index";
import { ProjectItem } from "@components/project/items";
import linkstock from "@images/link-stock.jpg";
import loveoffishbread from "@images/love-fishbread.jpg";
import portfolio from "@images/portfolio.png";

export interface Properties {
  이름: { title: { plain_text: string }[] };
  "깃허브 링크": { url: string };
  "작동 영상": { url: string };
  설명: { rich_text: { plain_text: string }[] };
  "기술 스택": { rich_text: { plain_text: string }[] };
}

interface Results {
  id: string;
  properties: Properties;
  public_url: string;
}

interface NotionAPI {
  results: Results[];
}

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
      body: JSON.stringify({}),
    }
  );

  const response: NotionAPI = await res.json();
  const res_data = response.results;
  return res_data;
};

const Project = async () => {
  const response = await fetchData();
  console.log(response);
  const images = [linkstock, loveoffishbread, portfolio];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-5 md:p-10 w-full gap-5">
        {response.map((res, index) => (
          <div key={res.id}>
            {
              <ProjectItem
                properties={res.properties}
                image={images[index % images.length]}
                public_url={res.public_url}
              />
            }
          </div>
        ))}
      </div>
    </>
  );
};
export default Project;
