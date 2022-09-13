import { useState } from 'react'
import React from "react";

interface Props {
  fillA?: string;
  fillB?: string;
  fillC?: string;
  fillD?: string;
  fillE?: string;
  fillF?: string;
  fillG?: string;
}


const seven = {

}

export const SegmentDisplay: React.FC<Props> = props => {
  const { fillA, fillB, fillC, fillD, fillE, fillF, fillG, } = props;
  return (
    <>
      <svg width="100" height="160" viewBox="0 0 100 160"  className="bg-red-100" >
        <polygon points="25,24 29,28 71,28 75,24 71,20 29,20" fill={fillA} />
        <polygon points="25,26 21,30 21,72 25,76 29,72 29,30" fill={fillF} />
        <polygon points="75,26 71,30 71,72 75,76 79,72 79,30" fill={fillB} />
        <polygon points="25,78 29,82 71,82 75,78 71,74 29,74" fill={fillG} />
        <polygon points="25,80 21,84 21,126 25,130 29,126 29,84" fill={fillE} />
        <polygon points="75,80 71,84 71,126 75,130 79,126 79,84" fill={fillC} />
        <polygon points="25,132 29,136 71,136 75,132 71,128 29,128" fill={fillD} />
      </svg>
    </>
  );
};
