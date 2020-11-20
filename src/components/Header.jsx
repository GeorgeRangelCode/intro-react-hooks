import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const HandleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type="button" onClick={HandleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
