import React, { useContext } from "react";
// import { IoHome } from "react-icons/io5";
import { ContextProvider } from "../../srore/Context";
export const Restart = () => {
    const {GameOver,RestartFun,ScoreCount,BacktoHome} = useContext(ContextProvider);
  return (
    <>
      <div>
        <div id="modal" className={`${GameOver.current?null:"hidden"}`}>
          <div
            className={`fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto`}
          >
            <div className="md:w-[20%] w-[75%] flex flex-col gap-3 max-w-lg bg-[#00000080] shadow-lg rounded-lg md:p-6 p-2  relative">
              <div className="flex items-center justify-center">
                <p className="text-4xl font-semibold text-white">
                  Score : {ScoreCount.current}
                </p>
              </div>
              <div className="w-full h-fit flex items-center justify-center mt-8 flex-col">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                onClick={() => {
                    BacktoHome();
                }}
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center justify-center gap-2 text-lg">
                    {/* <IoHome /> */}
                    Back to Home
                  </span>
                </button>

                <button
                  aria-label="Start Game"
                  className="px-8 py-2 md:mb-0 mb-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none"
                  id="startButton"
                  onClick={() => {
                    RestartFun();
                  }}
                >
                  Restart Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
