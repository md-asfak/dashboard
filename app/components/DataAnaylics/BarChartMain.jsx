import Image from "next/image";
import image1 from "../../../public/Images/Bar chart template.png";
import image2 from "../../../public/Images/Bar chart template(1).png";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 mt-5">
        <div className="shadow bg-white rounded-md p-5">
          <h1 className="text-[16px] font-semibold">
            Current Power Each Apartment
          </h1>
          <p className="text-[13px] text-[#475467]">
            Shows energy usage across apartments, ideal for tracking and
            managing collective energy expenditure.
          </p>
          <div>
            <Image src={image1} />
          </div>
        </div>
        <div className="shadow bg-white rounded-md p-5 ">
          <h1 className="text-[16px] font-semibold">
            Current Power Each Device
          </h1>
          <p className="text-[13px] text-[#475467]">
            Compares the immediate power consumption of three devices, useful
            for identifying high usage in real-time.
          </p>
          <div>
            <Image src={image2} />
          </div>
        </div>
      </div>
    </>
  );
}
