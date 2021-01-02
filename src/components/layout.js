import React from "react";
import PropTypes from "prop-types";
import "../index.css";

const Layout = ({ children }) => {

  return (
    <div className='grid grid-cols-9 gap-x-1'>
      {children}
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
