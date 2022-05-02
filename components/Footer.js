import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import Image from 'next/image'
export default function Footer() {
  return (
    <>

<div className='ml-20 mt-14'>
<img classNam="Sirv ml-15" src="https://isperear.sirv.com/Images/Logo.png" alt="" />

</div>
<div className='w-screen h-10 space-x-5 ml-20 text-sm'>
    <a href=''>About</a>
    <a href=''> Rewards</a>
    <a href=''>Blog</a>
    <a href=''> Terms</a>
    <a href=''>Privacy & Cookies</a>
</div>

<div class="flex items-stretch space-x-9 ml-20">
  <div class=""><a href=''><BsFacebook/></a></div>
  <div class=""><a href=''><AiOutlineInstagram/> </a></div>
  <div class=""><a href=''><AiOutlineYoutube/></a></div>
  <div class=""><a href=''><AiFillTwitterCircle/></a></div>
</div>

<div class="flex items-stretch ml-20 mt-5 mb-60">
  <p>Copyrights     <Image src="/copy.svg" className='' alt="me" width="13" height="13" />       2020. All Rights Reserved</p>
</div>

    </>
  )
}
