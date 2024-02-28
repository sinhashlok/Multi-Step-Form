import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../utils/trackerSlice";
import NextBtn from "./NextBtn";
import { setPersonalInfo } from "../utils/personalInfoSlice";
import Navigator from "./Navigator";
import checkValidData from "../utils/validate";

const PersonalInfo = () => {
  const personalInfo = useSelector((state) => state.personalInfo);
  const dispatch = useDispatch();
  const [name, setName] = useState(personalInfo?.name);
  const [email, setEmail] = useState(personalInfo?.email);
  const [phone, setPhone] = useState(personalInfo?.phone);
  const [error, setError] = useState(-1);
  const [errMssg, setErrMssg] = useState("");

  const handleNextClickPageOne = () => {
    if (name === "") {
      setError(1);
      setErrMssg("This field is required");
      return;
    }
    if (email === "") {
      setError(2);
      setErrMssg("This field is required");
      return;
    }
    if (phone === "") {
      setError(3);
      setErrMssg("This field is required");
    }

    const error = checkValidData(name, email, phone);
    if (error !== null) {
      console.log(error.message);
      if (error.message === "1") {
        setError(1);
        setErrMssg("Invalid full name");
      }
      if (error.message === "2") {
        setError(2);
        setErrMssg("Invalid email");
      }
      return;
    }
    console.log(error);
    setError(-1);
    dispatch(
      setPersonalInfo({
        name: name,
        email: email,
        phone: phone,
      })
    );
    dispatch(nextPage());
  };

  return (
    <div className="flex flex-col md:ml-52 md:mt-20">
      <h1 className="font-ubuntuD text-[28px] md:text-[32px] text-[#02295a]">
        Personal info
      </h1>
      <p className="font-ubuntuN text-[18px] text-[#9699ab]">
        Please provide your name, email address, and phone number.
      </p>
      <form className="flex flex-col mt-10">
        <div className="flex flex-row justify-between">
          <div className="text-[#02295a] text-[14px] md:text-[16px] font-ubuntuN">
            Name
          </div>
          {error === 1 && (
            <div className="text-[#ed3548] text-[14px] md:text-[16px] text-right font-ubuntuN">
              {errMssg}
            </div>
          )}
        </div>
        <input
          type="text"
          value={name}
          placeholder="e.g. Stephen King"
          className={`border border-[#d6d9e6] rounded-md p-2 md:p-4 text-[16px] md:text-[16px] font-ubuntuM mb-6 text-[#02295a] focus:outline-none focus:border-2 focus:border-[#473dff] placeholder-shown:font-ubuntuN ${
            error === 1 && "border-2 border-[#ed3548]"
          }`}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex flex-row justify-between">
          <div className="text-[#02295a] text-[14px] md:text-[16px] font-ubuntuN">
            Email
          </div>
          {error === 2 && (
            <div className="text-[#ed3548] text-[14px] md:text-[16px] text-right font-ubuntuN">
              {errMssg}
            </div>
          )}
        </div>
        <input
          type="email"
          value={email}
          placeholder="e.g. stephenking@lorem.com"
          className={`border border-[#d6d9e6] rounded-md p-2 md:p-4 text-[16px] md:text-[16px] font-ubuntuM mb-6 text-[#02295a] focus:outline-none focus:border-2 focus:border-[#473dff] placeholder-shown:font-ubuntuN ${
            error === 2 && "border-2 border-[#ed3548]"
          }`}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-row justify-between">
          <div className="text-[#02295a] text-[14px] md:text-[16px] font-ubuntuN">
            Phone
          </div>
          {error === 3 && (
            <div className="text-[#ed3548] text-[14px] md:text-[16px] text-right font-ubuntuN">
              {errMssg}
            </div>
          )}
        </div>
        <input
          type="text"
          value={phone}
          placeholder="e.g. +1 234 567 890"
          className={`border border-[#d6d9e6] rounded-md p-2 md:p-4 text-[16px] md:text-[16px] font-ubuntuM placeholder-shown:font-ubuntuN focus:outline-none focus:border-2 focus:border-[#473dff] ${
            error === 3 && "border-2 border-[#ed3548]"
          }`}
          onChange={(e) => setPhone(e.target.value)}
        />
      </form>
      <Navigator onClickPageOne={handleNextClickPageOne} />
      <div className="hidden md:flex flex-row justify-between md:mt-20 bg-white max-md:bottom-0 max-md:w-screen max-md:-ml-12 max-md:p-4">
        <NextBtn handleClick={handleNextClickPageOne} />
      </div>
    </div>
  );
};

export default PersonalInfo;
