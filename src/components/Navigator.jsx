import { useDispatch, useSelector } from "react-redux";
import { prevPage } from "../utils/trackerSlice";

const Navigator = ({
  onClickPageOne,
  onClickPageTwo,
  onClickPageThree,
}) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.tracker.page);
  const handleGoBackClick = () => {
    dispatch(prevPage());
  };

  const handleNextClick = () => {
    if (page === 1) onClickPageOne();
    if (page === 2) onClickPageTwo();
    if (page === 3) onClickPageThree();
  };

  return (
    <div className="hidden max-md:flex fixed flex-row md:ml-[635px] max-md:w-full left-0 bg-white z-10 max-md:p-4 justify-between bottom-0 md:bottom-52 ">
      {page >= 2 && (
        <button
          className="cursor-pointer md:mt-[0px] md:ml-[0px] p-2 md:p-2 md:py-3 text-[14px] md:text-[18px] text-[#9699ab] hover:text-[#02295a] rounded-lg font-ubuntuN"
          onClick={handleGoBackClick}
        >
          Go Back
        </button>
      )}
      <button
        className={`bg-[#02295a] hover:bg-[#473dff] cursor-pointer md:mt-[0px] ml-auto p-2 md:p-2 md:py-3 text-[14px] md:text-[18px] text-[#f0f6ff] rounded-lg font-ubuntuN`}
        onClick={handleNextClick}
      >
        Next Step
      </button>
    </div>
  );
};

export default Navigator;
