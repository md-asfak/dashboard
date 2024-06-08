const EventCard = ({ event }) => {
  return (
    <div className="border p-4 rounded-lg mb-4 ">
      <div className="flex justify-between">
        <div>
          {event.name} - {event.device}
        </div>
        <button className="text-[#98a2b3]">X</button>
      </div>
      <div className="text-sm text-gray-600 flex flex-wrap gap-5">
        <div className="bg-[#f1fef0] text-[#117108] p-[2px] text-[12px] border-[1px] border-[#92f689] rounded-md">
          Start: {event.start}
        </div>
        <div className="bg-[#f9fafb] text-[#344054] p-[2px] text-[12px] border-[1px] border-[#eaecf0] rounded-md">
          End: {event.end}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
