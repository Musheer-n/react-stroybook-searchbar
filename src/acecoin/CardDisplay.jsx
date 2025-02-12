import React from "react";
import { Chip, MSLogo } from "../assets";
import { RiWifiFill } from "react-icons/ri";
import { IoLogoApple } from "react-icons/io";
import { IoReceiptOutline } from "react-icons/io5";

const CardDisplay = () => {
  return (
    <div className="flex-[1] w-full flex flex-col gap-[1rem] lg:min-h-[680px]">
      <div className="flex-[1] flex items-start justify-center relative">
        <div className="w-[80px] h-[40px] bg-blueColor rounded-md" />
        <div className="absolute bg-[#fafcfe] w-[250px] h-[350px] top-2 rounded-[10px]  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 border border-gray-100">
          <div className="flex flex-col items-center justify-between p-[2rem] h-full ">
            <div className="flex items-center justify-between w-full">
              <img src={Chip} alt="chip" className="w-[35px] h-[50px]" />
              <RiWifiFill size={30} className="text-primaryTextColor" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <span className="text-primaryTextColor font-medium text-[18px]">
                Jonathan Michael
              </span>
              <div className="flex items-center gap-5">
                <span className="text-primaryTextColor font-bold text-[26px] ">
                  &#x2022; &#x2022; &#x2022; &#x2022;
                </span>
                <span className="text-primaryTextColor font-bold text-[20px] ">
                  3456
                </span>
              </div>
              <div className="flex justify-between items-center mt-[0.5rem]">
                <span className="text-primaryTextColor font-bold text-[20px]">
                  09/22
                </span>
                <div className="flex flex-col items-center">
                  <img src={MSLogo} alt="" className="w-[70px]" />
                  <span className="text-[8px] text-primaryTextColor font-semibold">
                    mastercard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e6eaed] rounded-[10px] flex flex-col justify-between flex-[5] w-full">
        <div className="h-[40%]"></div>
        <div className="h-[60%] w-[300px] mx-auto flex flex-col p-[1rem] gap-[1rem] ">
          <div className="flex justify-between items-center">
            <span className="text-subLightColor text-[17px] font-medium">
              Company
            </span>
            <span className="text-primaryTextColor text-[18px] flex items-center gap-2 font-bold">
              <div className=" bg-primaryTextColor rounded-full w-[25px] h-[25px] justify-center flex items-center ">
                <IoLogoApple className=" text-white" />
              </div>
              Apple
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-subLightColor text-[17px] font-medium">
              Order Number
            </span>
            <span className="text-primaryTextColor text-[18px] font-bold">
              126601
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-subLightColor text-[17px] font-medium">
              Product
            </span>
            <span className="text-primaryTextColor text-[18px] font-bold">
              MackBook Air
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-subLightColor text-[17px] font-medium">
              VAT (20%)
            </span>
            <span className="text-primaryTextColor text-[18px] font-bold">
              $100.00
            </span>
          </div>

          <hr className="border-[#8e96a390] mt-3 border-2 border-dashed " />

          <div className="flex items-center justify-between">
            <div className="flex flex-col mt-[0.5rem]">
              <span className="text-subLightColor text-[16px] font-medium">
                You have to pay
              </span>
              <div className="flex ">
                <span className="text-primaryTextColor text-[36px] font-bold">
                  549
                </span>
                <span className="text-[22px] mt-[0.9rem] font-medium">
                  .99 <span className="text-subLightColor">USD</span>
                </span>
              </div>
            </div>
            <IoReceiptOutline
              size={34}
              fill="#f9fbfc "
              className="text-primaryTextColor backdrop rotate-180 flip-horizontal "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MemoriedCardDisplay = React.memo(CardDisplay);
export default MemoriedCardDisplay;