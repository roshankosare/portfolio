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
    <div className="flex flex-col   w-full max-w-full bg-neutral-900 h-auto sm:max-h-full gap-y-4 gap-x-8 overflow-y-scroll scrollbar-hide px-4 py-4 sm:px-6 sm:py-6">
      <div className="flex flex-col sm:flex-row gap-x-8   sm:px-8 sm:py-8 px-2 py-2  min-h-full gap-y-8 justify-between w-full  sm:h-full sm:overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-bold">{project.name}</h1>

          <div className="w-full sm:w-[600px] h-auto rounded-4xl  p-2">
            <img src={`${BASE_URL}${project.bannerImage}`} className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-y-4 py-8">
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
      </div>
      <div className="flex flex-col gap-y-8">
        {/* Desktop Images */}
        <div className="grid grid-flow-col auto-cols-[350px] sm:auto-cols-[500px] gap-4 overflow-x-auto scrollbar-hide">
          {project.images.desktop.map((url, index) => (
            <img
              key={index}
              src={`${BASE_URL}${url}`}
              alt={`desktop-${index}`}
              className="w-full h-auto object-contain max-h-[400px] shadow-lg shadow-gray- border border-neutral-700"
            />
          ))}
        </div>
        <div className="grid grid-flow-col auto-cols-[140px] sm:auto-cols-[300px] gap-4 overflow-x-auto scrollbar-hide">
          {project.images.mobile.map((url, index) => (
            <img
              key={index}
              src={`${BASE_URL}${url}`}
              alt={`mobile-${index}`}
              className="w-full h-auto object-contain max-h-[400px] shadow-lg  border border-neutral-700 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
