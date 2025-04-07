import React from "react";
import { ProjectType } from "../types";
import { BASE_URL } from "../constants";
import { LinkIcon } from "lucide-react";
import GitHubIcon from "./icons/github";

type ProjectProps = {
  project: ProjectType;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-neutral-900  w-full max-w-full h-auto max-h-full gap-y-4 gap-x-8 overflow-y-scroll scrollbar-hide px-4 py-4 sm:px-6 sm:py-6">
      <div className="flex flex-col min-h-full gap-y-8 justify-between w-full  sm:h-full sm:max-w-[40%] sm:overflow-y-scroll scrollbar-hide">
        <h1 className="text-xl font-bold">{project.name}</h1>

        <div className="w-full h-auto rounded-4xl  p-2">
          <img src={`${BASE_URL}${project.bannerImage}`} className="w-full" />
        </div>

        <p className="text-justify">{project.description}</p>
        <div className="flex flex-row px-2 gap-x-4">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center ">
            <GitHubIcon className="w-4 h-4 text-black">
              {project.githubLink}
            </GitHubIcon>
          </div>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <LinkIcon
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              {project.liveDemo}
            </LinkIcon>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-full min-h-[400px] h-auto sm:h-full  sm:max-w-[60%] overflow-y-scroll scrollbar-hide">
        <div className=" flex flex-row gap-x-2 overflow-x-scroll w-full scrollbar-hide">
          {project.images.desktop.map((url, index) => (
            <img
              src={`${BASE_URL}${url}`}
              className="sm:h-[250px] w-auto h-[140px] rounded-2xl "
              key={index}
            />
          ))}
        </div>
        <div className=" flex flex-row gap-x-2 overflow-x-scroll w-full scrollbar-hide">
          {project.images.mobile.map((url, index) => (
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
