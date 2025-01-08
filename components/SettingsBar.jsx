"use client";
import Image from "next/image";
import React, { useState } from "react";

import language from "@/public/languase.png";
import generalSettings from "@/public/generalSettings.png";
import fontSettings from "@/public/fontSettings.png";
import appreance from "@/public/appreance.png";
import switchIcon from "@/public/switchIcon.png";
import { Settings } from "lucide-react";

const SettingsBar = () => {
  const [mobileSetting, setMobileSetting] = useState(false);
  return (
    <div className="">
      <button onClick={()=> setMobileSetting(!mobileSetting)} className="fixed right-0 bg-green-600 p-2 m-2 rounded-md mx-4 top-0 block lg:hidden">
      <Settings />
      </button>
      <aside className="hidden lg:block bg-white m-4 p-4 min-w-[20%] rounded-xl min-h-[70vh] sticky top-[6rem] space-y-4">
        <button className="bg-gray-100  px-2 py-1 flex items-center w-full gap-2 leading-4 text-xs text-gray-400 font-medium rounded-lg">
          <Image
            src={language}
            alt=""
            className="bg-white p-[2px] rounded-full"
          />
          <span> Layout Settings</span>{" "}
        </button>
        <button className="bg-gray-100  px-2 py-1 flex items-center w-full gap-2 leading-4 text-xs text-gray-400 font-medium rounded-lg">
          <Image
            src={generalSettings}
            alt=""
            className="bg-white p-[2px] rounded-full"
          />
          <span> General Settings</span>{" "}
        </button>
        <button className="bg-gray-100  px-2 py-1 flex items-center w-full gap-2 leading-4 text-xs text-gray-400 font-medium rounded-lg">
          <Image
            src={fontSettings}
            alt=""
            className="bg-white p-[2px] rounded-full"
          />
          <span> Font Settings</span>{" "}
        </button>
        <button className="bg-gray-100 border-l-4 border-green-600 text-green-600  px-2 py-1 flex items-center w-full gap-2 leading-4 text-xs font-medium rounded-lg">
          <Image
            src={appreance}
            alt=""
            className="bg-white p-[2px] rounded-full"
          />
          <span> Appearance Settings</span>{" "}
        </button>
        <button className="border px-2 py-2 flex flex-row-reverse justify-between items-center w-full gap-2 leading-4 text-xs text-gray-700 font-medium rounded-sm">
          <Image
            src={switchIcon}
            alt=""
            className="bg-white p-[2px] rounded-full"
          />
          <span> Night Mode</span>{" "}
        </button>
      </aside>
      {
       mobileSetting && <aside className="block lg:hidden fixed top-10 right-0 min-h-screen bg-emerald-200 m-4 p-4 min-w-[15%] rounded-xl space-y-4">
          <button className="bg-gray-100  px-2 py-1 flex items-center w-full gap-2 leading-4 text-xs text-gray-400 font-medium rounded-lg">
            <Image
              src={language}
              alt=""
              className="bg-white p-[2px] rounded-full"
            />
            <span> Layout Settings</span>{" "}
          </button>
          <button className="bg-gray-100  px-2 py-1 flex items-center w-full gap-2 leading-4 text-xs text-gray-400 font-medium rounded-lg">
            <Image
              src={generalSettings}
              alt=""
              className="bg-white p-[2px] rounded-full"
            />
            <span> General Settings</span>{" "}
          </button>
          <button className="bg-gray-100  px-2 py-1 flex items-center w-full gap-2 leading-4 text-xs text-gray-400 font-medium rounded-lg">
            <Image
              src={fontSettings}
              alt=""
              className="bg-white p-[2px] rounded-full"
            />
            <span> Font Settings</span>{" "}
          </button>
          <button className="bg-gray-100 border-l-4 border-green-600 text-green-600  px-2 py-1 flex items-center w-full gap-2 leading-4 text-xs font-medium rounded-lg">
            <Image
              src={appreance}
              alt=""
              className="bg-white p-[2px] rounded-full"
            />
            <span> Appearance Settings</span>{" "}
          </button>
          <button className="border px-2 py-2 flex flex-row-reverse justify-between items-center w-full gap-2 leading-4 text-xs text-gray-700 font-medium rounded-sm">
            <Image
              src={switchIcon}
              alt=""
              className="bg-white p-[2px] rounded-full"
            />
            <span> Night Mode</span>{" "}
          </button>
        </aside>
      }
    </div>
  );
};

export default SettingsBar;
