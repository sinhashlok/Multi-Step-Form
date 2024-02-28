import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../utils/trackerSlice";
import GoBackBtn from "./GoBackBtn";
import NextBtn from "./NextBtn";
import { addOnData } from "../utils/constants";
import { toggleItem } from "../utils/addOnsSlice";
import { useState } from "react";
import Navigator from "./Navigator";

const AddOns = () => {
  const dispatch = useDispatch();
  const billingCycle = useSelector((state) => state.billingCycle.tenure);
  const addOns = useSelector((state) => state.addOns.addOnId);
  const [error, setError] = useState(false);

  const handleAddOnClick = (id) => {
    switch (id) {
      case 1:
        dispatch(toggleItem({ id1: !addOns.id1 }));
        break;
      case 2:
        dispatch(toggleItem({ id2: !addOns.id2 }));
        break;
      case 3:
        dispatch(toggleItem({ id3: !addOns.id3 }));
        break;
      default:
        break;
    }
  };

  const handleGoBackClick = () => {
    dispatch(prevPage());
  };
  const handleNextClickPageThree = () => {
    const selectedAddOns = Object.keys(addOns).filter((key) => addOns[key]);
    if (selectedAddOns.length === 0) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(nextPage());
  };

  return (
    <div className="flex flex-col md:ml-52 md:mt-20">
      <h1 className="font-ubuntuD text-[28px] md:text-[32px] text-[#02295a]">
        Pick add-ons
      </h1>
      <p className="font-ubuntuN text-[18px] text-[#9699ab]">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col mt-10 md:mt-14">
        {error && (
          <label className="text-[#ed3548] text-[14px] md:text-[18px] text-right font-ubuntuN">
            Select atleast one.
          </label>
        )}
        <button
          className={`flex w-full flex-row md:flex-col border text-left p-4 rounded-xl ${
            addOns.id1 ? "border-[#473dff] bg-[#f0f6ff]" : "border-[#d6d9e6]"
          }`}
          onClick={() => handleAddOnClick(addOnData[0].id)}
        >
          <div className="flex flex-row px-3 py-1 items-center w-full">
            <input
              type="checkbox"
              className="mr-4 md:mr-6 w-5 h-5 accent-[#473dff]"
              checked={addOns.id1 ? true : false}
            />
            <div className="flex flex-col">
              <h1 className="text-[#02295a] font-ubuntuD  text-[16px] md:text-[20px]">
                {addOnData[0].name}
              </h1>
              <p className="text-[12px] md:text-[16x] text-[#9699ab] font-ubuntuN">
                {addOnData[0].description}
              </p>
            </div>
            <div className="text-[12px] md:text-[14px] font-ubuntuM text-[#02295a] ml-auto">
              +${addOnData[0].price}/{billingCycle === 1 ? "mo" : "yr"}
            </div>
          </div>
        </button>
        <button
          className={`flex w-full flex-row md:flex-col border text-left mt-4 p-4 rounded-xl ${
            addOns.id2 ? "border-[#473dff] bg-[#f0f6ff]" : "border-[#d6d9e6]"
          }`}
          onClick={() => handleAddOnClick(addOnData[1].id)}
        >
          <div className="flex flex-row px-3 py-1 items-center w-full">
            <input
              type="checkbox"
              className="mr-4 md:mr-6 w-5 h-5 accent-[#473dff]"
              checked={addOns.id2 ? true : false}
            />
            <div className="flex flex-col">
              <h1 className="text-[#02295a] font-ubuntuD text-[16px] md:text-[20px]">
                {addOnData[1].name}
              </h1>
              <p className="text-[12px] md:text-[16x] text-[#9699ab] font-ubuntuN">
                {addOnData[1].description}
              </p>
            </div>
            <div className="text-[12px] font-ubuntuM text-[#02295a] ml-auto">
              +${addOnData[1].price}/{billingCycle === 1 ? "mo" : "yr"}
            </div>
          </div>
        </button>
        <button
          className={`flex w-full flex-row md:flex-col border text-left mt-4 p-4 rounded-xl ${
            addOns.id3 ? "border-[#473dff] bg-[#f0f6ff]" : "border-[#d6d9e6]"
          }`}
          onClick={() => handleAddOnClick(addOnData[2].id)}
        >
          <div className="flex flex-row px-3 py-1 items-center w-full">
            <input
              type="checkbox"
              className="mr-4 md:mr-6 w-5 h-5 accent-[#473dff]"
              checked={addOns.id3 ? true : false}
            />
            <div className="flex flex-col">
              <h1 className="text-[#02295a] font-ubuntuD text-[16px] md:text-[20px]">
                {addOnData[2].name}
              </h1>
              <p className="text-[12px] md:text-[16x] text-[#9699ab] font-ubuntuN">
                {addOnData[2].description}
              </p>
            </div>
            <div className="text-[12px] font-ubuntuM text-[#02295a] ml-auto">
              +${addOnData[2].price}/{billingCycle === 1 ? "mo" : "yr"}
            </div>
          </div>
        </button>
      </div>
      <Navigator onClickPageThree={handleNextClickPageThree} />
      <div className="hidden md:flex flex-row justify-between md:mt-20 bg-white max-md:bottom-0 max-md:w-screen max-md:-ml-12 max-md:p-4">
        {<GoBackBtn handleClick={handleGoBackClick} />}
        <NextBtn handleClick={handleNextClickPageThree} />
      </div>
    </div>
  );
};

export default AddOns;
