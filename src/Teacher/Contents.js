
import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddNotes from './AddNotes'
import AddSubtitle from './AddSubtitle'
import AddVideos from './AddVideos'
import CreateTopic from './CreateTopic'

function Contents() {

  const navigate = useNavigate()

  return (
    <div className='p-4'>
      
      <div className='flex gap-8 items-center mb-4'>
      <CreateTopic/>
      </div>
      <div className='flex gap-8 items-center mb-4'>
        <p>View Topic</p>
        <Button onClick={()=>{navigate('view-topics')}} >Click Here</Button>
      </div>
      <div className='flex gap-8 items-center mb-4'>
       <AddVideos/>
      </div>
      <div className='flex gap-8 items-center mb-4'>
        <AddNotes/>
      </div>
    </div>
  )
}

export default Contents