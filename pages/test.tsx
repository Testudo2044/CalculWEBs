import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LiteralTenkeys } from "../components/calculatorkeys/LiteralTenkeys"
import { TestCalculator } from '../components/templates/TestCalculator'
import { TenkeyBlock } from "../components/buttons/TenkeyBlock"
import { InputField } from "../components/fields/InputField";
import { SegmentDisplay } from "../components/displays/SegmentDisplay";


const Home: NextPage = () => {
  return (
    <>
      <div className="m-32">
        <SegmentDisplay />
      </div>
    </>
  );
}

export default Home
