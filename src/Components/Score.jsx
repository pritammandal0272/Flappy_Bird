import React, { useContext, useEffect, useRef, useState } from "react";
import { ContextProvider } from "../../srore/Context";
export const Score = () => {
  const {ScoreCount} = useContext(ContextProvider);
  return (
    <>
      <div className="absolute right-0 font-bold m-4 text-[20px] mr-8 text-blue-900">
        Score : {ScoreCount.current}
      </div>
    </>
  );
};
