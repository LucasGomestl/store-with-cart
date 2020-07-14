import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Icon = ({ icon, link, color }) => {
  return (
    <>
      {link ? (
        <Link to={link} data-testid="link">
          <FontAwesomeIcon icon={icon} color={color}></FontAwesomeIcon>
        </Link>
      ) : (
        <FontAwesomeIcon icon={icon} color={color}></FontAwesomeIcon>
      )}
    </>
  );
};

export default Icon;
