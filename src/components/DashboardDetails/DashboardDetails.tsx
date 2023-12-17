import { useNavigation } from "react-router-dom";
import UsersInformation from "../UsersInformation/UsersInformation";
import UsersTable from "../UsersTable/UsersTable";
import "./DashboardDetails.scss";
import { ClipLoader } from "react-spinners";
import Wrapper from "../wrapper";
import { useSelector } from "react-redux";
import { RootState } from "../../logic/action/types";

const DashboardDetails = () => {
  const navigation = useNavigation();
  const { state } = navigation;
  const dashboardMenu = useSelector(
    (state: RootState) => state.dashboardReducer
  );

  if (state === "loading") {
    return (
      <Wrapper className="loader-container">
        <ClipLoader color="#39cdcc" size={"5rem"} />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        {dashboardMenu.dashboardMenu === "Users" ? (
          <div data-testid="dashboard-content" className="right-container">
            <p className="heading">Users</p>
            <UsersInformation />
            <UsersTable />
          </div>
        ) : (
          <div className="no-content">No Data Available to Display</div>
        )}
      </Wrapper>
    );
  }
};

export default DashboardDetails;
