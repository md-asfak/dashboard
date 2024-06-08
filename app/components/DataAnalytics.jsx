"use client";
import React from "react";
import Image from "next/image";
import image1 from "../../public/Images/Tech Life - Life Management 1.png";
import image2 from "../../public/Images/Vector2x.png";
import image3 from "../../public/Images/Icon(1)d.png";
import ChartMain from "./DataAnaylics/ChartMain";
import BarChartMain from "./DataAnaylics/BarChartMain";
import MainDonutChart from "./DataAnaylics/MainDonutChart";
import { useRouter } from "next/navigation";
function DataAnalytics() {
  const router = useRouter();
  return (
    <>
      <div className="bg-white p-5 mb-5  shadow">
        <h1>Data Analytics</h1>
      </div>
      <div className="">
        <div>
          <button
            className="text-[#475467] mb-4 bg-white rounded-lg shadow px-4 py-2 flex gap-3 items-center"
            onClick={() => router.push("/")}
          >
            <Image src={image2} width={10} /> Go Back
          </button>
        </div>

        <div className="flex flex-wrap gap-5 items-center rounded-lg shadow p-6 mb-10 bg-white">
          <div>
            <Image src={image1} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1bb40d]">
              Data Analytics
            </h1>
            <p className="text-[#475467]">
              Monitor and control the usage your energy needs!
            </p>
          </div>
        </div>

        <div className="flex gap-5  rounded-lg shadow p-6 mb-10 bg-white justify-between items-center flex-wrap">
          <div>
            <h1 className="font-bold ">Generate Energy Report</h1>
            <p className="text-[13px] text-[#475467]">
              An energy report that details the latest power usage, CO2
              production, and other relevant metrics.
            </p>
          </div>
          <div>
            <button className="bg-[#189e0b] text-white p-2 flex justify-center items-center gap-2 rounded-lg text-[14px]">
              <Image src={image3} /> Download Report
            </button>
          </div>
        </div>
        <div className="rounded-lg shadow ">
          <ChartMain />
        </div>
      </div>
      <div>
        <BarChartMain />
      </div>

      <div>
        <MainDonutChart />
      </div>
    </>
  );
}

export default DataAnalytics;
