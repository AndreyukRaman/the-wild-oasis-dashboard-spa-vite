import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

import {useSimple} from "../context/SimpleContext.jsx";



function Dashboard() {
    const {games, setGames} = useSimple();

    const handleClick = (e) => {
        setGames(prev => 5);


    }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
        <div> my best games {JSON.stringify(games)}</div>
        <button onClick={(e) =>handleClick(e)}>Change</button>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
