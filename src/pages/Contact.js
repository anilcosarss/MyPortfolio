import React from 'react'
import { HiOutlineMail } from "react-icons/hi"
import { GoLocation } from "react-icons/go"
import { BsFillTelephoneFill } from "react-icons/bs"

function Contact() {
    return (
        <div className='bg-gradient-to-b from-black to-gray-800 min-h-[85vh] text-white w-full'>
            <div className='flex flex-col items-center justify-center h-[85vh]'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4 shadow-md shadow-white px-2 py-2 rounded-md'>
                        <BsFillTelephoneFill size={30} />
                        <p className='text-lg'>+90 554 157 82 11</p>
                    </div>
                    <div className='flex flex-start items-center gap-4 shadow-md shadow-white px-2 py-2 rounded-md'>
                        <HiOutlineMail size={30} />
                        <p>anilcosarsg12@gmail.com</p>
                    </div>
                    <div className='flex flex-start items-center gap-4 shadow-md shadow-white px-2 py-2 rounded-md'>
                        <GoLocation size={30} />
                        <p>İstanbul / Sancaktepe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact