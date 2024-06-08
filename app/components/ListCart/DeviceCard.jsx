import DeviceCardMain from "./DeviceCartMain";

const DeviceCard = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 border rounded-lg shadow-sm">
      <div className="flex space-x-4">
        <div>
          <div className="flex flex-col gap-5">
            <DeviceCardMain />
            <DeviceCardMain />
            <DeviceCardMain />
            <DeviceCardMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
