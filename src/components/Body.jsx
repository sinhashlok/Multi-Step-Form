import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Panel from "./Panel";
import { useSelector } from "react-redux";
import Navigator from "./Navigator";

const Body = () => {
  const page = useSelector((state) => state.tracker.page);

  return (
    <div className="flex flex-col md:flex-row md:m-5 h-screen max-md:bg-[#f0f6ff]">
      <Panel />
      <div className="bg-white max-md:-mt-10 max-md:w-[90%] max-md:mx-auto max-md:p-6 rounded-2xl max-md:pt-8 max-md:pb-10 w-1/2">
        {page === 1 && <PersonalInfo />}
        {page === 2 && <SelectPlan />}
        {page === 3 && <AddOns />}
        {page === 4 && <Summary />}
      </div>
      {/* <Navigator /> */}
    </div>
  );
};

export default Body;
