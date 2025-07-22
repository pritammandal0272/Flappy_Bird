import { ContextAPI, ContextProvider } from "../../srore/Context";
import flappybird0 from "../assets/flappybird0.png";
import bird1 from "../assets/BirdImage/bird1.gif";
import bird2 from "../assets/BirdImage/bird2.gif";
import bird3 from "../assets/BirdImage/bird3.gif";
import bird4 from "../assets/BirdImage/bird4.gif";
import StaticB1 from "../assets/BirdImage/BirdStaticphoto/StaticB1.png";
import StaticB2 from "../assets/BirdImage/BirdStaticphoto/StaticB2.png";
import StaticB3 from "../assets/BirdImage/BirdStaticphoto/StaticB3.png";
import StaticB4 from "../assets/BirdImage/BirdStaticphoto/StaticB4.png";
import { useContext, useEffect, useRef, useState } from "react";
export const Bird = () => {
  const {
    setBird,
    Bird,
    BirdPosition,
    BirdPositionSrore,
    Stop,
    topPillerRef,
    BottomPiller,
    BottomPillerRef,
    GameOver,
    PlaySoundClick,
    GapRef,
    ScoreCount,
    StopScoreCount,
    ScoreSound,
    Start,
    SelectBird,
  } = useContext(ContextProvider);
  useEffect(() => {
    if (Start) {
      const keyDownEvent = (e) => {
        // if (e.key == " ") {
          setBird((prev) => {
            const Next = prev + 18;
            PlaySoundClick();
            return Next;
          });
        // }
      };
      Stop.current = setInterval(() => {
        setBird((prev) => {
          const next = prev - 10;
          BirdPositionSrore.current =
            BirdPosition.current.getBoundingClientRect();
          if (
            !(
              BirdPositionSrore.current.bottom < topPillerRef.current.top ||
              BirdPositionSrore.current.top > topPillerRef.current.bottom ||
              BirdPositionSrore.current.right < topPillerRef.current.left ||
              BirdPositionSrore.current.left > topPillerRef.current.right
            ) ||
            !(
              BirdPositionSrore.current.bottom < BottomPillerRef.current.top ||
              BirdPositionSrore.current.top > BottomPillerRef.current.bottom ||
              BirdPositionSrore.current.right < BottomPillerRef.current.left ||
              BirdPositionSrore.current.left > BottomPillerRef.current.right
            ) ||
            next < 10
          ) {
            // console.log("ditected");
            GameOver.current = true;
          } else if (BirdPositionSrore.current.left > GapRef.current.right) {
            if (StopScoreCount.current) {
              // console.log("Score");
              ScoreCount.current = ScoreCount.current + 1;
              StopScoreCount.current = false;
              ScoreSound();
            }
          } else if (BirdPositionSrore.current.left > GapRef.current.left) {
            // console.log("Stop");
            StopScoreCount.current = true;
          }

          return next < 10
            ? clearInterval(Stop.current)
            : GameOver.current
            ? 10
            : next;
        });
      }, 200);
      window.addEventListener("click", keyDownEvent);

      return () => {
        window.removeEventListener("click", keyDownEvent);
        clearInterval(Stop.current);
      };
    }
  }, [Start,GameOver.current]);

  return (
    <>
      <div
        className={`absolute w-fit left-10`}
        style={{ bottom: `${Bird}%`, transition: "0.2s linear" }}
      >
        {/* {console.log(GameOver.current)} */}
        <img
          src={
            SelectBird == "bird1"
              ? GameOver.current
                ? StaticB1
                : bird1
              : SelectBird == "bird2"
              ? GameOver.current
                ? StaticB2
                : bird2
              : SelectBird == "bird3"
              ? GameOver.current
                ? StaticB3
                : bird3
              : GameOver.current
              ? StaticB4
              : bird4
          }
          className="w-[60px]"
          ref={BirdPosition}
        />
      </div>
    </>
  );
};
