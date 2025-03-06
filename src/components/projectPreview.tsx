import React from "react";

type Props = {
  image: string;
  name: string;
  onOpenDialog: () => void;
};

const ProjectPreview: React.FC<Props> = ({ image, name, onOpenDialog }) => {
  return (
    <div
      onClick={() => onOpenDialog()}
      className=" max-w-[250px] w-full sm:max-w-[400px] h-auto   bg-stone-950  rounded-2xl sm:rounded-4xl flex flex-col  gap-y-2 sm:gap-y-4  py-2  px-2 sm:py-5 sm:px-5 cursor-pointer"
    >
      <img
        src={image}
        className="w-full max-w-[250px] sm:max-w-[400px] h-auto"
      />
      <span className="sm:text-2xl text-md font-bold">{name}</span>
    </div>
  );
};
export default ProjectPreview;
