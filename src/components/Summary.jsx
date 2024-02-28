import { useDispatch, useSelector } from "react-redux";
import GoBackBtn from "./GoBackBtn";
import NextBtn from "./NextBtn";
import { changePage, prevPage } from "../utils/trackerSlice";
import Navigator from "./Navigator";

import { planData, addOnData } from "../utils/constants";

const Summary = () => {
  const dispatch = useDispatch();
  const tenure = useSelector((state) => state.billingCycle.tenure);
  const planId = useSelector((state) => state.plan.planId);
  const addOns = useSelector((state) => state.addOns.addOnId);
  const selectedAddOns = Object.keys(addOns).filter((key) => addOns[key]);
  const totalCalc = () => {
    let total = 0;
    if (tenure === 1) {
      total += planId === 1 ? 9 : planId === 2 ? 12 : 15;
      if (addOns.id1) total += 1;
      if (addOns.id2) total += 2;
      if (addOns.id3) total += 2;
    } else {
      total += planId === 1 ? 90 : planId === 2 ? 120 : 150;
      if (addOns.id1) total += 10;
      if (addOns.id2) total += 20;
      if (addOns.id3) total += 20;
    }
    return total;
  };
  const total = totalCalc();

  const handleChangeClick = () => {
    dispatch(changePage());
  };

  const handleGoBackClick = () => {
    dispatch(prevPage());
  };
  const handleNextClickPageFour = () => {};

  return (
    <div className="flex flex-col md:ml-52 md:mt-20">
      <h1 className="font-ubuntuD text-[28px] md:text-[32px] text-[#02295a]">
        Finshing up
      </h1>
      <p className="font-ubuntuN text-[18px] text-[#9699ab]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col mt-10 md:mt-14">
        <div className="bg-[#f0f6ff] flex-col p-4 md:p-6 rounded-lg">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <h1 className="font-ubuntuD text-[16px] md:text-[18px] text-[#02295a]">
                {planData[planId - 1].name} (
                {tenure === 1 ? "Monthly" : "Yearly"})
              </h1>
              <div
                className="underline font-ubuntuN text-[14px] md:text-[16px] text-[#9699ab] cursor-pointer"
                onClick={handleChangeClick}
              >
                Change
              </div>
            </div>
            <div className="text-[#02295a] font-ubuntuD text-[16px] md:text-[18px]">
              ${planData[planId - 1].price}/{tenure === 1 ? "mo" : "yr"}
            </div>
          </div>
          <hr className="my-4 md:my-6" />
          {selectedAddOns.map((id) => {
            const data = () => {
              if (id === "id1") return addOnData[0];
              if (id === "id2") return addOnData[1];
              if (id === "id3") return addOnData[2];
            };
            const res = data();
            return (
              <div
                key={res.id}
                className="flex flex-row justify-between items-center mb-4"
              >
                <h1 className="font-ubuntuN text-[14px] md:text-[16px] text-[#9699ab]">
                  {res.name}
                </h1>
                <div className="font-ubuntuN text-[14px] md:text-[16px] text-[#02295a]">
                  ${res.price}/{tenure === 1 ? "mo" : "yr"}
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-4 md:p-6 mt-2 md:mt-4 flex flex-row justify-between">
          <p className="font-ubuntuN text-[14px] md:text-[16px] text-[#9699ab]">
            Total (per {tenure === 1 ? "month" : "year"})
          </p>
          <p className="text-[18px] md:text-[24px] text-[#473dff] font-ubuntuD">
            +${total}/{tenure === 1 ? "mo" : "yr"}
          </p>
        </div>
      </div>
      <Navigator
        onClickPageFour={handleNextClickPageFour}
        nextText={"Confirm"}
      />
      <div className="hidden md:flex flex-row justify-between md:mt-20 bg-white max-md:bottom-0 max-md:w-screen max-md:-ml-12 max-md:p-4">
        {<GoBackBtn handleClick={handleGoBackClick} />}
        <NextBtn handleClick={handleNextClickPageFour} nextText={"Confirm"} />
      </div>
    </div>
  );
};

export default Summary;
