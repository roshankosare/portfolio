import React from "react";
import GitHubIcon from "./icons/github";
import LinkIcon from "./icons/webLink";

type Props = {
  image: string;
  name: string;
  description: string;
  githubLink: string;
  liveDemo: string;
};

const ProjectPreview: React.FC<Props> = ({
  image,
  name,
  description,
  githubLink,
  liveDemo,
}) => {
  return (
    <div className="w-full sm:max-w-[400px]  bg-neutral-900 s flex flex-col justify-between min-h-[500px]  gap-y-4 sm:gap-y-4  py-4  px-4 sm:py-5 sm:px-5 cursor-pointer">
      <img src={image} className="w-full sm:max-w-[400px] h-auto" />
      <span className="sm:text-xl text-md ">{name}</span>
      <span className=" text-sm sm:text-md line-clamp-4">{description}</span>
      <div className="flex flex-row px-2 gap-x-4">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center ">
          <GitHubIcon className="w-4 h-4 text-black">{githubLink}</GitHubIcon>
        </div>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <LinkIcon
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            {liveDemo}
          </LinkIcon>
        </div>
      </div>
    </div>
  );
};
export default ProjectPreview;
