import Image from "next/image";
import image1 from "../../public/Images/Object.svg";
import image2 from "../../public/Images/footprints1.png";
import image3 from "../../public/Images/Icon(1).png";
import image4 from "../../public/Images/Icon(2).png";

export default function MainContent() {
  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 ">
      <div className="mb-5 flex flex-col gap-5  shadow p-3">
        <div>
          <h1 className="text-2xl font-bold">
            Welcome to Energy Resource Management Platform
          </h1>
          <p className="text-[#8c94a0]">
            Monitor and Control your energy needs!
          </p>
        </div>
        <Image src={image1} />
      </div>
      <div className="flex flex-col bg-white p-5 shadow rounded  ">
        <h2 className="text-xl font-bold">Platform Information</h2>
        <div className="flex flex-wrap md:flex-row justify-between items-center gap-3 ">
          <div className="mt-3 bg-[#1bb40d] text-white p-5 rounded-md  ">
            <div className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
              <Image src={image2} alt="aaa" />
            </div>
            <p className="py-2">Current Aggregated Power</p>
            <p className="text-4xl">41,234 W</p>
          </div>
          <div>
            <div className="mt-3 flex gap-3 border-[1px] p-2 border-gray-200 rounded-md ">
              <div className="bg-[#c0c6bf] w-[50px] h-[50px] rounded-md flex justify-center items-center">
                <Image src={image4} />
              </div>
              <div className="flex flex-col">
                <p className="text-[#7c7c7c] text-[13px] font-bold ">Devices</p>
                <p className="font-bold text-[13px]">9</p>
                <p className="text-[#7c7c7c] text-[10px]">
                  Number of connected devices
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-3 border-[1px]  border-gray-200 p-2 ">
              <div className="bg-[#c0c6bf] w-[50px] h-[50px] rounded-md flex justify-center items-center">
                <Image src={image3} />
              </div>
              <div className="flex flex-col ">
                <p className="text-[#7c7c7c] font-bold  text-[13px]">Network</p>
                <p className="font-bold text-[13px]">Online</p>
                <p className="text-[#7c7c7c] text-[10px]">Status</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-2 mb-1">Control Devices</p>
        <div className="flex flex-col md:flex-row gap-2  justify-between">
          <button className="  border-[1px] border-green-500 text-green-500  p-2 rounded w-[200px sm:w-[250px]">
            Enable All
          </button>
          <button className="border-red-500 border-[1px] text-red-500  p-2 rounded  w-[200px sm:w-[250px]">
            Disable All
          </button>
        </div>
      </div>
    </div>
  );
}
