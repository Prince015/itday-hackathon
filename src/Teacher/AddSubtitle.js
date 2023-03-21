import React from 'react'
import { Button, Form, Input } from 'antd'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function AddSubtitle({ mainId }) {

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const handleFinish = (e) => {
        console.log(e)
        fetch("https://hilarious-veil-wasp.cyclic.app/topic/addsubtopic", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authToken: localStorage.getItem('authToken')
            },
            body: JSON.stringify({ ...e, topicid: mainId })
        })
            .then((results) => results.json())
            .then((data) => {
                console.log(data)
                closeModal()
            });
    }


    return (
        <>
            <p>Add Subtopic</p>
            <Button onClick={openModal}>Click Here</Button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add Subtopic
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Enter subtopic details here
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <Form onFinish={handleFinish} >
                                            <Form.Item label='Title' name='title'>
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label='Description' name='description'>
                                                <Input />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button htmlType='submit' >Submit</Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AddSubtitle