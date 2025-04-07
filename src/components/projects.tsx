import { BASE_URL, ProjectsJson } from "../constants";
import ProjectPreview from "./projectPreview";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div className="flex flex-col w-full gap-y-5">
      <div className="flex sm:flex-row flex-col gap-y-2 gap-x-2 sm:gap-x-5 justify-center flex-wrap">
        {ProjectsJson.map((project, index) => (
          <Link to={`/project/${project.id}`} key={index}>
            <ProjectPreview
              image={`${BASE_URL}${project.bannerImage}`}
              name={project.name}
              description={project.description}
              githubLink={project.githubLink}
              liveDemo={project.liveDemo}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
