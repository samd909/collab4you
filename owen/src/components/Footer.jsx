import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bg text-black mt-auto w-full md:fixed md:bottom-0 md:left-0">
      <div className="container mx-auto p-4 text-center">
        &copy; {new Date().getFullYear()} Collab4You. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
