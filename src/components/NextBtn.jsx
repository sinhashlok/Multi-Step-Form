const NextBtn = ({ handleClick, nextText }) => {
  return (
    <button
      className="bg-[#02295a] hover:bg-[#473dff] cursor-pointer  ml-auto p-2 px-8 text-[16px] md:text-[18px] text-white rounded-lg font-ubuntuN"
      onClick={() => handleClick()}
    >
      {nextText ? nextText : "Next"}
    </button>
  );
};

export default NextBtn;
