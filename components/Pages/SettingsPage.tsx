import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <div className="w-full max-w-lg mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Notifications Settings</h2>
          <div className="w-full border-b-2 border-gray-300 mb-4"></div>
          <div className="flex items-center justify-between py-2 select-none">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 select-none"
            />
          </div>
          <div className="flex items-center justify-between py-2 select-none">
            <span>Push Notifications</span>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 select-none"
            />
          </div>
          <div className="flex items-center justify-between py-2 select-none">
            <span>SMS Notifications</span>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 select-none"
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Policies</h2>
          <div className="w-full border-b-2 border-gray-300 mb-4"></div>
          <div className="flex items-center justify-between py-2">
            <span>Privacy Policy</span>
            <button className="text-blue-500 hover:underline">View</button>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>Terms of Service</span>
            <button className="text-blue-500 hover:underline">View</button>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>Cookie Policy</span>
            <button className="text-blue-500 hover:underline">View</button>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-8">
          <p>App Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
