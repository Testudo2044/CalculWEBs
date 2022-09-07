import { TenkeyBlock } from "../buttons/Tenkeyblock"


export const LiteralTenkeys: React.FC<{test: string;}> = () => {
  return (
    <>
      <div className="">
        <div>
          <TenkeyBlock textPx="text-[10px]" bgColor="white" keyNumber="←" />
          <TenkeyBlock textPx="text-[10px]" bgColor="white" keyNumber="→" />
          <TenkeyBlock textPx="text-[10px]" bgColor="white" keyNumber="取消" />
          <TenkeyBlock textPx="text-[10px]" bgColor="white" keyNumber="全消" />
          <TenkeyBlock textPx="text-[10px]" bgColor="white" keyNumber="x" />
          <TenkeyBlock textPx="text-[10px]" bgColor="white" keyNumber="閉じる" />
        </div>
        <div>
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
        </div>
        <div>
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
        </div>
        <div>
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
        </div>
        <div>
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
          <TenkeyBlock textPx="text-[16px]" bgColor="white" keyNumber="1" />
        </div>
      </div>
    </>
  );
}
