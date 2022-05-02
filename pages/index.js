import Head from 'next/head'
import FirstSection from '../components/FirstSection'
import NavBar from '../components/NavBar'
import {BiMap} from 'react-icons/bi'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourSection from '../components/FourSection'
import FithSection from '../components/FithSection'
import SixSection from '../components/SixSection'
import SevenSection from '../components/SevenSection'
import EightSection from '../components/EightSection'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Landing page</title>
      </Head>
    <NavBar/>
    <div className='w-screen h-10 bg-gray-100 space-x-5'>
     
      <button className='rounded-full border hover:border-blue-500 outline-2 px-2 ml-24 mt-2 '>
        <Image src="/map.svg" className='' alt="me" width="13" height="13" />  Grand Circle, NY </button>
      <button className='rounded-full border hover:border-blue-500 outline-2 px-2 ml-24 mt-2'>
        <Image src="/date.svg" className='' alt="me" width="13" height="13" />  Saturday,13 January 2021 </button>
                
      <a>There are 30 Events Happening in your area</a>
      <a className='px-56	'>See All Events</a>

    </div>

    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourSection/>
     <FithSection/>
     <SixSection/>
     <SevenSection/>
     <EightSection/>
     <Footer/>
    </div>
  )
}
