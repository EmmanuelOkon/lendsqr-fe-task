import "./UserDetailsPage.scss";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import UserDetail from "../UserDetail/UserDetail";
import { useEffect } from "react";

const UserDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data));
  }, [data, id]);

  return (
    <div>
      <SideBar userDetailsPage />
      <div className="user-detail-container">
        <Header />
        <UserDetail />
      </div>
    </div>
  );
};

export default UserDetails;
