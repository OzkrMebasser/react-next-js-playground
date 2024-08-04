"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMiniCubeTransparent } from "react-icons/hi2";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";
import { TbStatusChange } from "react-icons/tb";
import { GiBookshelf, GiHook } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } from "react-icons/ri";




const SidebarNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isHooksOpen, setHooksOpen] = useState(false);
  const [isUseStateOpen, setUseStateOpen] = useState(false);
  const [isUseEffectOpen, setUseEffectOpen] = useState(false);
  const [isComponentsOpen, setComponentsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleHooks = () => {
    setHooksOpen(!isHooksOpen);
  };

  const toggleUseState = () => {
    setUseStateOpen(!isUseStateOpen);
  };

  const toggleUseEffect = () => {
    setUseEffectOpen(!isUseEffectOpen);
  };

  const toggleComponents = () => {
    setComponentsOpen(!isComponentsOpen);
  };

  return (
    <div className="relative flex">
      {/* Botón para alternar visibilidad del sidebar */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        {isSidebarOpen ? <RiMenuUnfold4Fill  className="w-8 h-8"/> : <RiMenuUnfold3Fill className="w-8 h-8"/>}
      </button>

      {/* Sidebar */}
      <div
        className={`relative flex flex-col bg-white text-gray-700 h-auto max-w-[30rem] lg:w-[60rem] p-4 rounded-xl shadow-xl shadow-blue-gray-900/5 transition-transform duration-300 ease-in-out z-[49] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/">
          <div className="mb-2 p-4">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
              React Highlights <FaReact className="h-5 w-5 inline" />
            </h5>
          </div>
        </Link>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        
          {/* Hooks Dropdown */}
          <div>
            <button
              onClick={toggleHooks}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <GiHook className="h-5 w-5" />
              </div>
              <span className="font-bold">Hooks</span>
              <span className="ml-auto">
                {isHooksOpen ? (
                  <IoMdArrowDropleft className="h-5 w-5" />
                ) : (
                  <IoMdArrowDropdown className="h-5 w-5" />
                )}
              </span>
            </button>
            {isHooksOpen && (
              <div className="pl-6 mt-2 space-y-1">
                {/* useState Dropdown */}
                <div>
                  <button
                    onClick={toggleUseState}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                  >
                    <div className="grid place-items-center mr-4">
                      <TbStatusChange className="h-5 w-5" />
                    </div>
                    <span className="font-bold">useState()</span>
                    <span className="ml-auto">
                      {isUseStateOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isUseStateOpen && (
                    <div className="pl-6 mt-2 space-y-1">
                      <Link
                        href="/hooks/useState/infoUseState"
                        className="block p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <span className="font-bold">
                          Info Importante <strong>useState()</strong>
                        </span>
                      </Link>
                      <Link
                        href="/hooks/useState/counter"
                        className="block p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <span className="font-bold">Counter</span>
                      </Link>
                      <Link
                        href="/hooks/useState/example2"
                        className="block p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <span className="font-bold">Example 2</span>
                      </Link>
                      <Link
                        href="/hooks/useState/example3"
                        className="block p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <span className="font-bold">Example 3</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* useEffect Dropdown */}
                <div>
                  <button
                    onClick={toggleUseEffect}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                  >
                    <div className="grid place-items-center mr-4">
                      <MdOutlinePublishedWithChanges className="h-5 w-5" />
                    </div>
                    <span className="font-bold">useEffect()</span>
                    <span className="ml-auto">
                      {isUseEffectOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isUseEffectOpen && (
                    <div className="pl-6 mt-2 space-y-1">
                      <Link
                        href="/hooks/useEffect/example1"
                        className="block p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <span className="font-bold">Example 1</span>
                      </Link>
                      <Link
                        href="/hooks/useEffect/example2"
                        className="block p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <span className="font-bold">Example 2</span>
                      </Link>
                      <Link
                        href="/hooks/useEffect/example3"
                        className="block p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                      >
                        <span className="font-bold">Example 3</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Components Dropdown */}
          <div>
            <button
              onClick={toggleComponents}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <GiBookshelf className="h-5 w-5" />
              </div>
              <span className="font-bold">Components</span>
              <span className="ml-auto">{isComponentsOpen ? "−" : "+"}</span>
            </button>
            {isComponentsOpen && (
              <div className="pl-6 mt-2 space-y-1">
                <Link
                  href="/components/form"
                  className="block p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <span className="font-bold">Form</span>
                </Link>
              </div>
            )}
          </div>
            {/* Docs official */}
            
          <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <GrDocumentText className="h-5 w-5" />
              </div>
              <span className="font-bold"> Documentación Oficial de React</span>
              <span className="ml-auto"><RxExternalLink className="h-5 w-5 inline relative"/></span>
            </a>
        </nav>
      </div>
    </div>
  );
};

export default SidebarNav;
