import React from "react";


function ProjectItem({ name, about, technologies }) {
  const mapedTechnologies = technologies.map((technology) => {
    return <span key = {technology}> {technology} </span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {mapedTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;

// function NavBar() {
//   const links = ["home", "about", "projects"];
//   const mapedLinks = links.map((link) => {
//     return <a key = {link}  href = {"#" + link}>{link}</a>
//   })

// return (
// <nav>
//   {mapedLinks}
// </nav>
// )
// }