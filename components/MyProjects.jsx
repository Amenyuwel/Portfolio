import React from "react";
import ProjectsGrid from "./ProjectsGrid";


const MyProjects = () => {
  return (
    <main className="bg-main mb-8 grid w-full grid-cols-1 gap-8 rounded-lg md:grid-cols-1">
      <ProjectsGrid/>
    </main>
  );
};

export default MyProjects;
