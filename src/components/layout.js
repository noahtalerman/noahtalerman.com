import React from "react";
import PropTypes from "prop-types";
import "../index.css";

const Layout = ({ children }) => {

  return (
    <div className='min-h-screen grid grid-cols-9 gap-x-1 py-xl bg-white text-dark-grey dark:bg-dark-grey dark:text-white'>
      {children}
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
