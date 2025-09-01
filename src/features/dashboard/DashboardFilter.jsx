import Filter from "../../ui/Filter";
import {useSimple} from "../../context/SimpleContext.jsx";

function DashboardFilter() {
    const {games} = useSimple()

  return (
      <>
          <div>{JSON.stringify(games)}</div>
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "Last 7 days" },
        { value: "30", label: "Last 30 days" },
        { value: "90", label: "Last 90 days" },
      ]}
    />
      </>
  );
}

export default DashboardFilter;
