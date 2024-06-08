import Image from "next/image";
import image1 from "../../public/Images/Icon.png";
import image2 from "../../public/Images/bar-chart-square-02.png";
import image3 from "../../public/Images/check-done-01.png";

function Sidebar() {
  return (
    <div className="h-[220vh] w-1/6  text-black pt-20 pl-5  shadow  ">
      <nav className="pr-5">
        <ul className="">
          <li>
            <a href="/" className="mb-3 flex gap-2">
              <Image src={image1} alt="Picture of the author" />
              <h1 className="hover:text-gray-400  font-bold hidden md:flex">
                Home
              </h1>
            </a>
          </li>
          <li>
            <a href="/data-analytics" className="mb-3 flex gap-2">
              <Image src={image2} alt="Picture of the author" />
              <h1 className="hover:text-gray-400  font-bold hidden md:flex">
                {" "}
                Analytics
              </h1>
            </a>
          </li>
          <li>
            <a href="/shedule" className="mb-3 flex gap-2">
              <Image src={image3} alt="Picture of the author" />
              <h1 className="hover:text-gray-400 font-bold hidden md:flex">
                Scheduler
              </h1>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
