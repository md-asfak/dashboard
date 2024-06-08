import Image from "next/image";
import image1 from "../../../public/Images/Dounut chart(1).png";

function MainDonutChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between ">
      <div className=" shadow bg-white rounded-md p-5 mt-5 ml-5">
        <h1 className="text-[16px] font-semibold">
          Total kWh Usage per Device
        </h1>
        <p className="text-[13px] text-[#475467]">
          Presents a daily breakdown of energy use, making it easy to see which
          devices are consuming the most power.
        </p>
        <div className="mt-5 flex justify-center">
          <Image src={image1} />
        </div>
      </div>
      <div className="shadow bg-white rounded-md p-5 mt-5 ml-5">
        <h1 className="text-[16px] font-semibold">
          Daily kWh Usage per Device
        </h1>
        <p className="text-[13px] text-[#475467]">
          provides a cumulative view of energy consumed by each device, great
          for understanding long-term usage patterns.
        </p>
        <div className="mt-5 flex justify-center">
          <Image src={image1} />
        </div>
      </div>
    </div>
  );
}

export default MainDonutChart;
