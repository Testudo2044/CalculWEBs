import { useState } from "react";
import { TenkeyTypes } from "../../types/buttons/TenkeyTypes";



export const TenkeyBlock: React.FC<TenkeyTypes> = (props) => {
  const { bgColor, textPx, keyNumber } = props;

  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState();
  const [term, setTerm] = useState();

  const calculator = () => {

  }
  const onClickSystems = () => {
    setLeft(left + 1);
  }
  const onClickOperations = () => {

  }

  return (
    <>
      <div className="border w-20">
        {left}{ope}{term}
      </div>
      <button onClick={onClickSystems} className={`${bgColor} ${textPx} border-2 w-[50px] h-[40px]`}>
        {keyNumber}
      </button>
      <button onClick={onClickOperations} className={`${bgColor} ${textPx} border-2 w-[50px] h-[40px]`}>
        +
      </button>
    </>
  );
}
