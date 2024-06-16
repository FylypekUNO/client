import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 border-b border-black">
      <div className="text-lg flex justify-center items-center px-2 py-1 text-blue-500">
        2000 pt
      </div>
      <div className="text-lg font-semibold flex justify-center items-center px-2 text-blue-500">
        Profile
        <div className="w-12 h-12 rounded-full overflow-hidden ml-2">
          <img
            src=""
            alt="Profile"
            className="w-full h-full object-cover bg-gray-300 text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
