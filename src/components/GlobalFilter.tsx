import { useEffect } from "react";
import { useSelector } from "react-redux";

interface GlobalFilterProps {
  filter: any;
  setFilter: any;
}

export const GlobalFilter = (props: GlobalFilterProps) => {
  const { setFilter } = props;
  const globalFilter = useSelector( 
    (state: any) => state.dashboardReducer.globalFilter
  );

  useEffect(() => {
    setFilter(globalFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalFilter]);

  return (
    <div>
      <span>Search Table</span>
      <input
        type="text"
        defaultValue={globalFilter || ""}
        placeholder="global filter"
      />
    </div>
  );
};

export default GlobalFilter;
