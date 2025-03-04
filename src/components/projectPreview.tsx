import React from "react";

type Props = {
  image: string;
  name: string;
};

const ProjectPreview: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="w-[400px] h-[300px] bg-stone-950 rounded-4xl flex flex-col gap-y-4 py-5 px-5">
      <img src={image} className="w-full max-w-[400px] h-auto" />
      <span className="text-2xl font-bold">{name}</span>
    </div>
  );
};
export default ProjectPreview;
