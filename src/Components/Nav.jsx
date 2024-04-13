import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaCameraRetro } from "react-icons/fa";
const Nav = () => {
  return (
    <div className='bg-[#628962]'>
        <div className=" flex justify-between items-center px-10 py-10">
            <div className=" flex gap-4">
                <h2 className=" flex items-center text-white font-semibold"><FaPhone /> 111122223333</h2>
                <h2 className="flex  items-center text-white font-semibold"> <IoMail/>connect@skinpheras.com </h2>
            </div>
            <div className="">
                <h1 className=" text-4xl font-serif style-script-regular">SKINPHERAS</h1>

            </div>
            <div className=" flex gap-2 text-3xl text-white"><FaFacebook/> <AiFillTwitterCircle/> <FaPinterest/>  <FaCameraRetro/></div>
        </div>
    </div>
  )
}

export default Nav