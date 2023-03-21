import React from 'react'
import CountUp from 'react-countup'

function RegisterUsers() {
    return (
        <div className='py-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <h3 className='text-center font-sans font-bold text-4xl mb-10'>REGISTER USERS</h3>
            <div className='flex justify-between gap-8'>
                <div className='bg-white shadow-xl border border-gray-500 rounded-lg w-full py-12 px-4'>
                    <p className='font-sans text-3xl text-center font-medium'>SCHOOLS</p>
                    <CountUp
                        className="text-gray-600 font-semibold text-center mx-auto w-fit flex mt-3 font-mono text-6xl"
                        start={0}
                        end={128}
                        duration={2.75}
                        useEasing={true}
                        useGrouping={true}
                        separator=" "
                    // decimals={4}
                    // decimal=","
                    // prefix="EUR "
                    // suffix=" left"
                    // onComplete={onComplete}
                    // onStart={onStart}
                    />
                </div>
                <div className='bg-white shadow-xl border border-gray-500 rounded-lg w-full py-12 px-4'>
                    <p className='font-sans text-3xl text-center font-medium'>TEACHER</p>
                    <CountUp
                        className="text-gray-600 font-semibold text-center mx-auto w-fit flex mt-3 font-mono text-6xl"
                        start={23}
                        end={612}
                        duration={2.75}
                        useEasing={true}
                        useGrouping={true}
                        separator=" "
                    // decimals={4}
                    // decimal=","
                    // prefix="EUR "
                    // suffix=" left"
                    // onComplete={onComplete}
                    // onStart={onStart}
                    />
                </div>
                <div className='bg-white shadow-xl border border-gray-500 rounded-lg w-full py-12 px-4'>
                    <p className='font-sans text-3xl text-center font-medium'>STUDENTS</p>
                    <CountUp
                        className="text-gray-600 font-semibold text-center mx-auto w-fit flex mt-3 font-mono text-6xl"
                        start={123}
                        end={5493}
                        duration={2.75}
                        useEasing={true}
                        // useGrouping={true}
                        // separator=" "
                    // decimals={4}
                    // decimal=","
                    // prefix="EUR "
                    // suffix=" left"
                    // onComplete={onComplete}
                    // onStart={onStart}
                    />
                </div>

            </div>
        </div>
    )
}

export default RegisterUsers