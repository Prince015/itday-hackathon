import React, { Fragment, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

function HeroSection() {

    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )


    return (
        <div className='flex py-24 justify-between gap-8 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <div >
                <h4 className='text-6xl font-bold font-sans'>Providing Learning Platform <br /> Increasing Learning Outcomes</h4>
                <p className='text-3xl my-10 font-medium'>will help to manage notes, give assignments and to grow together</p>
                <div className="min-w-72 flex gap-2 items-center ">
                    <Combobox value={selected} onChange={setSelected}>
                        <div className="w-96">
                            <div className="relative w-full border-transparent focus:outline-none focus:border-transparent  cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md  sm:text-sm">
                                <Combobox.Input
                                    className="w-full  text-gray-500 focus:outline-none border-none py-3 pl-3 pr-10 text-sm leading-5 focus:ring-0"
                                    displayValue={(person) => person.name}
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                                {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Combobox.Button> */}
                            </div>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery('')}
                            >
                                <Combobox.Options className="absolute mt-1 max-w-[24rem] max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredPeople.length === 0 && query !== '' ? (
                                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                            Nothing found.
                                        </div>
                                    ) : (
                                        filteredPeople.map((person) => (
                                            <Combobox.Option
                                                key={person.id}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span
                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                    }`}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))
                                    )}
                                </Combobox.Options>
                            </Transition>
                        </div>
                    </Combobox>
                    <button className='rounded-lg bg-white px-2 py-2.5'>

                        <MagnifyingGlassIcon className="h-6 w-8 text-gray-500" aria-hidden="true" />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default HeroSection