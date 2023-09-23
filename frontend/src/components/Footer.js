import React from "react";

export default function Footer({ isDarkMode }) {
  return (
    <>
      <div className={`d-flex p-3 ${isDarkMode ? "bg-dark text-white" : "bg-white"} justify-content-center`}>
        Made with ❤️ by CSI
      </div>
    </>
  );
}
