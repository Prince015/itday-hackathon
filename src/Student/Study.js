import { Card } from 'antd'
import React from 'react'


function Study() {
    return (
        <div className='p-4 flex flex-col gap-2'>
            <Card>
                <h3 className='font-bold mb-6 text-2xl text-gray-800/90'>My Learning</h3>
                <div className='flex gap-3'>
                    <div className='px-2 flex-1 shadow-md bg-blue-900/10 hover:bg-blue-900/20 transition cursor-pointer flex-col  h-48  rounded-lg flex items-center justify-center'>
                        <p className=' text-xl font-bold text-gray-900/90'>Recent Learnings</p>
                        <p className='text-center mt-3 text-base font-medium text-gray-900/90'>View your past learning history</p>

                    </div>
                    <div className='px-2 flex-1 shadow-md bg-gray-700/30 hover:bg-gray-700/40 transition cursor-pointer flex-col  h-48  rounded-lg flex items-center justify-center'>
                        <p className=' text-xl font-bold text-gray-900/90'>Explore</p>
                        <p className='text-center mt-3 text-base font-medium text-gray-900/90'>Explore study material related to your fields</p>
                    </div>
                    <div className='px-2 flex-1 shadow-md bg-blue-900/30 hover:bg-blue-900/40 transition cursor-pointer flex-col  h-48  rounded-lg flex items-center justify-center'>
                        <p className=' text-xl font-bold text-gray-900/90'>Doubts</p>
                        <p className='text-center mt-3 text-base font-medium text-gray-900/90'>View the list of doubts you have asked</p>
                    </div>
                </div>
            </Card>
            <Card>
                <h3 className='font-bold mb-6 text-2xl text-gray-800/90'>Recent Uploads</h3>
                <div className='grid gap-3 grid-cols-3'>
                    <div className='shadow-xl h-full rounded-md cursor-pointer mt-3'>
                        <img className='rounded-t-md h-44 object-cover' src={require("../assets/images/myHouse.png")} alt="" />
                        <div className='px-2 py-2'>

                        <p className=' text-base font-medium text-gray-900/90'>Topic : Data Structure</p>
                        <p className=' text-base font-medium text-gray-900/90'>Added By Sagar Nishad</p>
                        <span>26/03/2034</span>
                        </div>
                    </div>
                    <div className='shadow-xl h-full rounded-md cursor-pointer mt-3'>
                        <img className='rounded-t-md h-44 object-cover' src={require("../assets/images/myHouse.png")} alt="" />
                        <div className='px-2 py-2'>

                        <p className=' text-base font-medium text-gray-900/90'>Topic : Data Structure</p>
                        <p className=' text-base font-medium text-gray-900/90'>Added By Sagar Nishad</p>
                        <span>26/03/2034</span>
                        </div>
                    </div>
                    <div className='shadow-xl h-full rounded-md cursor-pointer mt-3'>
                        <img className='rounded-t-md h-44 object-cover' src={require("../assets/images/myHouse.png")} alt="" />
                        <div className='px-2 py-2'>

                        <p className=' text-base font-medium text-gray-900/90'>Topic : Data Structure</p>
                        <p className=' text-base font-medium text-gray-900/90'>Added By Sagar Nishad</p>
                        <span>26/03/2034</span>
                        </div>
                    </div>
                    <div className='shadow-xl h-full rounded-md cursor-pointer mt-3'>
                        <img className='rounded-t-md h-44 object-cover' src={require("../assets/images/myHouse.png")} alt="" />
                        <div className='px-2 py-2'>

                        <p className=' text-base font-medium text-gray-900/90'>Topic : Data Structure</p>
                        <p className=' text-base font-medium text-gray-900/90'>Added By Sagar Nishad</p>
                        <span>26/03/2034</span>
                        </div>
                    </div>
                    <div className='shadow-xl h-full rounded-md cursor-pointer mt-3'>
                        <img className='rounded-t-md h-44 object-cover' src={require("../assets/images/myHouse.png")} alt="" />
                        <div className='px-2 py-2'>

                        <p className=' text-base font-medium text-gray-900/90'>Topic : Data Structure</p>
                        <p className=' text-base font-medium text-gray-900/90'>Added By Sagar Nishad</p>
                        <span>26/03/2034</span>
                        </div>
                    </div>
                    <div className='shadow-xl h-full rounded-md cursor-pointer mt-3'>
                        <img className='rounded-t-md h-44 object-cover' src={require("../assets/images/myHouse.png")} alt="" />
                        <div className='px-2 py-2'>

                        <p className=' text-base font-medium text-gray-900/90'>Topic : Data Structure</p>
                        <p className=' text-base font-medium text-gray-900/90'>Added By Sagar Nishad</p>
                        <span>26/03/2034</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Study