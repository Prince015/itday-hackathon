import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AddSubtitle from './AddSubtitle'
import AddVideos from './AddVideos'

function TopicDetails() {

    const param = useParams()
    console.log(param.id)
    const [topic, setTopic] = useState([])
    const getTopicDetails = async () => {
        let url = "https://hilarious-veil-wasp.cyclic.app/topic/fetch"
        console.log(url)

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authToken: localStorage.getItem('authToken')
            },
            body: JSON.stringify({ topicid: param?.id }),
        }).then((data) => (data === "" ? "{}" : data).json())
            .then((data) => {
                console.log(data)
                setTopic(data?.rsp)
            }).catch((err) => console.log(err))
    }

    useEffect(() => {
        getTopicDetails()
    }, [param.id])



    return (
        <div className='p-4'>
            <p className='font-semibold text-2xl uppercase text-center text-gray-900/70'>{topic?.title}</p>
            <div className='flex gap-8 items-center mb-4'>
                <AddSubtitle mainId={topic?._id} />
            </div>
            <p className='font-medium uppercase text-gray-900/90'>{topic?.Subtopic?.length > 0 ? 'Subtopics' : ''}</p>
            <div className='grid p-4 grid-cols-3 gap-3'>
                {topic?.Subtopic?.map((val, idx) => (
                    <Link to={`/teacher-profile/contents/view-topics/${val?.id}`} key={idx} className='flex text-2xl font-semibold cursor-pointer justify-center items-center bg-gray-500 rounded-lg h-52' >{val?.name}</Link>
                ))}
            </div>
            <div className='flex gap-8 items-center mb-4'>
                <AddVideos mainId={topic?._id} />
            </div>
            <p className='font-medium uppercase text-gray-900/90'>{topic?.video?.length > 0 ? 'Subtopics' : ''}</p>
            <div className='grid p-4 grid-cols-3 gap-3'>
                {topic?.video?.map((val, idx) => (
                    <Link to={val?.url} target="_blank" key={idx} className='flex text-2xl font-semibold cursor-pointer justify-center items-center bg-gray-500 rounded-lg h-52' >{val?.title}</Link>
                ))}
            </div>
        </div>
    )
}

export default TopicDetails