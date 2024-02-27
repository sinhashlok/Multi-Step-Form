const NextBtn = ({ handleClick }) => {
  return (
    <button
      className="bg-[#02295a] hover:bg-[#473dff] cursor-pointer  ml-auto p-2 md:p-2 md:py-3 text-[16px] md:text-[18px] text-white rounded-lg font-ubuntuN"
      onClick={() => handleClick()}
    >
      Next Step
    </button>
  );
};

export default NextBtn;
