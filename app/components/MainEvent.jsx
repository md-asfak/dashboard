import EventCard from "../components/EventCard";
import Image from "next/image";
import image1 from "../../public/Images/Vector@2x.png";
import image2 from "../../public/Images/Line chart template.png";
const Home = () => {
  const events = [
    {
      name: "Event_Name | Device_Name",
      device: "Device 1",
      start: "2024/12/12 12:12",
      end: "2024/12/12 12:12",
    },
    {
      name: "Workstation MA #1001 - Event ID: 1",
      device: "Device 1",
      start: "2024/12/12 12:12",
      end: "2024/12/12 12:12",
    },
    {
      name: "Workstation MA #1001 - Event ID: 1",
      device: "Device 1",
      start: "2024/12/12 12:12",
      end: "2024/12/12 12:12",
    },
  ];

  return (
    <div className=" mx-auto p-4">
      <div className="grid grid-cols-1  lg:grid-cols-2    gap-4 ">
        <div className="shadow p-5 rounded-md">
          <h1 className="text-xl font-bold ">Current Usage</h1>
          <div className=" ">
            <Image src={image2} className="h-[300px] w-[500px]" />
          </div>
        </div>
        <div className="shadow p-5 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Energy Events</h2>
            <div className="flex justify-end">
              <button className=" flex gap-3 border-[1px] text-[#475467]  border-gray-200 p-2 rounded-md mr-3 ">
                Event Schedule <Image src={image1} width={10} />
              </button>
            </div>
          </div>

          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
