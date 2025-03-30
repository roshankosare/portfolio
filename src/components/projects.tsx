import { useState } from "react";
import { BASE_URL, ProjectsJson } from "../constants";
import ProjectPreview from "./projectPreview";
import Dialog from "./Dialog";
import { ProjectType } from "../types";
import Project from "./project";


export const Projects = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    null
  );
  return (
    <div className="flex flex-col w-full gap-y-5">
      <h1 className="sm:text-4xl text-2xl font-extrabold">Projects</h1>
      <div className="flex sm:flex-row flex-col gap-y-2 gap-x-2 sm:gap-x-5">
        {ProjectsJson.map((project, index) => (
          <ProjectPreview
            key={index}
            image={`${BASE_URL}${project.bannerImage}`}
            name={project.name}
            onOpenDialog={() => {
              setOpenDialog(true);
              setCurrentProject(project);
            }}
          />
        ))}
      </div>
      {currentProject && (
        <Dialog isOpen={openDialog} onClose={() => setOpenDialog(false)}>
          <Project project={currentProject} />
        </Dialog>
      )}
    </div>
  );
};
