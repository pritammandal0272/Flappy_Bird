import toppipe from "../assets/toppipe.png";
import bottompipe from "../assets/bottompipe.png";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ContextProvider } from "../../srore/Context";
export const Slider = () => {
  const {
    topPiller,
    RandomRef,
    Loop,
    setLoop,
    topPillerRef,
    BottomPiller,
    BottomPillerRef,
    GameOver,
    PlaySoundClick,
    Gap,
    GapRef,
    Start,
  } = useContext(ContextProvider);

  useEffect(() => {
    const Stop = setInterval(() => {
      let top = topPiller.current;
      let bottom = BottomPiller.current;
      topPillerRef.current = top.getBoundingClientRect();
      BottomPillerRef.current = bottom.getBoundingClientRect();
      let GapVar = Gap.current;
      GapRef.current = GapVar.getBoundingClientRect();
      if (Start) {
        setLoop((prev) => {
          const next = prev - 5;
          RandomRef.current = Math.floor(Math.random() * 50);
          // console.log(GapRef.current);
          GameOver.current == true ? clearInterval(Stop) : null;
          GameOver.current == true ? PlaySoundClick() : null;
          return next < -30 ? (GameOver.current == true ? 20 : 100) : next;
        });
      }
    }, 100);

    return () => clearInterval(Stop);
  }, [Start,GameOver.current]);

  return (
    <>
      <div
        className={`w-[15%] flex  flex-col absolute h-fit justify-between ScrollDiv ${
          Loop == 100 ? "hide" : GameOver.current == true ? "fixed" : "show"
        }`}
        style={{
          left: `${Loop}%`,
          bottom: `${Loop == 100 ? -RandomRef.current : null}%`,
        }}
      >
        <img src={bottompipe} ref={topPiller} className="h-[70vh] w-[50vw]" />
        <div className="h-[120px]" ref={Gap}></div>
        <img src={toppipe} ref={BottomPiller} className="h-[70vh] w-[50vw]" />
      </div>
    </>
  );
};
