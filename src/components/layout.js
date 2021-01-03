import React from "react";
import PropTypes from "prop-types";
import "../index.css";

const Layout = ({ children }) => {

  return (
    <div className="flex justify-center bg-white text-dark-grey dark:bg-dark-grey dark:text-white">
      <div className='min-h-screen max-w-screen-xl grid grid-cols-9 gap-x-1 py-xl'>
        {children}
      </div>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
