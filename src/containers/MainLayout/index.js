import React from "react";
import PropTypes from "prop-types";

const MainLayout = (props) => {
  const { id = "item", className = "", children } = props;

  return (
    <div id={id} className={`page__layout ${className}`}>
      <div className="container">{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
};

MainLayout.defaultProps = {
  id: "",
  className: "",
};

export default MainLayout;
