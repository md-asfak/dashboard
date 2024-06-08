"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "../../public/Images/Tech Life - Blockchain 1.png";
import image2 from "../../public/Images/Vector2x.png";
import image3 from "../../public/Images/Icon2.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [devices, setDevices] = useState([
    "Workstation MA #1001",
    "Workstation MA #1001",
    "Workstation MA #1001",
    "Workstation MA #1001",
    "Workstation MA #1001",
    "Workstation MA #1001",
    "Workstation MA #1001",
    "Workstation MA #1001",
    "Workstation MA #1001",
    "Workstation MA #1001",
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      device: "Workstation MA #1001",
      event: "On",
      startTime: "12/12 12:12/24",
      endTime: "12/12 12:12/24",
    },
    {
      id: 2,
      device: "Workstation MA #1001",
      event: "On",
      startTime: "12/12 12:12/24",
      endTime: "12/12 12:12/24",
    },
    {
      id: 3,
      device: "Workstation MA #1001",
      event: "On",
      startTime: "12/12 12:12/24",
      endTime: "12/12 12:12/24",
    },
  ]);

  const [device, setDevice] = useState("Workstation MA #1001");
  const [action, setAction] = useState("Turn On");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const scheduleEvent = () => {
    setEvents([
      ...events,
      { id: events.length + 1, device, event: action, startTime, endTime },
    ]);
  };
  return (
    <>
      <div className="bg-white p-5 mb-5  shadow">
        <h1>Shedule</h1>
      </div>
      <div className="min-h-screen bg-gray-50  ">
        <button
          className="text-[#475467] mb-4 bg-white rounded-lg shadow px-4 py-2 flex gap-3 items-center"
          onClick={() => router.push("/")}
        >
          <Image src={image2} width={10} /> Go Back
        </button>
        <div>
          <div className="flex gap-5 items-center rounded-lg shadow p-6 mb-10 bg-white">
            <div>
              <Image src={image1} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1bb40d]">
                Schedule Energy Events
              </h1>
              <p className="text-[#475467]">
                Schedule Energy Events for One Device or multiple devices
              </p>
            </div>
          </div>

          <div className="">
            <button
              className="border-[1px] border-gray-500 text-black px-4 py-2  rounded-tl-lg "
              onClick={() => router.push("/shedule")}
            >
              One Device
            </button>
            <button
              className=" bg-[#1bb40d] text-white px-4 py-2 rounded-tr-lg"
              onClick={() => router.push("/group-device")}
            >
              Group Device
            </button>
          </div>

          <div className="bg-white p-5 mb-5 rounded-lg shadow">
            <h5 className="py-5">Device</h5>
            <div className="mb-5">
              <div className="flex flex-wrap gap-4 mb-4 border-[1px] border-gray-50">
                {devices.map((device, index) => (
                  <label
                    key={index}
                    className="flex gap-2 items-center border-[1px] border-gray-100 px-2 py-1 text-[#667085] text-[13px]"
                  >
                    <input type="checkbox" />
                    {device}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-5  ">
              <div className="mb-4 ">
                <label className="block mb-2 text-[#344054]">Action</label>
                <select
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  className="border p-2 rounded   bg-white  text-[#667085] w-[250px]"
                >
                  <option className="text-[#667085]">Turn On</option>
                  <option className="text-[#667085]">Turn Off</option>
                </select>
              </div>
              <div className="mb-4 ">
                <label className="block mb-2 text-[#344054] ">
                  Start Date and Time
                </label>
                <input
                  type="datetime-local"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="border p-2 rounded  text-[#667085] w-[250px]"
                />
              </div>
              <div className="mb-4 ">
                <label className="block mb-2 text-[#344054]">
                  End Date and Time
                </label>
                <input
                  type="datetime-local"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="border p-2 rounded w-[250px] text-[#667085] "
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={scheduleEvent}
                className="bg-green-500 text-white px-4 py-2 rounded "
              >
                Schedule Event
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">Manage Energy Events</h2>
          <div className="mb-5 ">
            <label className="block mb-2">Device</label>
            <input
              type="text"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              className="border p-2 rounded  w-[100%]"
            />
          </div>
          <div className="overflow-x-scroll ">
            <table className="w-full">
              <thead className="bg-[#f1fef0] text-[#1bb40d] border-[1px] border-gray-200">
                <tr className="">
                  <th className="border px-4 py-2 border-none">ID</th>
                  <th className="border px-4 py-2 border-none">Energy Event</th>
                  <th className="border px-4 py-2 border-none">Start Time</th>
                  <th className="border px-4 py-2 border-none">End Time</th>
                  <th className="border px-4 py-2 border-none  ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="text-center ">
                    <td className="border px-4 py-2 border-none">{event.id}</td>

                    <td className="border px-4 py-2 border-none">
                      {event.event}
                    </td>
                    <td className="border px-4 py-2 border-none">
                      {event.startTime}
                    </td>
                    <td className="border px-4 py-2 border-none">
                      {event.endTime}
                    </td>
                    <td className="border px-4 py-2 border-none">
                      <button
                        onClick={() =>
                          setEvents(events.filter((e) => e.id !== event.id))
                        }
                        className="text-red-500"
                      >
                        <Image src={image3} width={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
