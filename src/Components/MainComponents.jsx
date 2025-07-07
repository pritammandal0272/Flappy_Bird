import back1 from "../assets/image/back1.jpg";
import back2 from "../assets/image/back2.jpg";
import back3 from "../assets/image/back3.jpg";
import back4 from "../assets/image/back4.png";
import "./style.css";
import { Slider } from "./Slider";
import React, { useContext, useEffect, useState } from "react";
import { Bird } from "./Bird";
import { ContextAPI, ContextProvider } from "../../srore/Context";
import { Score } from "./Score";
import { Base } from "./Base";
import { FirstPage } from "./FirstPage";
import { Restart } from "./Restart";
export const MainComponents = () => {
  const [SelectBackground, setSelectBackground] = useState("back1");
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center overflow-hidden newdiv">
        <div
          className="h-full md:w-[30%] w-full relative overflow-hidden"
          style={{
            backgroundImage: `url(${
              SelectBackground == "back1"
                ? back1
                : SelectBackground == "back2"
                ? back2
                : SelectBackground == "back3"
                ? back3
                : back4
            })`,
          }}
        >
          <ContextAPI>
            <FirstPage
              SelectBackground={SelectBackground}
              setSelectBackground={setSelectBackground}
            />
            <Restart />
            <Score />
            <Slider />
            <Bird />
            <Base />
          </ContextAPI>
        </div>
      </div>
    </>
  );
};
