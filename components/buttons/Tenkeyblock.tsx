import { TenkeyTypes } from "../../types/buttons/TenkeyTypes";



export const TenkeyBlock: React.FC<TenkeyTypes> = (props) => {
  return (
    <>
      <button className={`${props.bgColor} ${props.textPx} border-2 w-[50px] h-[40px]`}>
        {props.keyNumber}
      </button>
    </>
  );
}
