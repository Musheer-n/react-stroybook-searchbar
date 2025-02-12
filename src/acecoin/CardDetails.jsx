import React from "react";
import { ImPencil } from "react-icons/im";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AceIcon, MSLogo } from "./assets";
import IconVerifyBadge from "./assets/IconVerifyBadge";
import { CardInput, TimerCount } from "./shared/utils";

const CardDetails = () => {
  const dotClassName = "text-[#1e2a53] font-bold text-[20px]";

  return (
    <div className="flex flex-col lg:gap-[2rem] gap-[0.5rem] h-full">
      <div className="flex justify-between items-center lg:gap-1 gap-3 ">
        <img src={AceIcon} alt="aceIcon" />
        <div className="flex">
          <TimerCount />
        </div>
      </div>
      <div className="mt-[0.5rem] flex flex-col gap-[1rem]">
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col gap-[0.5rem]">
            <h2 className="text-[#1e2a53] font-bold text-[20px]">
              Card Number
            </h2>
            <span className="text-[#8e96a3] font-medium lg:max-w-full max-w-[80%]">
              Enter the 16-digit card number on the card
            </span>
          </div>
          <div className="flex items-center text-blueColor gap-2 cursor-pointer">
            <ImPencil size={22} className="" />
            <span className="font-bold">Edit</span>
          </div>
        </div>
        <div className="w-full rounded-md lg:h-[70px] h-[60px]  border-2 border-[#e0e0e080] bg-[#f9fbfc] flex items-center justify-between px-4">
          <div className="flex items-center justify-between lg:w-[60%] w-full lg:gap-1 gap-2">
            <img src={MSLogo} alt="" className="w-[50px]" />
            <CardInput text="2412" />
            <span className={dotClassName}>-</span>
            <CardInput text="7512" />
            <span className={dotClassName}> -</span>
            <CardInput text="3412" />
            <span className={dotClassName}>-</span>
            <CardInput text="3456" />
          </div>
          <div className="">
            <IconVerifyBadge />
          </div>
        </div>
      </div>

      {/* Four Digits */}

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[0.2rem] flex-[1]">
          <h2 className="text-[#1e2a53] font-bold text-[20px]">Card Number</h2>
          <span className="text-[#8e96a3] font-medium max-w-[90%]">
            Enter the 3 or 4 digit number on the card
          </span>
        </div>
        <div className="w-full rounded-md lg:h-[70px] h-[60px] border-2 border-[#e0e0e080] flex items-center justify-between px-4  flex-[1]">
          <div className=""></div>
          <CardInput text="327" isBold />

          <BsFillGrid3X3GapFill color="#8e96a390" size={30} />
        </div>
      </div>

      {/* Expiry Date */}

      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col gap-[0.2rem] w-[50%] ">
          <h2 className="text-[#1e2a53] font-bold text-[20px]">Expiry Date</h2>
          <span className="text-[#8e96a3] font-medium max-w-[90%]">
            Enter the expiration date of the card
          </span>
        </div>
        <div className="flex items-center w-[55%]  gap-[1rem]">
          <div className="w-full rounded-md lg:h-[70px] h-[60px] border-2 border-[#e0e0e080] flex items-center justify-center px-4">
            <CardInput text="09" isBold />
          </div>
          <span className={dotClassName}>/</span>
          <div className="w-full rounded-md lg:h-[70px] h-[60px] border-2 border-blueColor bg-[#f9fbfc] flex items-center justify-center px-4">
            <CardInput text="22" isActive />
          </div>
        </div>
      </div>

      {/* Four Digits */}

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[0.2rem] flex-[1]">
          <h2 className="text-[#1e2a53] font-bold text-[20px]">Password</h2>
          <span className="text-[#8e96a3] font-medium max-w-[90%]">
            Enter your dynamic password
          </span>
        </div>
        <div className="w-full rounded-md lg:h-[70px] h-[60px] border-2 border-[#e0e0e080] flex items-center justify-between px-4  flex-[1]">
          <div className="ml-4">
            <CardInput
              text="&#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022;"
              isBold
            />
          </div>
          <BsFillGrid3X3GapFill color="#8e96a390" size={30} />
        </div>
      </div>

      {/* Button */}

      <button className="w-full lg:h-[70px] h-[60px] text-[22px] bg-blueColor rounded-md font-bold text-[#fff] px-4">
        Pay Now
      </button>
    </div>
  );
};

const MemoriedCardDetails = React.memo(CardDetails);
export default MemoriedCardDetails;