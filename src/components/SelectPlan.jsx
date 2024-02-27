import Switch from "react-switch";

import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";
import advanced from "../assets/images/icon-advanced.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlan } from "../utils/planSlice";
import { nextPage, prevPage } from "../utils/trackerSlice";
import GoBackBtn from "./GoBackBtn";
import NextBtn from "./NextBtn";
import { planData } from "../utils/constants";

const SelectPlan = () => {
  const dispatch = useDispatch();
  const [tenure, setTenure] = useState(false);
  const [premium, setPremium] = useState(1);

  const handlePlanClick = (plan) => {
    setPremium(plan);
    console.log(plan);
  };
  const handleChange = () => {
    setTenure(!tenure);
  };
  const handleGoBackClick = () => {
    console.log("go back");
    dispatch(prevPage());
  };
  const handleNextClick = () => {
    if (premium === null) return;
    dispatch(setPlan({ plan: planData[premium - 1], tenure: tenure }));
    dispatch(nextPage());
  };

  return (
    <div className="flex flex-col md:ml-52 md:mt-20">
      <h1 className="font-ubuntuD text-[28px] md:text-[56px] text-[#02295a]">
        Select your plan
      </h1>
      <p className="font-ubuntuN text-[18px] md:text-[24px] text-[#9699ab]">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col md:flex-row md:justify-between md:mt-14">
        <button
          className={`flex md:w-1/3 md:mr-6 flex-row md:flex-col border text-left border-[#d6d9e6] mt-10 md:mt-0 p-4 pr-10 rounded-xl ${
            premium === 1 && "border-[#473dff] bg-[#f0f6ff]"
          } focus:border-[#473dff] focus:bg-[#f0f6ff]`}
          onClick={() => handlePlanClick(planData[0].id)}
        >
          <img src={arcade} alt="arcade-plan" className="w-12 mr-4 md:m-0" />
          <div className="flex flex-col md:mt-16">
            <h1 className="text-[#02295a] font-ubuntuD text-[18px] md:text-[20px]">
              {planData[0].name}
            </h1>
            <p className="text-[14px] md:text-[16x] text-[#9699ab] font-ubuntuN">
              ${tenure === planData[0].yearly ? "9/mo" : "90/yr"}
            </p>
            <p className="text-[12px] font-ubuntuM text-[#02295a]">
              {tenure === planData[0].yearly && "2 months free"}
            </p>
          </div>
        </button>
        <button
          className={`flex md:w-1/3 md:mr-6 flex-row md:flex-col border text-left border-[#d6d9e6] mt-4 md:mt-0 p-4 pr-10 rounded-xl ${
            premium === 2 && "border-[#473dff] bg-[#f0f6ff]"
          } focus:border-[#473dff] focus:bg-[#f0f6ff]`}
          onClick={() => handlePlanClick(planData[1].id)}
        >
          <img src={advanced} alt="pro-plan" className="w-12 mr-4 md:mr-0" />
          <div className="flex flex-col md:mt-16">
            <h1 className="text-[#02295a] font-ubuntuD text-[18px] md:text-[20px]">
              {planData[1].name}
            </h1>
            <p className="text-[14px] md:text-[16x] text-[#9699ab] font-ubuntuN">
              ${tenure === planData[1].yearly ? "12/mo" : "120/yr"}
            </p>
            <p className="text-[12px] font-ubuntuM text-[#02295a]">
              {tenure === planData[1].yearly && "2 months free"}
            </p>
          </div>
        </button>
        <button
          className={`flex md:w-1/3 md:mr-6 flex-row md:flex-col border text-left border-[#d6d9e6] mt-4 md:mt-0 p-4 pr-10 rounded-xl ${
            premium === 3 && "border-[#473dff] bg-[#f0f6ff]"
          } focus:border-[#473dff] focus:bg-[#f0f6ff]`}
          onClick={() => handlePlanClick(planData[2].id)}
        >
          <img src={pro} alt="advanced-plan" className="w-12 mr-4 md:mr-0" />
          <div className="flex flex-col md:mt-16">
            <h1 className="text-[#02295a] font-ubuntuD text-[18px] md:text-[20px]">
              {planData[2].name}
            </h1>
            <p className="text-[14px] md:text-[16x] text-[#9699ab] font-ubuntuN">
              ${tenure === planData[2].yearly ? "15/mo" : "150/yr"}
            </p>
            <p className="text-[12px] font-ubuntuM text-[#02295a]">
              {tenure === planData[2].yearly && "2 months free"}
            </p>
          </div>
        </button>
      </div>
      <div className="flex justify-center bg-[#f0f6ff] w-full p-3 rounded-lg mt-4 md:mt-8">
        <div
          className={`text-[16px] ${
            tenure === 0 ? "text-[#9699ab]" : "text-[#02295a]"
          } font-ubuntuM mr-3 md:mr-4`}
        >
          Monthly
        </div>
        <Switch
          onChange={handleChange}
          checked={tenure === true}
          handleDiameter={18}
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#02295a"
          onColor="#02295a"
          offHandleColor="#ffffff"
          onHandleColor="#ffffff"
        />
        <div
          className={`text-[16px] ${
            tenure === 1 ? "text-[#9699ab]" : "text-[#02295a]"
          } font-ubuntuM ml-3 md:ml-4`}
        >
          Yearly
        </div>
      </div>
      <div className="max-md:absolute flex flex-row justify-between md:mt-20 bg-white max-md:bottom-0 max-md:w-screen max-md:-ml-12 max-md:p-4">
        {<GoBackBtn handleClick={handleGoBackClick} />}
        <NextBtn handleClick={handleNextClick} />
      </div>
    </div>
  );
};

export default SelectPlan;
