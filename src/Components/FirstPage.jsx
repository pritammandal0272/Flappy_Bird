import React, { useContext } from "react";
import bird1 from "../assets/BirdImage/bird1.gif";
import bird2 from "../assets/BirdImage/bird2.gif";
import bird3 from "../assets/BirdImage/bird3.gif";
import bird4 from "../assets/BirdImage/bird4.gif";
import back1 from "../assets/image/back1.jpg";
import back2 from "../assets/image/back2.jpg";
import back3 from "../assets/image/back3.jpg";
import back4 from "../assets/image/back4.png";
import logo from "../assets/image/logo.png";
import birdlogo from "../assets/BirdImage/birdlogo.avif";
import backlogo from "../assets/BirdImage/backlogo.avif";
import { ContextProvider } from "../../srore/Context";
export const FirstPage = ({ SelectBackground, setSelectBackground }) => {
  const { SelectBird, setSelectBird, setStart, Start, ApplyBirdRef } =
    useContext(ContextProvider);
  return (
    <>
      <div>
        <div id="modal">
          <div
            className={`fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ${
              Start ? "hidden" : null
            }`}
          >
            <div className="md:w-[30%] w-[100%] max-w-lg bg-[#00000060] shadow-lg rounded-lg md:p-6 p-2  relative border-2 border-red-600 shadow-red-500/50">
              <div className="flex items-center justify-center mb-2">
                <img src={logo} className="h-[4em]" />
              </div>

              {/*Bird ============== */}
              <div className="flex w-full overflow-hidden rounded-lg shadow-md bg-[#2687c190] mb-2">
                <div className="flex items-center justify-center w-12 bg-emerald-500 ">
                  <img src={birdlogo} alt="" className="h-full w-full" />
                </div>

                <div className="px-4 py-0 -mx-3">
                  <div className="mx-3">
                    <span className="text-amber-500 font-bold">
                      Birds
                    </span>
                    <p className="text-sm text-white mb-1">
                      Select your favorite Bird
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <div
                  className={`flex flex-col h-fit items-center justify-center w-[7em] mx-auto overflow-hidden rounded-lg shadow-lg bg-black ${
                    SelectBird == "bird1" ? "border-2 border-blue-500" : null
                  }`}
                >
                  <div className=" bg-gray-300 dark:bg-gray-600 flex items-center h-[4em] md:h-[5em] w-[7em] justify-center">
                    <img src={bird1} alt="" className="h-[4em] w-[4em]" />
                  </div>
                  <div className="flex justify-between my-2 item-center">
                    <button
                      className="md:px-4 md:py-1 px-2 py-1 md:font-medium text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[15px]"
                      onClick={() => {
                        setSelectBird("bird1");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center justify-center w-[7em] mx-auto overflow-hidden rounded-lg shadow-lg bg-black  ${
                    SelectBird == "bird2" ? "border-2 border-blue-500" : null
                  }`}
                >
                  <div className=" bg-gray-300 dark:bg-gray-600 flex items-center  h-[4em] md:h-[5em] w-[7em] justify-center">
                    <img src={bird2} alt="" className="h-[3em] w-[3em]" />
                  </div>
                  <div className="flex justify-between my-2 item-center">
                    <button
                      className="md:px-4 md:py-1 px-2 py-1 md:font-medium text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[15px]"
                      onClick={() => {
                        setSelectBird("bird2");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center justify-center w-[7em] mx-auto overflow-hidden rounded-lg shadow-lg bg-black ${
                    SelectBird == "bird3" ? "border-2 border-blue-500" : null
                  }`}
                >
                  <div className=" bg-gray-300 dark:bg-gray-600 flex items-center  h-[4em] md:h-[5em] w-[7em] justify-center">
                    <img src={bird3} alt="" className="h-[3em] w-[3em]" />
                  </div>
                  <div className="flex justify-between my-2 item-center">
                    <button
                      className="md:px-4 md:py-1 px-2 py-1 md:font-medium text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[15px]"
                      onClick={() => {
                        setSelectBird("bird3");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center justify-center w-[7em] mx-auto overflow-hidden rounded-lg shadow-lg bg-black ${
                    SelectBird == "bird4" ? "border-2 border-blue-500" : null
                  }`}
                >
                  <div className=" bg-gray-300 dark:bg-gray-600 flex items-center  h-[4em] md:h-[5em] w-[7em] justify-center">
                    <img src={bird4} alt="" className="h-[3em] w-[3em]" />
                  </div>
                  <div className="flex justify-between my-2 item-center">
                    <button
                      className="md:px-4 md:py-1 px-2 py-1 md:font-medium text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[15px]"
                      onClick={() => {
                        setSelectBird("bird4");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>

              {/*Bird End ================== */}

              {/*BackGround ============== */}
              <div className="flex w-full overflow-hidden rounded-lg shadow-md bg-[#5ee37070] mb-2 my-4">
                <div className="flex items-center justify-center w-12 bg-yellow-500 ">
                  <img src={backlogo} alt="" className="h-full w-full" />
                </div>

                <div className="px-4 py-0 -mx-3">
                  <div className="mx-3">
                    <span className="text-amber-500 font-bold">
                      Background
                    </span>
                    <p className="text-sm text-white mb-1">
                      Select your favorite Background
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <div
                  className={`flex flex-col items-center justify-center w-[7em] mx-auto overflow-hidden rounded-lg shadow-lg bg-black ${
                    SelectBackground == "back1"
                      ? "border-2 border-yellow-500"
                      : null
                  }`}
                >
                  <div className=" bg-gray-300 dark:bg-gray-600 flex items-center  h-[4em] md:h-[5em] w-[7em] justify-center">
                    <img src={back1} alt="" className="h-[4em] md:h-[5.2em] w-full" />
                  </div>
                  <div className="flex justify-between my-2 item-center ">
                    <button
                      className="md:px-4 md:py-1 px-2 py-1 md:font-medium text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[15px]"
                      onClick={() => {
                        setSelectBackground("back1");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center justify-center w-[7em] mx-auto overflow-hidden rounded-lg shadow-lg bg-black ${
                    SelectBackground == "back2"
                      ? "border-2 border-yellow-500"
                      : null
                  }`}
                >
                  <div className=" bg-gray-300 dark:bg-gray-600 flex items-center h-[4em] md:h-[5em] w-[7em] justify-center">
                    <img src={back2} alt="" className="h-[4em] md:h-[5.2em] w-full" />
                  </div>
                  <div className="flex justify-between my-2 item-center">
                    <button
                      className="md:px-4 md:py-1 px-2 py-1 md:font-medium text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[15px]"
                      onClick={() => {
                        setSelectBackground("back2");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center justify-center w-[7em] mx-auto overflow-hidden rounded-lg shadow-lg bg-black ${
                    SelectBackground == "back3"
                      ? "border-2 border-yellow-500"
                      : null
                  }`}
                >
                  <div className=" bg-gray-300 dark:bg-gray-600 flex items-center  h-[4em] md:h-[5em] w-[7em] justify-center">
                    <img src={back3} alt="" className="h-[4em] md:h-[5.2em] w-full" />
                  </div>
                  <div className="flex justify-between my-2 item-center">
                    <button
                      className="md:px-4 md:py-1 px-2 py-1 md:font-medium text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[15px]"
                      onClick={() => {
                        setSelectBackground("back3");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center justify-center w-[7em] mx-auto overflow-hidden rounded-lg shadow-lg bg-black ${
                    SelectBackground == "back4"
                      ? "border-2 border-yellow-500"
                      : null
                  }`}
                >
                  <div className=" bg-gray-300 dark:bg-gray-600 flex items-center  h-[4em] md:h-[5em] w-[7em] justify-center">
                    <img src={back4} alt="" className="h-[4em] md:h-[5.2em] w-full" />
                  </div>
                  <div className="flex justify-between my-2 item-center">
                    <button
                      className="md:px-4 md:py-1 px-2 py-1 md:font-medium text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-[15px]"
                      onClick={() => {
                        setSelectBackground("back4");
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>

              {/*Bird End ================== */}

              {/* <div>
                <h4 className="text-xl text-slate-900 font-semibold mt-4">
                  Successfully accepted!
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mt-4">
                  Et leo, enim in non sed quis sed. Auctor natoque auctor risus
                  amet quis mauris. Interdum et nisi, pellentesque id lectus. Ut
                  bibendum pellentesque arcu luctus sapien.
                </p>
              </div> */}

              <div className="w-full h-fit flex items-center justify-center mt-8 mb-2">
                <button
                aria-label="Start Game"
                className="px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none"
                id="startButton"
                onClick={() => {
                  setStart(true);
                }}
              >
                Start Game
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* <button
          id="openModal"
          type="button"
          className="mt-4 mx-auto block px-4 py-2 rounded-lg text-white text-sm font-medium border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
        >
          Open modal
        </button> */}
      </div>
    </>
  );
};
