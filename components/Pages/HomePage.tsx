import React from "react";
import TopMenu from "../MainPage/TopMenu";
import MissionsInYourArea from "../MainPage/MissionsInYourArea";
import InnerHomeMissionsPage from "../InnerMainPages/InnerHomeMissionsPage";
import InviteAFriend from "../MainPage/InviteAFriend";
import Tabs from "../TabsSystem/Tabs";
import InnerHomeProfilePage from "../InnerMainPages/InnerHomeProfilePage";
import InnerHomeDashboardPage from "../InnerMainPages/InnerHomeDashboardPage";

const HomePage = () => {
  const [activeTab, setActiveTab] = React.useState<string>("Missions");

  return (
    <main className="flex-grow overflow-y-auto overflow-x-hidden bg-gray-200 pb-2 min-h-80 space-y-2">
      <TopMenu
        tabs={["Dashboard", "Missions", "Profile"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Tabs
        tabs={{
          Dashboard: <InnerHomeDashboardPage />,
          Missions: <InnerHomeMissionsPage />,
          Profile: <InnerHomeProfilePage />,
        }}
        activeTab={activeTab}
      />
    </main>
  );
};

export default HomePage;
