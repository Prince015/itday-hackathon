import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ViewTopics() {

    const [topic, setTopic] = useState([])

    const navigate = useNavigate()

    const getTopics = async () => {
        let url = "https://hilarious-veil-wasp.cyclic.app/topic/fetch-teacherid"
        console.log(url)

        fetch(url,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            authToken: localStorage.getItem('authToken')
            }
        }).then((data)=>(data===""?"{}":data).json())
        .then((data)=>{
            console.log(data)
            setTopic(data)
        }).catch((err)=>console.log(err))
    }

      useEffect(() => {
        getTopics()
      }, [])

      
      

  return (
    <div className='grid p-4 grid-cols-3 gap-3'>
        {topic?.map((val,idx)=>(
            <Link to={val?._id} key={idx} className='flex text-2xl font-semibold cursor-pointer justify-center items-center bg-gray-500 rounded-lg h-52' >{val?.title}</Link>
        ))}
    </div>
  )
}

export default ViewTopics