import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, link }) => {
  return (
    <>
      {link ? (
        <a href={link} data-testid="link">
          <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </a>
      ) : (
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      )}
    </>
  );
};

export default Icon;
