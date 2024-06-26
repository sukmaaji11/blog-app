import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiUser,
  HiArrowSmRight,
  HiPencil,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function DSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);
  //Handle Signout
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          {/*Dashboard*/}
          <Link to="/dashboard?tab=dashboard">
            {" "}
            <Sidebar.Item
              active={tab === "dashboard"}
              icon={HiChartPie}
              labelColor="dark"
              as="div"
            >
              Dashboard
            </Sidebar.Item>
          </Link>

          {/*Create Post*/}
          <Link to="/dashboard?tab=create-post">
            {" "}
            <Sidebar.Item
              active={tab === "create-post"}
              icon={HiPencil}
              labelColor="dark"
              as="div"
            >
              Create Post
            </Sidebar.Item>
          </Link>

          {/*Post*/}
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              {" "}
              <Sidebar.Item
                active={tab === "posts"}
                icon={HiDocumentText}
                labelColor="dark"
                as="div"
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}

          {/*Comment*/}
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=comments">
              {" "}
              <Sidebar.Item
                active={tab === "comments"}
                icon={HiAnnotation}
                labelColor="dark"
                as="div"
              >
                Comments
              </Sidebar.Item>
            </Link>
          )}

          {/*User*/}
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=users">
              {" "}
              <Sidebar.Item
                active={tab === "users"}
                icon={HiOutlineUserGroup}
                labelColor="dark"
                as="div"
              >
                User
              </Sidebar.Item>
            </Link>
          )}

          {/*Create Profile*/}
          <Link to="/dashboard?tab=profile">
            {" "}
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? "Admin" : "User"}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>

          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer"
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
