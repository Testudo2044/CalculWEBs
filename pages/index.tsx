import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { TenKey } from "../components/buttons/TenKey";

const Home: NextPage = () => {
  return (
    <>
      <div className="text-center text-4xl">
        <a href="/">html</a>
      </div>
      <TenKey keyNumber="1" />
    </>
  )
}

export default Home
