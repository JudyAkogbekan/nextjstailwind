import React from 'react'
import Image from 'next/image'

function ThirdSection() {
  return (
    <div className='ml-26 mr-25 py-16 space-y-5 ' >
        
          <h1 className='text-4xl font-semibold px-24'>Popular Events </h1>
          <div className='w-screen h-10 space-x-5 '>
                <button className='rounded-full border border-gray-200 outline-2 px-2 ml-24 mt-2 '><Image src="/map.svg" className='' alt="me" width="13" height="13" />  Grand Circle, NY<Image src="/pen.svg" className='' alt="me" width="13" height="13" /> </button>
                <button className='rounded-full border border-gray-200 outline-2 px-2 ml-24 mt-2 '><Image src="/date.svg" className='' alt="me" width="13" height="13" />  Saturday,13 January 2021<Image src="/pen.svg" className='' alt="me" width="13" height="13" />  </button>
                
         </div>

         <div className='w-screen h-10 space-x-5 ml-24 '>
              
                    <a className='text-blue-500' href='' >All </a>
                    <a href=''>For You</a>
                    <a href=''>Today</a>
                    <a href=''>This Weekend</a>
                    <a href=''>Holiday Events</a>
                    <a href=''>Free Entry</a>
                    <a href=''>Music</a>
                    <a href=''>Food & Drinks</a>
                    <a href=''>Virtual Events</a>
               
         </div>

         <div className='ml-24 mr-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
                <div className='shadow rounded-lg '>
                <img
                className="rounded-t-lg  "
                alt="users" src='https://isperear.sirv.com/Images/image%20(3).png'
                />
                
                <ul className='space-y-1 mb-2'>
                <li className='text-[#165FFC]  text-[16px] text-center '>Dance Party Grand Event at New Castle</li>
                <li className='text-[#000000]  text-[10px] ml-1 '><Image src="/map.svg" className='' alt="me" width="13" height="13" /> American Airline Center, Dallas, TX</li>
                <li className='text-[#E85353]  text-[10px] ml-1 '> <Image src="/date.svg" className='' alt="me" width="13" height="13" /> Fri,Jan 8,2021 5:00 PM CST</li>
                <li className='text-[#000000]  text-[10px] ml-1 '><Image src="/send.svg" className='' alt="me" width="13" height="13" />20 miles away </li>
                </ul>
                

                </div>


                <div className='shadow rounded-lg'>
                <img
                className="rounded-t-lg  "
                alt="users" src='https://isperear.sirv.com/Images/image%20(4).png'
                /> 

                 
               <ul className='space-y-1 mb-2'>
                <li className='text-[#165FFC]  text-[16px] text-center '> Dance Party Grand Event at New Castle</li>
                <li className='text-[#000000]  text-[10px] ml-1 '><Image src="/map.svg" className='' alt="me" width="13" height="13" /> American Airline Center, Dallas, TX</li>
                <li className='text-[#E85353]  text-[10px] ml-1 '> <Image src="/date.svg" className='' alt="me" width="13" height="13" /> Fri,Jan 8,2021 5:00 PM CST</li>
                <li className='text-[#000000]  text-[10px] ml-1 '><Image src="/send.svg" className='' alt="me" width="13" height="13" />20 miles away </li>
                </ul>

                </div>


                <div className='shadow rounded-lg'>
                <img
                className="rounded-t-lg  "
                alt="users" src='https://isperear.sirv.com/Images/image%20(5).png'
                />  
                 
                 <ul className='space-y-1 mb-2'>
                 <li className='text-[#165FFC]  text-[16px] text-center '> Dance Party Grand Event at New Castle</li>
                <li className='text-[#000000]  text-[10px] ml-1 '><Image src="/map.svg" className='' alt="me" width="13" height="13" /> American Airline Center, Dallas, TX</li>
                <li className='text-[#E85353]  text-[10px] ml-1 '> <Image src="/date.svg" className='' alt="me" width="13" height="13" /> Fri,Jan 8,2021 5:00 PM CST</li>
                <li className='text-[#000000]  text-[10px] ml-1 '><Image src="/send.svg" className='' alt="me" width="13" height="13" />20 miles away </li>
                </ul>
                </div>

                <div className='shadow rounded-lg'>
                    
                <img
                className="rounded-t-lg  "
                alt="users" src='https://isperear.sirv.com/Images/image%20(6).png'
                /> 

                 
                <ul className='space-y-1 mb-2'>
                <li className='text-[#165FFC]  text-[16px] text-center '> Dance Party Grand Event at New Castle</li>
                <li className='text-[#000000]  text-[10px] ml-1 '><Image src="/map.svg" className='' alt="me" width="13" height="13" /> American Airline Center, Dallas, TX</li>
                <li className='text-[#E85353]  text-[10px] ml-1 '> <Image src="/date.svg" className='' alt="me" width="13" height="13" /> Fri,Jan 8,2021 5:00 PM CST</li>
                <li className='text-[#000000]  text-[10px] ml-1 '><Image src="/send.svg" className='' alt="me" width="13" height="13" />20 miles away </li>
                </ul>
                </div>

    </div>


    <div className='text-center'>
    <button class="bg-transparent text-gray-500  hover:border-blue-300 py-2 px-20 w-96 border rounded text-center">
  See more
   </button>  
    </div>

    </div>
  )
}

export default ThirdSection