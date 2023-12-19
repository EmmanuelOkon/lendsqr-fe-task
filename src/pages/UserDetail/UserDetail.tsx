import "./UserDetail.scss";
import back from "../../assets/icons/back_button.png";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import UserActionButton from "../../components/UserActionButton/UserActionButton";
import { MdStarOutline, MdStar } from "react-icons/md";
import UserDetailsNav from "../../components/UserDetailsNav/UserDetailsNav";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import { randomBank } from "../../utils/utils";
import Wrapper from "../../components/wrapper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../logic/action/types";
import { setUserDetailNav } from "../../logic/action";

const UserDetail = () => {
  const navigation = useNavigation();
  const { state } = navigation;
  const data: any = useLoaderData();
  const { userDetailNav } = useSelector((state: RootState) => state.dashboardReducer);

  const dispatch = useDispatch();
  if (state === "loading") {
    return (
      <Wrapper className="loader-container">
        <div data-testid="loader">
          <ClipLoader color="#39cdcc" size={"5rem"} />
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper className="user-detail">
        <div data-testid="user-content">
          <div className="go-back" data-testid="go-back">
            <Link to="/dashboard">
              <img
                src={back}
                alt="back icon"
                className="back-icon"
                onClick={() => localStorage.removeItem("user")}
              />
            </Link>
            <p className="back-text">Back to Users</p>
          </div>

          <div className="user-action">
            <p className="text">User Details</p>
            <div className="blacklist-and-activate">
              <UserActionButton title="Blacklist" />
              <UserActionButton title="Activate" />
            </div>
          </div>
          <div className="primary-information">
            <div className="user-info-display">
              <img
                src={data?.profile?.avatar ? data?.profile?.avatar : ""}
                alt=""
                className="user-image"
              />

              <div className="name-and-bvn">
                <p className="name">{`${data?.profile?.firstName} ${data?.profile?.lastName}`}</p>
                <p className="bvn">{data?.profile?.bvn}</p>
              </div>

              <div className="bar name-bar-hidden"></div>

              <div className="users-tier">
                <p className="name">User's Tier</p>
                <div className="stars">
                  <MdStar size={"1rem"} color="#E9B200" />
                  <MdStarOutline size={"1rem"} color="#E9B200" />
                  <MdStarOutline size={"1rem"} color="#E9B200" />
                </div>
              </div>

              <div className="bar user-tier-bar-hidden"></div>

              <div className="bank-and-amount">
                <p className="amount">₦{data?.accountBalance?.toLocaleString()}</p>
                <p className="bank">
                  {data?.accountNumber}/{randomBank}
                </p>
              </div>
            </div>
            {/* <p>General Detais</p> */}
            <div className="user-info-nav">
              <div onClick={() => dispatch(setUserDetailNav("General Details"))}>
                <UserDetailsNav title={"General Details"} active={userDetailNav} />
              </div>
              <div onClick={() => dispatch(setUserDetailNav("Documents"))}>
                <UserDetailsNav title={"Documents"} active={userDetailNav} />
              </div>

              <div onClick={() => dispatch(setUserDetailNav("Bank Details"))}>
                <UserDetailsNav title={"Bank Details"} active={userDetailNav} />
              </div>

              <div onClick={() => dispatch(setUserDetailNav("Loans"))}>
                <UserDetailsNav title={"Loans"} active={userDetailNav} />
              </div>

              <div onClick={() => dispatch(setUserDetailNav("Savings"))}>
                <UserDetailsNav title={"Savings"} active={userDetailNav} />
              </div>

              <div onClick={() => dispatch(setUserDetailNav("App and Systems"))}>
                <UserDetailsNav title={"App and Systems"} active={userDetailNav} />
              </div>
            </div>
          </div>
          {userDetailNav === "General Details" ? (
            <div className="secondary-information">
              <InfoBlock gridColumns={5} header="Personal Information" />
              <InfoBlock gridColumns={4} header="Education and Employment" />
              <InfoBlock gridColumns={5} header="Socials" />
              <InfoBlock gridColumns={5} header="Guarantor" />
              <InfoBlock gridColumns={5} header="" last />
            </div>
          ) : (
            <div className="no-content">No contents to display</div>
          )}
        </div>
      </Wrapper>
    );
  }
};

export default UserDetail;
