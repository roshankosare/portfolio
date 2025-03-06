import React from "react";
import { ProjectType } from "../types";
import { BASE_URL } from "../constants";

type ProjectProps = {
  project: ProjectType;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-col sm:flex-row  w-full max-w-full h-auto max-h-full gap-y-4 gap-x-4 overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col gap-y-2 w-full h-auto sm:h-full sm:max-w-[40%] sm:overflow-y-scroll scrollbar-hide">
        <h1 className="text-xl font-bold">{project.name}</h1>

        <div className="w-full h-auto rounded-4xl  p-2">
          <img src={`${BASE_URL}${project.bannerImage}`} className="w-full" />
        </div>
        <div className="flex flex-row gap-x-2 h-12 py-2 px-4">
          <a href={project.githubLink}>
            <img src={`${BASE_URL}github.svg`} className="h-full w-auto" />
          </a>
        </div>
        <p className="text-justify">{project.description}</p>
      </div>
      <div className="flex flex-col gap-y-2 w-full min-h-[400px] h-auto sm:h-full  sm:max-w-[60%] overflow-y-scroll scrollbar-hide">
        <div className=" flex flex-row gap-x-2 overflow-x-scroll w-full scrollbar-hide">
          {project.images.desktop.map((url,index) => (
            <img
              src={`${BASE_URL}${url}`}
              className="sm:h-[250px] w-auto h-[140px] rounded-2xl "
              key={index}
            />
          ))}
        </div>
        <div className=" flex flex-row gap-x-2 overflow-x-scroll w-full scrollbar-hide">
          {project.images.mobile.map((url,index) => (
            <img
            key={index}
              src={`${BASE_URL}${url}`}
              className="w-[100px] sm:w-full sm:max-w-[150px] h-auto rounded-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
