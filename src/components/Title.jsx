import React from "react";

export const Title = ({ naming }) => {
  let displayNaming;

  if (naming.includes("-")) {
    let splitTitle = naming.split("-");
    let newTitle = splitTitle.reverse();
    newTitle.splice(1, 0, ", ");
    displayNaming = newTitle.join("");
  } else {
    displayNaming = naming;
  }

  return <>{displayNaming}</>;
};
