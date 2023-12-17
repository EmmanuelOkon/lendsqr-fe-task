import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import "./Dashboard.scss";
import DashboardDetails from "../../components/DashboardDetails/DashboardDetails";

const DashboardPage = () => {
  return (
    <div>
      <SideBar />
      <div className="body">
        <Header />
        <DashboardDetails />
      </div>
    </div>
  );
};

export default DashboardPage;
