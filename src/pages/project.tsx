import Project from "@/components/project";
import { ProjectsJson } from "@/constants";
import { ProjectType } from "@/types";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log(id)
    if (id) {
      const projectId = Number(id);
      const p = ProjectsJson.find((project) => projectId === project.id);
      if (p) {
        setCurrentProject(p);
        setLoading(false);
        return;
      }
      setLoading(false);
    }
  }, [id]);

  return (
    <div className="w-full h-auto">
      {loading && !currentProject && <></>}
      {!loading && !currentProject && (
        <div className="mx-auto my-5 text-4xl font-bold text-gray-600">
          404 Not found
        </div>
      )}
      {!loading && currentProject && <Project project={currentProject} />}
    </div>
  );
};

export default ProjectPage;
