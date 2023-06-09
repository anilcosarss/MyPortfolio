import React from 'react'

import { experiences } from '../datas'

function Experience() {
    return (
        <div className='bg-gradient-to-b from-black to-gray-800 w-full min-h-[85vh]'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {experiences.map(({ id, src, title, style }) => {
                        return (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} className="w-24 h-24 mx-auto" alt="lan" />
                                <p className='mt-4'>{title}</p>
                            </div>
                        )
                    })}
                </div>

            </div>


        </div>
    )
}

export default Experience