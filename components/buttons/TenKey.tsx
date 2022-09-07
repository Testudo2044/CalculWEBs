import { TenKeyTypes } from "../../types/buttons/TenKeyTypes";

export const TenKey: React.FC<TenKeyTypes> = (props) => {
  return (
    <>
      <button className="bg-slate-400 border-2 w-[56px] h-[50px]">{props.keyNumber}</button>
    </>
  );
}
