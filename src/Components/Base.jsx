import React, { useCallback, useContext, useEffect, useState } from "react";
import newbase from "../assets/image/newbase.png";
import { ContextProvider } from "../../srore/Context";
export const Base = () => {
    const [BaseState,setBaseState] = useState(0);
    const {ChackBaseFirstImg,GameOver,Start} = useContext(ContextProvider);
  useEffect(() => {
    const Stop = setInterval(() => {
        if(Start){
          setBaseState((prev) => {
            const next = prev + 10;
            // console.log(next);
            GameOver.current ? clearInterval(Stop):null;
            return next == 100 ? 0 : next;
        })
        }
    }, 1000);
    return () => clearInterval(Stop);
  }, [Start,GameOver.current]);
  return (
    <>
      <div className={`h-[10%] ml-[-10em] bg-black absolute w-[100em] flex-shrink-0 flex gap-1 bottom-0 Base ${BaseState == 0 ?"Hide":"Show"}`}>
        <img src={newbase} alt="" className={`w-[50%] h-[10em] absolute z-[200] FirstBase ${BaseState == 50 ?"hidden":"visible"}`} style={{left : `${BaseState >= 50 ? 40 - (BaseState - 60) : -BaseState}%`,transition: `${GameOver.current ? "none" : "1s linear"}`,}} />


        <img src={newbase} alt="" className={`w-[50%] h-[10em] absolute left-[50%] z-[10] Second ${BaseState == 0 ?"Hide":"Show"}`}  style={{left : `${50 - BaseState}%`,transition: `${GameOver.current ? "none" : "1s linear"}`,}} />
        {/* <img src={newbase} alt="" className=" h-full  bottom-0 " /> */}
      </div>
    </>
  );
};
