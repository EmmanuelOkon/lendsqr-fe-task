import "./Headeer.scss";
import logo from "../../assets/dashboard-logo.svg";
import profileImage from "../../assets/profile-picture.svg";
import { MdOutlineSearch, MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../logic/action/types";
import { setGlobalFilter } from "../../logic/action";
import { useState } from "react";
import { FaBell, FaFile, FaSearch, FaUsers } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalFilter = useSelector(
    (state: RootState) => state.dashboardReducer.globalFilter
  );
  const [isNavExpanded, setIsNavExpanded] = useState<Boolean>(false);
  return (
    <header className="header" data-testid="header">
      <div className="logo-section">
        <div className="logo-image">
          <img src={logo} alt="lendsqr logo" onClick={() => navigate("/")} />
        </div>
      </div>

      <div className={`list`}>
        <div className="search-container">
          <div className="search-input">
            <input
              type="text"
              value={globalFilter || ""}
              placeholder="Search for anything"
              onChange={(e) => dispatch(setGlobalFilter(e.target.value))}
            />
          </div>
          <div className="green-search-icon">
            <MdOutlineSearch color="white" size={"1rem"} />
          </div>
        </div>
        <div className="navigation-menu">
          <p className="docs">Docs</p>
          <div className="icon">
            <IoIosNotificationsOutline size={"1.8rem"} color={"#213f7d"} />
          </div>
          <div
            className="profile"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <img
              className="profile-image"
              src={profileImage}
              alt="profile-img"
            />
            <div className="action-btn">
              <p className="username">Adedeji</p>
              <div className="drop">
                <MdOutlineArrowDropDown size={"1.2rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`dropdown-menu ${isNavExpanded ? "show" : "hidden"}`}>
        <div className="item">
          <FaUsers size={"1.2rem"} />
          <span className="text">Users</span>
        </div>
        <div className="item">
          <FaBell size={"1.2rem"} />
          <span className="text">Notifications</span>
        </div>
        <div className="item">
          <FaFile size={"1.2rem"} />
          <span className="text">Docs</span>
        </div>
        <div className="item">
          <FaSearch size={"1.2rem"} />
          <span className="text">Search</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
