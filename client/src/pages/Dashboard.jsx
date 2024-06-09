import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DSidebar from "../components/DSidebar";
import DProfile from "../components/DProfile";
import DCreatePost from "../components/DCreatePost";
import DPost from "../components/DPost";
import DUser from "../components/DUser";
import DashComments from "../components/DComments";
import DComments from "../components/DComments";
import DDashboard from "../components/DDashboard";

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
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/*Sidebar*/}
        <DSidebar />
      </div>
      {/*Dashboard */}
      {tab === "dashboard" && <DDashboard />}
      {/*Create Post */}
      {tab === "create-post" && <DCreatePost />}
      {/*Data Post */}
      {tab === "posts" && <DPost />}
      {/*Comment */}
      {tab === "comments" && <DComments />}
      {/*User */}
      {tab === "users" && <DUser />}
      {/*Profile */}
      {tab === "profile" && <DProfile />}
    </div>
  );
}
