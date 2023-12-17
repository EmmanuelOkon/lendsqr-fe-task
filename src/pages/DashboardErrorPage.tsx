import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Wrapper from "../components/wrapper";
const DashboardErrorPage = () => {
  return (
    <Wrapper>
      <Header />
      <div className="error-body">
        <SideBar />
        <h2>
          {"Something went wrong, but don’t fret"}
          <br />
          <br />
          {"let’s give it another shot check your network and refresh."}
        </h2>
      </div>
    </Wrapper>
  );
};

export default DashboardErrorPage;
