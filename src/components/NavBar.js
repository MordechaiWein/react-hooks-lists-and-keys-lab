import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const mapedLinks = links.map((link) => {
    return <a key = {link}  href = {"#" + link}>{link}</a>
  })

return (
<nav>
  {mapedLinks}
</nav>
)
}

export default NavBar;

