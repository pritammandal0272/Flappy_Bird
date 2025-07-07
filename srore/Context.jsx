import React, { createContext, useRef, useState } from "react";
export const ContextProvider = createContext();
import sound1 from "../src/assets/audio/sound1.mp3";
import sound2 from "../src/assets/audio/sound2.mp3";
import sound3 from "../src/assets/audio/sound3.mp3";
export const ContextAPI = ({ children }) => {
  const [Bird, setBird] = useState(40);
  const [Loop, setLoop] = useState(100);
  const BirdPosition = useRef();
  const BirdPositionSrore = useRef();
  const topPiller = useRef();
  const topPillerRef = useRef();
  const BottomPiller = useRef();
  const BottomPillerRef = useRef();
  let RandomRef = useRef(20);
  const Stop = useRef();
  const GameOver = useRef(false);
  const ScoreCount = useRef(0);
  const StopScoreCount = useRef(true);
  const Gap = useRef();
  const GapRef = useRef();
  const ChackBaseFirstImg = useRef(false);
  const [SelectBird, setSelectBird] = useState("bird1");
  const [Start, setStart] = useState(false);
  const ApplyBirdRef = useRef("Bird1");
  const PlaySoundClick = () => {
    new Audio(GameOver.current ? sound2 : sound1).play();
  };
  const ScoreSound = () => {
    new Audio(sound3).play();
  };
  const RestartFun = () => {
    console.log("aa");
    setBird(40);
    setLoop(100);
    GameOver.current = false;
    ScoreCount.current = 0;
  };
  const BacktoHome = () => {
    setBird(40);
    setLoop(100);
    setStart(false)
    GameOver.current = false;
    ScoreCount.current = 0;
  }
  return (
    <>
      <ContextProvider.Provider
        value={{
          setBird,
          Bird,
          BirdPosition,
          BirdPositionSrore,
          Stop,
          topPiller,
          RandomRef,
          Loop,
          setLoop,
          Stop,
          topPillerRef,
          BottomPiller,
          BottomPillerRef,
          GameOver,
          PlaySoundClick,
          ScoreCount,
          ScoreSound,
          Gap,
          GapRef,
          StopScoreCount,
          ChackBaseFirstImg,
          SelectBird,
          setSelectBird,
          // SelectBackground,
          // setSelectBackground,
          setStart,
          Start,
          ApplyBirdRef,
          RestartFun,
          BacktoHome
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};
