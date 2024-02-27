const GoBackBtn = ({ handleClick }) => {
  return (
    <button
      className="cursor-pointer p-2 md:p-2 md:py-3 text-[16px] md:text-[18px] text-[#9699ab] hover:text-[#02295a] rounded-lg font-ubuntuN"
      onClick={() => handleClick()}
    >
      Go Back
    </button>
  );
};

export default GoBackBtn;
