import "./UsersInformation.scss";
import UsersCard from "../UsersCard/UsersCard";
import users from "../../assets/icons/users_icon.svg";
import activeUsers from "../../assets/icons/active_users.svg";
import usersWithLoans from "../../assets/icons/users_with_loans.svg";
import usersWithSavings from "../../assets/icons/users_with_savings.svg";

const UsersInformation = () => {
  const stats = [
    { name: "USERS", icon: users, amount: 2453 },
    { name: "ACTIVE USERS", icon: activeUsers, amount: 2453 },
    { name: "USERS WITH LOANS", icon: usersWithLoans, amount: 12453 },
    { name: "USERS WITH SAVINGS", icon: usersWithSavings, amount: 102453 }
  ];

  return (
    <div className="user-information-container">
     {stats.map((card, index) => (
       <UsersCard
          key={index}
          name={card.name}
          icon={card.icon}
          amount={card.amount}
        />
      ))}
    </div>
  );
};

export default UsersInformation;
