import { Button, Card } from 'antd'
import React, { useEffect, useState } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Store/StateProvider';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Performance in individua Fields',
    },
  },
};

const labels = ['C++', 'JavaScript', 'Python', 'Next JS', 'Php', "HTML"];

const data = {
  labels,
  datasets: [
    {
      label: 'Fields',
      data: [12, 23, 34, 12, 84, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    //   {
    //     label: 'Dataset 2',
    //     data: [37,49,13,50,628,25],
    //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //   },
  ],
};

function Profile() {



  const [profileData, setProfileData] = useState({})

  const [state, dispatch] = useStateValue()
  console.log(state)

  const [url, seturl] = useState('')

  // let url = null
    

  const getProfile = async () => {
    console.log(url)
    axios.get(url, {
      headers: {
        // "Content-Type": "application/json",
        authToken: localStorage.getItem('authToken')
      }
    })
      .then((results) => results)
      .then((data) => {
        setProfileData(data?.data)
        console.log(data?.data)
        // console.log("data", data);
      });
  }

  const setUrlOnce = () =>{
    console.log(state)
    const type =  localStorage.getItem('userType')
    switch (type) {
      case "0":
        break;
      case "1":
        seturl("https://hilarious-veil-wasp.cyclic.app/teacher/fetch")

        break;
      case '2':
        seturl("https://hilarious-veil-wasp.cyclic.app/student/fetch")
        // fetchData(url)
        break;
      default:
        console.log("wrong choice")

        return
        break;

    }
  }

  useEffect(() => {
    getProfile()
  }, [url])
  


  useEffect(() => {
    setUrlOnce()
  }, [])



  const profileCompleted = false;
  return (
    <div className='p-4 flex flex-col gap-2'>
      <div className='flex gap-2'>
        <Card className='w-[38rem] text-center'>
          <div className="relative block">
            <img alt="profil" src="https://randomuser.me/api/portraits/men/75.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
          </div>
          <h3 className='mt-3 font-semibold text-lg text-gray-800/90'>{profileData?.Name}</h3>
          <h3 className='mt-0 font-medium text-base text-gray-800/90'>{state?.type == '1'? 'Teacher':'Student'}</h3>
        </Card>
        <Card className='w-full'>
          <div className='mb-6  flex justify-between'>
            <h3 className='font-bold text-xl text-gray-800/90'>Profile Details</h3>
            <button className='px-5 font-semibold py-1.5 rounded-lg bg-gray-600/70 border-gray-800 hover:bg-gray-600/60 text-white hover:text-white'>
              {profileCompleted ? 'Edit' : 'Update'}
            </button>
          </div>
          <p className='mt-3 text-base font-medium'>Organization Name : <span className='mt-3 text-base font-medium text-gray-600'>{profileData?.organization}</span></p>
          {state?.type=='2' && <p className='mt-3 text-base font-medium'>Field of Study : <span className='mt-3 text-base font-medium text-gray-600'>{profileData?.Class}</span></p>}
          <p className='mt-3 text-base font-medium'>Level : <span className='mt-3 text-base font-medium text-gray-600'>{profileData?.level}</span></p>
          <p className='mt-3 text-base font-medium'>Points : <span className='mt-3 text-base font-medium text-gray-600'>{profileData?.points}</span></p>
        </Card>
      </div>

      {state?.type == 2 && <Card>
        <Bar options={options} data={data} />
      </Card>}
    </div>
  )
}

export default Profile