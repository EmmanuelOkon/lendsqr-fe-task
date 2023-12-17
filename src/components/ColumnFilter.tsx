import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState  } from "../logic/action/types";
interface ColumnFilterProps {
  column?: any;
  // name: string
}

const ColumnFilter = (props: ColumnFilterProps) => {
  const {
    org,
    username,
    email,
    status,
    phoneNumber,
  } = useSelector((state: RootState) => state.dashboardReducer.modalFilter);

  const { filterValue, setFilter, Header } = props.column;
  useEffect(() => {
    setFilter(
      Header === "Status"
        ? status
        : Header === "Organization"
        ? org
        : Header === "Username"
        ? username
        : Header === "Email"
        ? email
        : Header === "Phone Number"
        ? phoneNumber
        : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [org, username, email, status, phoneNumber]);
  return (
    <div>
      <input
        type="text"
        defaultValue={filterValue || ""}
        placeholder="search column"
      />
    </div>
  );
};

export default ColumnFilter;
