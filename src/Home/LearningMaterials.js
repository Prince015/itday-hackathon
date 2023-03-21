import React from 'react'
import CountUp from 'react-countup'

function LearningMaterials() {
    return (
        <div className='py-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <h3 className='text-center font-sans font-bold text-4xl mb-10'>LEARNING MATERIALS</h3>
            <div className='flex justify-between gap-8'>
                <div className='bg-white shadow-xl cursor-pointer transition-all hover:scale-105 rounded-lg w-full py-12 px-4'>
                    <p className='font-sans text-2xl text-center font-medium'>TEXT BOOKS</p>
                </div>
                <div className='bg-white shadow-xl cursor-pointer transition-all hover:scale-105 rounded-lg w-full py-12 px-4'>
                    <p className='font-sans text-2xl text-center font-medium'>NOTES</p>
                </div>
                <div className='bg-white shadow-xl cursor-pointer transition-all hover:scale-105 rounded-lg w-full py-12 px-4'>
                    <p className='font-sans text-2xl text-center font-medium'>PYQS</p>
                </div>

            </div>
        </div>
    )
}

export default LearningMaterials