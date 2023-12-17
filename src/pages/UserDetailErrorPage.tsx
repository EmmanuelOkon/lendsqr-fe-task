import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

import "./Dashboard/Dashboard.scss";
import { useNavigate, useNavigation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const UserDetailErrorPage = () => {
  const navigation = useNavigation();
  const { state } = navigation;
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="error-body">
        <SideBar />

        {state === "loading" ? (
          <div className="loader-container">
            <ClipLoader color="#39cdcc" size={"5rem"} />
          </div>
        ) : (
          <div className="test">
            <h2>
              User information currently unavailable. Please check your network
              and refresh.
            </h2>
            <br />
            <button onClick={() => navigate("/dashboard")}>
              Go Back to Users
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailErrorPage;
