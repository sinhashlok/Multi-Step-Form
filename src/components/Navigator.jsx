import { useDispatch, useSelector } from "react-redux";
import { prevPage } from "../utils/trackerSlice";

const Navigator = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.tracker.page);
  const handleGoBackClick = () => {
    dispatch(prevPage());
  };

  const handleNextClick = () => {
    if (page === 1) {
    }
  };

  return (
    <div className="absolute z-0">
      {page >= 2 && (
        <button
          className="max-md:hidden cursor-pointer md:mt-[650px] md:ml-[620px] p-2 md:p-2 md:py-3 text-[16px] md:text-[18px] text-[#9699ab] hover:text-[#02295a] rounded-lg font-ubuntuN"
          onClick={handleGoBackClick}
        >
          Go Back
        </button>
      )}
      <button
        className={`max-md:hidden bg-[#02295a] hover:bg-[#473dff] cursor-pointer md:mt-[650px] ${
          page >= 2 ? "md:ml-[430px]" : "md:ml-[1130px]"
        } p-2 md:p-2 md:py-3 text-[16px] md:text-[18px] text-[#f0f6ff] rounded-lg font-ubuntuN`}
        onClick={handleNextClick}
      >
        Next Step
      </button>
    </div>
  );
};

export default Navigator;
