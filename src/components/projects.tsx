import { BASE_URL, ProjectsJson } from "../constants";
import ProjectPreview from "./projectPreview";

export const Projects = () => {
  return (
    <div className="flex flex-col w-full gap-y-5">
      <div className="flex sm:flex-row flex-col gap-y-4 gap-x-2 sm:gap-x-8 justify-center flex-wrap">
        {ProjectsJson.map((project, index) => (
          <ProjectPreview
            key={index}
            id={project.id}
            image={`${BASE_URL}${project.bannerImage}`}
            name={project.name}
            description={project.description}
            githubLink={project.githubLink}
            liveDemo={project.liveDemo}
          />
        ))}
      </div>
    </div>
  );
};
