import React from "react";
import Image from "next/image";
import image1 from "../../public/Images/path10372.png";
import image2 from "../../public/Images/Vector(3).png";
import image3 from "../../public/Images/Vector(4).png";
import image4 from "../../public/Images/Vector(5).png";
import image5 from "../../public/Images/Vector@2x.png";

function Statuz() {
  return (
    <div className="shadow rounded-md p-5 mx-5">
      <div className="flex justify-end">
        <button className=" flex gap-3 border-[1px]  border-gray-200 p-2 rounded-md mr-3 ">
          Data Analytics <Image src={image5} width={10} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        <div className="bg-white flex gap-5 border-[1px]  border-gray-200 justify-start pl-2 items-center rounded-md ">
          <div className="bg-[#c0c6bf] w-[70px] h-[70px] rounded-md flex justify-center items-center ">
            <Image src={image2} />
          </div>

          <div className="flex flex-col ">
            <p className="text-[#7c7c7c] font-bold  text-[15px]">Total kWh</p>
            <p className="font-bold text-[15px]">72,141 kWh</p>
            <p className="text-[#7c7c7c] text-[12px]">Usage Over Time</p>
          </div>
        </div>

        <div className="bg-white flex gap-5 border-[1px] py-2  border-gray-200 justify-start pl-2 items-center rounded-md ">
          <div className="bg-[#c0c6bf] w-[70px] h-[70px] rounded-md flex justify-center items-center ">
            <Image src={image1} />
          </div>

          <div className="flex flex-col ">
            <p className="text-[#7c7c7c] font-bold  text-[15px]">
              Total kWh Today
            </p>
            <p className="font-bold text-[15px]">193 kWh</p>
            <p className="text-[#7c7c7c] text-[12px]">Last 24 hours usage</p>
          </div>
        </div>

        <div className="bg-white flex gap-5 border-[1px] py-2  border-gray-200 justify-start pl-2 items-center rounded-md ">
          <div className="bg-[#c0c6bf] w-[70px] h-[70px] rounded-md flex justify-center items-center ">
            <Image src={image3} />
          </div>

          <div className="flex flex-col ">
            <p className="text-[#7c7c7c] font-bold  text-[15px]">
              Bill Estimate
            </p>
            <p className="font-bold text-[15px]">128 €</p>
            <p className="text-[#7c7c7c] text-[12px]">Based on total kWh</p>
          </div>
        </div>

        <div className="bg-white flex gap-5 border-[1px] py-2  border-gray-200 justify-start pl-2 items-center rounded-md ">
          <div className="bg-[#c0c6bf] w-[70px] h-[70px] rounded-md flex justify-center items-center ">
            <Image src={image4} />
          </div>

          <div className="flex flex-col ">
            <p className="text-[#7c7c7c] font-bold  text-[15px]">
              Carbon Footprint
            </p>
            <p className="font-bold text-[15px]">105,123 kg/CO2</p>
            <p className="text-[#7c7c7c] text-[12px]">Total emissions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statuz;
