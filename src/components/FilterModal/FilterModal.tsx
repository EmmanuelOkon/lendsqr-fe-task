import "./FilterModal.scss";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import calender from "../../assets/icons/calender.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../logic/action/types";
import { setModalFilter } from "../../logic/action";

interface FilterModalProps {
  filterModal: any;
  setFilterModal: any;
  filterRef: any;
}
const FilterModal = (props: FilterModalProps) => {
  const data: any = useLoaderData();
  const [startDate, setStartDate] = useState();
  const { filterModal, setFilterModal, filterRef } = props;
  const uniqueOrgs = [
    ...new Set(data.map((item: any) => item.orgName as string)),
  ];
  const statuses = ["Active", "Inactive", "Pending", "Blacklisted"];

  const dispatch = useDispatch();
  const { org, username, email, status, phoneNumber } = useSelector(
    (state: RootState) => state.dashboardReducer.modalFilter
  );

  const handleFilter = () => {
    const formData = { org, username, email, status, phoneNumber };
    dispatch(setModalFilter(formData));
    setFilterModal(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        filterModal &&
        filterRef.current &&
        !filterRef.current.contains(e.target)
      ) {
        setFilterModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterModal]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(
      setModalFilter({
        ...{ org, username, email, status, phoneNumber },
        [name]: value,
      })
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(
      setModalFilter({
        ...{ org, username, email, status, phoneNumber },
        [name]: value,
      })
    );
  };
  return (
    <div className="filter-container" ref={filterRef}>
      <div className="single-filter">
        <p className="text org">Organization</p>
        <select className="select" name="org" onChange={handleSelectChange}>
          <option value={""} className="option">
            Select
          </option>
          {uniqueOrgs.map((org: any) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      <div className="single-filter">
        <p className="text">Username</p>
        <input
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="User"
          className="input"
        />
      </div>

      <div className="single-filter">
        <p className="text">Email</p>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          className="input"
        />
      </div>

      <div className="date">
        <p className="text">Date</p>
        <div className="date-input-container">
          <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            wrapperClassName="datePicker"
            placeholderText="Date"
          />
          <img src={calender} alt={`${calender} icon`} />
        </div>
      </div>

      <div className="single-filter">
        <p className="text">Phone Number</p>
        <input
          type="text"
          className="input"
          name="phoneNumber"
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
      </div>

      <div className="single-filter">
        <p className="text org">Status</p>
        <select className="select" name="status" onChange={handleSelectChange}>
          <option value={""} className="option">
            Select
          </option>
          {statuses.map((org: any) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-actions">
        <button className="reset-btn">Reset</button>
        <button className="filter-btn" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
