import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layouts/Layout";
import { Hero } from "@/components/sections";

export default function Home() {
  return (
    <Layout
      meta={{
        title: "Home",
      }}
    >
      <div className="w-screen h-10 bg-gray-100 space-x-5">
        <button className="rounded-full border hover:border-blue-500 outline-2 px-2 ml-24 mt-2 ">
          <Image src="/map.svg" className="" alt="me" width="13" height="13" />
          Grand Circle, NY
        </button>
        <button className="rounded-full border hover:border-blue-500 outline-2 px-2 ml-24 mt-2">
          <Image src="/date.svg" className="" alt="me" width="13" height="13" />
          Saturday,13 January 2021{" "}
        </button>
        <a>There are 30 Events Happening in your area</a>
        <a className="px-56	">See All Events</a>
      </div>
      <Hero />
    </Layout>
  );
}
