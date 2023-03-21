import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Avatar, Button, Form, Input } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const data = [
    {
        gpt: false,
        message: 'HI buddy'
    },
    {
        gpt: true,
        message: 'Hi Sir!'
    }
]

function ChatGpt() {

    const [chatData, setChatData] = useState([])

    const gpt = true
    const [form] = Form.useForm();
    const handleChatSend = (val) => {
        console.log(val)
        const newData = {gpt:false, message:val.text}
        setChatData(elements => [...elements, newData]);
        form.setFieldValue('text', '')
        sendMessage(val.text)
    }

    console.log(chatData)


    console.log(process.env.REACT_APP_OPEN_AI_KEY)

    const sendMessage = async (msg) => {
        console.log(msg)
        // const response = await fetch('https://api.openai.com/v1/chat/completions', {
        //     method: "POST",
        //     headers:{
        //         Authorization: `${process.env.REACT_APP_OPEN_AI_KEY}`
        //     },
        //     body: JSON.stringify({
        //         "model": "gpt-3.5-turbo",
        //         "messages": [{ "role": "user", "content": msg }]
        //     })
        // })
        axios({
            method: 'post',
            url: 'https://api.openai.com/v1/chat/completions',
            headers: {
                // 'content-type': `multipart/form-data`,
                Authorization: `${process.env.REACT_APP_OPEN_AI_KEY}`
            },
            data: {
                model: "gpt-3.5-turbo",
                messages: [{ "role": "user", "content": msg }]
            },
        }).then((response) => {
            
            console.log(response.data)
            const newData = {gpt : true, message :response?.data?.choices[0].message?.content}
            setChatData(elements => [...elements, newData]);
        });
        // const rspData = await response.json()
        // console.log(rspData)
    }

    return (
        // <div style={{ height: "calc(100vh - 4rem)" }} className='  flex-col flex '>
        <>
            <div style={{ height: "calc(100vh - 9rem)" }} className='px-3 py-2 flex-1 overflow-y-auto '>
                {/* <div className={`${gpt ? 'ml-auto' : ''} font-sans font-medium text-gray-600 bg-blue-900/20 p-2 rounded-lg max-w-2xl`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus saepe totam odio eos eaque autem quia doloribus excepturi magni suscipit dignissimos atque molestiae nemo, minima nostrum voluptatem. Sunt numquam libero fuga cupiditate, quaerat enim quibusdam.
                </div> */}
                {chatData.map((val, idx) => (
                    <div key={idx} className={`mb-4 gap-2 flex ${!val.gpt ? 'justify-end':''}`}>
                    <span>{!val.gpt ? <Avatar className='' src="https://joesch.moe/api/v1/random?key=1"/>: <Avatar src='https://cdn-icons-png.flaticon.com/512/2068/2068998.png'/>}</span>
                    <div className={` ${!val.gpt ? '':'bg-gray-900/20'}  font-sans font-medium text-gray-600 bg-blue-900/20 px-4 py-3 rounded-lg max-w-2xl`}>
                        {val?.message}
                    </div>
                    </div>
                ))}
            </div>
            <div className='h-20 bg-white box-border sticky bottom-0'>
                <Form form={form} onFinish={handleChatSend}>
                    <Form.Item name='text'>
                        <Input className='h-12 my-2' suffix={<Button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        </Button>} />
                    </Form.Item>
                </Form>
            </div>
            {/* </div> */}
        </>
    )
}

export default ChatGpt