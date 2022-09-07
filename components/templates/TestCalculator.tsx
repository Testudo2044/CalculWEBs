import { InputField } from "../fields/InputField";
import { LiteralTenkeys } from "../calculatorkeys/LiteralTenkeys";

export const TestCalculator = () => {
  return (
    <>
      <InputField />
      <LiteralTenkeys test="a" />
    </>
  );
}
