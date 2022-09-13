import { useState } from 'react'
import React from 'react';

export type FillTypes = {
  fillA?: string;
  fillB?: string;
  fillC?: string;
  fillD?: string;
  fillE?: string;
  fillF?: string;
  fillG?: string;
}

export const SegmentDisplay2: React.FC<FillTypes> = () => {

  const init = 0;
  const [add, setAdd] = useState(init);

  const onClickAdd = () => {
    setAdd(prevAdd => prevAdd + 1)
  }
  const onClickSubtract = () => {
    add > 0 ?
      setAdd(prevAdd => prevAdd - 1) :
      setAdd(prevAdd => prevAdd)
  }

  let fillA = "#d9d9d9"
  let fillB = "#d9d9d9"
  let fillC = "#d9d9d9"
  let fillD = "#d9d9d9"
  let fillE = "#d9d9d9"
  let fillF = "#d9d9d9"
  let fillG = "#d9d9d9"

  if (add === 0) {
    fillA = "black",
    fillB = "black",
    fillC = "black",
    fillD = "black",
    fillE = "black",
    fillF = "black",
    fillG = "#d9d9d9"
  } else if (add === 1) {
    fillA = "#d9d9d9",
    fillB = "black",
    fillC = "black",
    fillD = "#d9d9d9",
    fillE = "#d9d9d9",
    fillF = "#d9d9d9",
    fillG = "#d9d9d9"
  } else if (add === 2) {
    fillA = "black",
    fillB = "black",
    fillC = "#d9d9d9",
    fillD = "black",
    fillE = "black",
    fillF = "#d9d9d9",
    fillG = "black"
  } else if (add === 3) {
    fillA = "black",
    fillB = "black",
    fillC = "black",
    fillD = "black",
    fillE = "#d9d9d9",
    fillF = "#d9d9d9",
    fillG = "black"
  } else if (add === 4) {
    fillA = "#d9d9d9",
    fillB = "black",
    fillC = "black",
    fillD = "#d9d9d9",
    fillE = "#d9d9d9",
    fillF = "black",
    fillG = "black"
  } else if (add === 5) {
    fillA = "black",
    fillB = "#d9d9d9",
    fillC = "black",
    fillD = "black",
    fillE = "#d9d9d9",
    fillF = "black",
    fillG = "black"
  } else if (add === 6) {
    fillA = "black",
    fillB = "#d9d9d9",
    fillC = "black",
    fillD = "black",
    fillE = "black",
    fillF = "black",
    fillG = "black"
  } else if (add === 7) {
    fillA = "black",
    fillB = "black",
    fillC = "black",
    fillD = "#d9d9d9",
    fillE = "#d9d9d9",
    fillF = "black",
    fillG = "#d9d9d9"
  } else if (add === 8) {
    fillA = "black",
    fillB = "black",
    fillC = "black",
    fillD = "black",
    fillE = "black",
    fillF = "black",
    fillG = "black"
  } else if (add === 9) {
    fillA = "black",
    fillB = "black",
    fillC = "black",
    fillD = "black",
    fillE = "#d9d9d9",
    fillF = "black",
    fillG = "black"
  }


  return (
    <>
      <div className="border w-[100px]">{add}</div>
      <svg width="100" height="160" viewBox="0 0 100 160"  className="bg-red-100" >
        <polygon points="25,24 29,28 71,28 75,24 71,20 29,20" fill={fillA} />
        <polygon points="25,26 21,30 21,72 25,76 29,72 29,30" fill={fillF} />
        <polygon points="75,26 71,30 71,72 75,76 79,72 79,30" fill={fillB} />
        <polygon points="25,78 29,82 71,82 75,78 71,74 29,74" fill={fillG} />
        <polygon points="25,80 21,84 21,126 25,130 29,126 29,84" fill={fillE} />
        <polygon points="75,80 71,84 71,126 75,130 79,126 79,84" fill={fillC} />
        <polygon points="25,132 29,136 71,136 75,132 71,128 29,128" fill={fillD} />
      </svg>
      <button onClick={onClickAdd} className="border w-[50px] h-10" >+</button>
      <button onClick={onClickSubtract} className="border w-[50px] h-10" >-</button>
    </>
  );
};
