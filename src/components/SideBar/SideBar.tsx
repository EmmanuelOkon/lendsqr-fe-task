import "./SideBar.scss";
import briefcase from "../../assets/icons/briefcase.png";
import dashboard from "../../assets/icons/home.png";
import users from "../../assets/icons/users.png";
import guarantors from "../../assets/icons/guarantors.png";
import loans from "../../assets/icons/loans.png";
import decisions from "../../assets/icons/decision-models.png";
import savings from "../../assets/icons/savings.png";
import requests from "../../assets/icons/loan-requests.png";
import whitelist from "../../assets/icons/whitelist.png";
import karma from "../../assets/icons/karma.png";
import transactions from "../../assets/icons/transactions.png";
import services from "../../assets/icons/services.png";
import settlements from "../../assets/icons/settlements.png";
import reports from "../../assets/icons/reports.png";
import audit from "../../assets/icons/audit.png";
import logout from "../../assets/icons/logout.png";
import preferences from "../../assets/icons/preferences.png";
import savingsProduct from "../../assets/icons/savings_products.png";
import feesAndCharges from "../../assets/icons/fees_and_charges.png";
import serviceAccount from "../../assets/icons/service_account.png";
import feesAndPricing from "../../assets/icons/fees_and_pricing.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import SideBarItem from "../SideBarItem/SideBarItem";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../logic/action/types";
import { setDashboardMenu } from "../../logic/action";
// import React, { useState } from 'react';

interface SideBarProps {
  userDetailsPage?: boolean;
  children?: React.ReactNode;
  testId?: string;
}
const sidebarItems = [
  {
    section: "CUSTOMERS",
    items: [
      {
        title: "Users",
        icon: users,
      },
      {
        title: "Guarantors",
        icon: guarantors,
      },
      {
        title: "Loans",
        icon: loans,
      },
      {
        title: "Decision Models",
        icon: decisions,
      },
      {
        title: "Savings",
        icon: savings,
      },
      {
        title: "Loan Requests",
        icon: requests,
      },
      {
        title: "Whitelist",
        icon: whitelist,
      },
      {
        title: "Karma",
        icon: karma,
      },
    ],
  },
  {
    section: "BUSINESSES",
    items: [
      {
        title: "Organization",
        icon: briefcase,
      },
      {
        title: "Loan Products",
        icon: requests,
      },
      {
        title: "Savings Products",
        icon: savingsProduct,
      },
      {
        title: "Fees and Charges",
        icon: feesAndCharges,
      },
      {
        title: "Transactions",
        icon: transactions,
      },
      {
        title: "Services",
        icon: services,
      },
      {
        title: "Service Account",
        icon: serviceAccount,
      },
      {
        title: "Settlements",
        icon: settlements,
      },
      {
        title: "Reports",
        icon: reports,
      },
    ],
  },
  {
    section: "SETTINGS",
    items: [
      {
        title: "Preferences",
        icon: preferences,
      },
      {
        title: "Fees and Pricing",
        icon: feesAndPricing,
      },
      {
        title: "Audit Logs",
        icon: audit,
      },
    ],
  },
];

const SideBar = (props: SideBarProps) => {
  const navigate = useNavigate();
  const { dashboardMenu } = useSelector(
    (state: RootState) => state.dashboardReducer
  );
  const dispatch = useDispatch();

  const handleItemClick = (itemTitle: string) => {
    dispatch(setDashboardMenu(itemTitle)); // Dispatch the setActive action
  };

  return (
    <div className="side-bar-container" data-testid="sidebar">
      <div className="switch-organization">
        <img src={briefcase} alt="briefcase icon" />
        <p className="text">Switch Organizations</p>
        <MdKeyboardArrowDown color="#213F7D" className="dropdown" />
      </div>
      <SideBarItem
        title="Dashboard"
        icon={dashboard}
        setActive={setDashboardMenu}
      />

      {sidebarItems.map((section) => {
        return (
          <div key={section.section}>
            <p className="title">{section.section}</p>
            <div className="grouping">
              {section.items.map((item) => (
                <div
                  onClick={() => handleItemClick(item.title)}
                  key={item.title}
                >
                  <SideBarItem
                    title={item.title}
                    icon={item.icon}
                    active={dashboardMenu}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {props.userDetailsPage && (
        <>
          <div className="divider"></div>

          <div>
            <div className="logout" onClick={() => navigate("/")}>
              <img src={logout} alt={`${logout} icon`} />
              <p className="">Logout</p>
            </div>

            <p className="version">v1.2.0</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
