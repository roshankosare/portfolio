import ProjectPreview from "./projectPreview";

export const Projects = () => {
  return (
    <div className="flex flex-col w-full gap-y-5">
      <h1 className="text-4xl font-extrabold">Projects</h1>
      <div className="flex sm:flex-row flex-col">
        <ProjectPreview image={"./chessPreview.png"} name="ChessX" />
      </div>
    </div>
  );
};
