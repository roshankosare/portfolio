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
      className="sm:w-[400px] sm:h-[300px]  bg-stone-950 rounded-4xl flex flex-col gap-y-4 py-5 px-5 cursor-pointer"
    >
      <img src={image} className="w-full max-w-[400px] h-auto" />
      <span className="sm:text-2xl text-xl font-bold">{name}</span>
    </div>
  );
};
export default ProjectPreview;
