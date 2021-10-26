import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Web3Modal from "web3Modal"
import {ethers} from "ethers"

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
    </div>
  );
}
