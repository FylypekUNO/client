import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center sticky top-0 z-50 bg-white p-4 border-b border-black">
      <div className="text-lg flex justify-center items-center px-2 py-1 text-blue-500">
        2000 pt
      </div>
      <div className="text-lg font-semibold flex justify-center items-center px-2 text-blue-500">
        Profile
      </div>
    </header>
  );
};

export default Header;
