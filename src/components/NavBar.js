import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navElements = links.map((element, index) => {
    return <a key={index} href={"#"+element}>{element}</a>
  })


  return <nav>{navElements}</nav>;
}

export default NavBar;
