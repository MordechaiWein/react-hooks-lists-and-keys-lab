import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  console.log(projects);
  const mapedProjects = projects.map((project) => {
    return <h1 key={project.id}> {project.name} </h1>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{mapedProjects}</div>
    </div>
  );
}
<ProjectItem technologies={user.projects.technologies} />

 
 export default ProjectList;

