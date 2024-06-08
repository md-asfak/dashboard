import Image from "next/image";
import image1 from "../../public/Images/Featured icon.png";
export default function Header() {
  return (
    <header className="bg-white shadow p-5 flex flex-row gap-5">
      <div className=" flex items-start  ">
        <Image src={image1} className="w-[100px] sm:w-[50px]" />
      </div>
      <div className="">
        <p className="text-[#344054] font-bold">
          We've just released a new feature
        </p>
        <p className="text-[#475467]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquid
          pariatur, ipsum dolor.
        </p>
      </div>
    </header>
  );
}
