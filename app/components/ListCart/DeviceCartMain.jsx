"use client";
import React, { useState } from "react";

function DeviceCartMain() {
  const [value, setValue] = useState(true);
  return (
    <div>
      <div className="flex flex-wrap  text-[16px] gap-3 shadow rounded-md p-2">
        <div className=" flex flex-col ">
          <div>
            <p className="text-[#374151]">Workstation MA #100</p>
            <p className="text-[12px] text-[#374151]">Name</p>
          </div>
          <div className="mt-5">
            <p className="text-[#374151">Smart Plug</p>
            <p className="text-[12px] text-[#374151]">Device Type</p>
          </div>
        </div>
        <div>
          {value ? (
            <>
              <button className="bg-[#e7f8f2] text-[#1bb40d] border-[1px] border-[#cdeae1] py-1 px-2 rounded ">
                ON
              </button>
            </>
          ) : (
            <>
              <button className=" bg-[#feecef] text-[#be123c] border-[1px] border-[#f2d0d8] py-1 px-2 rounded">
                OFF
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col  border-x-[1px] border-gray-100 px-4 ">
          <div>
            <p className="text-[#374151">42.3 W</p>
            <p className="text-[12px] text-[#374151]">Current</p>
          </div>
          <div className="mt-5">
            <p className="text-[#374151">17.9 W</p>
            <p className="text-[12px] text-[#374151]">Avg. Power</p>
          </div>
        </div>

        <div className="flex flex-col border-x-[1px] border-gray-100 px-4 ">
          <div>
            <p className=" text-[#374151">0.67 kWh</p>
            <p className="text-[12px] text-[#374151]">Daily Energy Usage</p>
          </div>
          <div className="mt-5">
            <p className="text-[#374151">5.29 kWh</p>
            <p className="text-[12px] text-[#374151]">Total Energy Usage</p>
          </div>
        </div>

        <div className="flex flex-col  border-x-[1px] border-gray-100 px-4">
          <div>
            <p className="text-[#374151">202.31 kgCO2/kWh</p>
            <p className="text-[12px] text-[#374151]">Daily Carbon Emssions</p>
          </div>
          <div className="mt-5">
            <p className="text-[#374151">5184.31 kgCO2/kWh</p>
            <p className="text-[12px] text-[#374151]">Total Carbon Emssions</p>
          </div>
        </div>
        <div className="flex flex-col border-x-[1px] border-gray-100 px-4">
          <div>
            <p className="text-[#374151 ">$ 1.45</p>
            <p className="text-[12px] text-[#374151]">Daily Cost</p>
          </div>
          <div className="mt-5">
            <p>$ 19.39</p>
            <p className="text-[12px] text-[#374151]">Total Cost</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <button className=" border-[1px] border-green-500 text-green-500 h-[40px]  rounded w-[150px]">
            Enable All
          </button>
          <button className="border-red-500 border-[1px] text-red-500 h-[40px]  rounded w-[150px]">
            Disable All
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceCartMain;
