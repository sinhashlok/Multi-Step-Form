import { useDispatch } from "react-redux";
import GoBackBtn from "./GoBackBtn";
import NextBtn from "./NextBtn";
import { nextPage, prevPage } from "../utils/trackerSlice";
import Navigator from "./Navigator";

const Summary = () => {
  const dispatch = useDispatch();
  const handleGoBackClick = () => {
    dispatch(prevPage());
  };
  const handleNextClick = () => {
    // dispatch(nextPage());
  };
  return (
    <div className="flex flex-col md:ml-52 md:mt-20">
      <h1 className="font-ubuntuD text-[28px] md:text-[56px] text-[#02295a]">
        Finishing up
      </h1>
      <p className="font-ubuntuN text-[18px] md:text-[24px] text-[#9699ab]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col md:flex-row md:justify-between mt-10 md:mt-14"></div>
      <Navigator />
      {/* <div className="max-md:absolute flex flex-row justify-between md:mt-20 bg-white max-md:bottom-0 max-md:w-screen max-md:-ml-12 max-md:p-4">
        {<GoBackBtn handleClick={handleGoBackClick} />}
        <NextBtn handleClick={handleNextClick} />
      </div> */}
    </div>
  );
};

export default Summary;
