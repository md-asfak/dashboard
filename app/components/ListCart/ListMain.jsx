import DeviceCard from "./DeviceCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="shadow rounded-md bg-white p-5 mx-5 border-[1px] border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">Apartment #1 (Marcin)</h1>
          <p className="text-gray-600 mb-6">
            Volkstraat 42, Rotterdam, The Netherlands
          </p>
          <div className="w-[100%] border-[1px] border-gray-100"></div>
          <div className="flex justify-between items-center mb-6 mt-5">
            <div className="flex flex-wrap gap-5">
              <button className=" border-[1px] border-green-500 text-green-500 h-[40px]  rounded w-[150px]">
                Enable All
              </button>
              <button className="border-red-500 border-[1px] text-red-500 h-[40px]  rounded w-[150px]">
                Disable All
              </button>

              <div className="flex flex-col justify-start border-[1px]  border-gray-200 h-[40px]   px-5 rounded-lg  w-[200px]  text-[12px]">
                <span className="font-semibold">5</span>
                <span className="text-gray-600">Active Devices</span>
              </div>
              <div className="text-[12px] flex flex-col justify-start border-[1px] h-[40px]  border-gray-200 rounded-lg  w-[200px]   px-5 ">
                <span className="font-semibold">124.2 W</span>{" "}
                <span className="text-gray-600">Total Power Capacity</span>
              </div>
              <div className="flex text-[12px] flex-col justify-start border-[1px] h-[40px]   border-gray-200 rounded-lg  w-[200px]   px-5 ">
                <span className="font-semibold">$345.2</span>{" "}
                <span className="text-gray-600">Total Bill Estimate</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className=" px-4 py-2 border rounded-lg w-[200px]"
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-4">
            <div>
              <DeviceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
