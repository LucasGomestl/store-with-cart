import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Icon = ({ icon, link }) => {
  return (
    <>
      {link ? (
        <Link to={link} data-testid="link">
          <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </Link>
      ) : (
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      )}
    </>
  );
};

export default Icon;
