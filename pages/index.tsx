import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LiteralTenkeys } from "../components/calculatorkeys/LiteralTenkeys"
import { TestCalculator } from '../components/templates/TestCalculator'


const Home: NextPage = () => {
  return (
    <>
      <div className="m-32">
        <TestCalculator />
      </div>
    </>
  );
}

export default Home
