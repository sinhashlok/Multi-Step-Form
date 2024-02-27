import { useSelector } from "react-redux";

const Panel = () => {
  const page = useSelector((state) => state.tracker.page);

  return (
    <div className="h-[190px] md:h-auto bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] md:bg-[url('/src/assets/images/bg-sidebar-desktop.svg')] bg-contain bg-no-repeat w-[100] md:w-1/4">
      <div className="flex flex-row md:flex-col justify-around mt-14 mx-8 md:m-14">
        <div className="flex flex-row md:mb-10">
          <p
            className={`${
              page === 1
                ? "bg-[#bfe2fd]"
                : "border border-[#d6d9e6] text-[#d6d9e6]"
            } text-xl rounded-full py-2 px-[16px] md:px-[17px] font-ubuntuN md:mr-4`}
          >
            1
          </p>
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-ubuntuN text-[#d6d9e6]">STEP 1</p>
            <p className="font-ubuntuM text-white">YOUR INFO</p>
          </div>
        </div>
        <div className="flex flex-row md:mb-10">
          <p
            className={`${
              page === 2
                ? "bg-[#bfe2fd]"
                : "border border-[#d6d9e6] text-[#d6d9e6]"
            } text-xl rounded-full py-2 px-[16px] md:px-[17px] font-ubuntuN md:mr-4`}
          >
            2
          </p>
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-ubuntuN text-[#d6d9e6]">STEP 2</p>
            <p className="font-ubuntuM text-white">SELECT PLANS</p>
          </div>
        </div>
        <div className="flex flex-row md:mb-10">
          <p
            className={`${
              page === 3
                ? "bg-[#bfe2fd]"
                : "border border-[#d6d9e6] text-[#d6d9e6]"
            } text-xl rounded-full py-2 px-[16px] md:px-[17px] font-ubuntuN md:mr-4`}
          >
            3
          </p>
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-ubuntuN text-[#d6d9e6]">STEP 3</p>
            <p className="font-ubuntuM text-white">ADD-ONS</p>
          </div>
        </div>
        <div className="flex flex-row">
          <p
            className={`${
              page === 4
                ? "bg-[#bfe2fd]"
                : "border border-[#d6d9e6] text-[#d6d9e6]"
            } text-xl rounded-full py-2 px-[16px] md:px-[17px] font-ubuntuN md:mr-4`}
          >
            4
          </p>
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-ubuntuN text-[#d6d9e6]">STEP 4</p>
            <p className="font-ubuntuM text-white">SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
