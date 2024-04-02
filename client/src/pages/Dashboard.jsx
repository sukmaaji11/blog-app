import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DSidebar from "../components/DSidebar";
import DProfile from "../components/DProfile";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);
  return (
    <div>
      <div className="">
        {/*Sidebar*/}
        <DSidebar />
      </div>
      {/*Profile */}
      {tab === "profile" && <DProfile />}
    </div>
  );
}
