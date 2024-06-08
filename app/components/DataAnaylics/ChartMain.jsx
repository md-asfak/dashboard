import Image from "next/image";
import image1 from "../../../public/Images/Line chart template(2).png";
export default function ChartMain() {
  return (
    <div className=" bg-white p-8  ">
      <h1 className="text-[16px] font-semibold">Historic Energy Usage</h1>
      <p className="text-[13px] text-[#475467]">
        Displays the power output over time for ten devices, helping monitor
        fluctuations and trends in energy consumpution.
      </p>
      <div className="flex items-center mt-5 gap-5">
        <button className=" border-b-[2px] border-[#189e0b] text-[#189e0b] font-semibold">
          2 hours
        </button>

        <button className="text-[#475467] font-semibold ">24 hours</button>
        <button className="text-[#475467] font-semibold ">2 days</button>
      </div>
      <div>
        <Image src={image1} />
      </div>
    </div>
  );
}
