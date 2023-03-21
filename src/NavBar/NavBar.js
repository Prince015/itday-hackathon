import { Fragment, useEffect, useRef, useState } from 'react'
import { Combobox, Disclosure, Menu, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Dropdown } from 'antd'
import { useStateValue } from '../Store/StateProvider.js'
import { actionTypes } from '../Store/Reducer.js'


const navigation = [
    { name: 'Home', href: 'home', current: true },
    { name: 'About Us', href: 'aboutUs', current: false },
    { name: 'Learning Materials', href: 'learningMaterials', current: false },
    { name: 'Our Users', href: 'registerUsers', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')

}

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

export default function NavBar() {

    const [state, dispatch] = useStateValue();
    const login = state?.login
    const loginModalRef = useRef()
    const [selectedIndex, setSelectedIndex] = useState(0)

    //   const [state, dispatch] = useStateValue();
    const navigate = useNavigate()
    
    const [number, setNumber] = useState()
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const [loginModal, setLoginModal] = useState(true)
    const [signUpModal, setSignUpModal] = useState(false)
    const [signInModal, setSignInModal] = useState(false)
    const [Agree, setAgree] = useState(true)
    const [registerUser, setRegisterUser] = useState({})
    const [loginDetails, setLoginDetails] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')
    function openModal() {
        setIsOpen(true)
    }



    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    function closeModal() {
        setIsOpen(false)
        setLoginModal(true);
        setRegisterUser({})
        setLoginDetails(null)
        setNumber(null)
        setFlag(false);
        setOtp(null)
        setSignUpModal(false)
    }


    const handleLogin = async (e) => {
        console.log(selectedIndex)
        e.preventDefault()
        let data = {}
        for (let i = 0; i < e.target?.length-1; i++) {
            data = {...data,[e?.target[i].name]:e.target[i].value}
        }
        console.log(data)
        let url = ''
        switch (selectedIndex) {
            case 0:
                
                break;
        
            case 1:
                url = 'https://hilarious-veil-wasp.cyclic.app/auth/teacher/login'
                break;
        
            case 2:
                url = 'https://hilarious-veil-wasp.cyclic.app/auth/student/login'
                break;
        
            default:
                console.log("wrong choice")
                return 
                break;
        }

        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
        const rspData = await response.json()
        console.log(rspData)
        if(rspData?.Tocken){
            localStorage.setItem('authToken',rspData?.Tocken)
            localStorage.setItem('userType',selectedIndex)
            dispatch({
                type: actionTypes.log_in,
                login: true,
                authToken : localStorage.getItem("authToken"),
                userType : selectedIndex
            });
            closeModal()
        }
    }

    const handleLogout =  () => {
        localStorage.clear()
        dispatch({
            type: actionTypes.log_out,
            login: false,
            authToken : null,
        });
        navigate('/')
    }



    const createUser = async (e) => {

    }

    const handleChange = (e) => {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value })
    }

    const verifyLoginOtp = async (e) => {

    }

    const verifyRegisterOtp = async (e) => {

    }

    const handleAgreeClick = () => {
        setAgree(!Agree)
    }

    const handleTermsClick = () => {
        closeModal()
        navigate('/terms-and-conditions')
    }

    
    const type = ['organization', 'teacher', 'student']


    const items = [
        {
            key: '1',
            label: (
                <>
                    <p className='text-base mb-2 text-gray-900/90 font-semibold'>Today's Thoughts</p>
                    <p className='text-base text-gray-800/70 font-medium'>
                        If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.
                    </p>
                </>
            ),
        },

    ]

    const getQuote = async () => {
        const rsp = await fetch('https://hilarious-veil-wasp.cyclic.app//today-special/get')
        const data = await rsp.json()
        data.then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }


    useEffect(() => {
        // getQuote()
    }, [])



    return (
        <Disclosure as="nav" className="bg-gray-800 z-50 sticky top-0">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <Link to='/' className="flex flex-shrink-0 items-center mr-6">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://w7.pngwing.com/pngs/35/313/png-transparent-computer-icons-book-reading-book-angle-logo-author.png"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://w7.pngwing.com/pngs/35/313/png-transparent-computer-icons-book-reading-book-angle-logo-author.png"
                                        alt="Your Company"
                                    />
                                </Link >
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:block">
                                    <div className="flex space-x-8">
                                        {/* {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}

                                            >
                                                {item.name}
                                            </a>
                                        ))} */}

                                        <a href="#home" className='text-gray-300 font-semibold'>
                                            Home
                                        </a>
                                        <a href="#about-us" className='text-gray-300 font-semibold'>
                                            About US
                                        </a>
                                        <a href="#learning-materials" className='text-gray-300 font-semibold'>
                                            Learning Materials
                                        </a>
                                        <a href="#register-users" className='text-gray-300 font-semibold'>
                                            Our Users
                                        </a>
                                    </div>
                                </div>
                                {login ? <button
                                    type="button"
                                    className="rounded-full ml-12 mx-4 bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        placement="bottom"
                                    // arrow
                                    >
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </Dropdown>

                                </button> :
                                    <a href="#notice" className='ml-8 mx-4 text-gray-300 font-semibold'>
                                        Notice
                                    </a>

                                }

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    {login ? <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div> :
                                        <div ref={loginModalRef} onClick={() => { setMenuOpen(false); openModal() }} >
                                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                    }
                                    {login && <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link to={`${type[state.type]}-profile`}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                    onClick={handleLogout}
                                                        className={classNames(active ? 'bg-gray-100 cursor-pointer' : '', 'cursor-pointer block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                    }
                                </Menu>
                                <Transition appear show={isOpen} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={() => { closeModal(); setSignUpModal(false); }}>
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
                                                    <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                        {loginModal && <div>
                                                            <div className='flex justify-between items-center'>
                                                                <Dialog.Title
                                                                    as="h2"
                                                                    className="text-xl mb-1 font-medium leading-6 text-gray-900"
                                                                >
                                                                    Login
                                                                </Dialog.Title>
                                                                {/* <div onClick={() => { closeModal(); setSignInModal(false); setSignUpModal(false); }}>
                                                                    {close}
                                                                </div> */}
                                                            </div>
                                                            <p className='text-sm' >Please login to view your profile</p>
                                                            <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                                                                <Tab.List className="flex my-4 space-x-1 rounded-xl bg-blue-900/20 p-1">
                                                                    <Tab key={1} className={({ selected }) =>
                                                                        classNames(
                                                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                                            selected
                                                                                ? 'bg-white shadow'
                                                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                                        )
                                                                    } >Organization</Tab>
                                                                    <Tab key={2} className={({ selected }) =>
                                                                        classNames(
                                                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                                            selected
                                                                                ? 'bg-white shadow'
                                                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                                        )
                                                                    } >Teacher</Tab>
                                                                    <Tab key={3} className={({ selected }) =>
                                                                        classNames(
                                                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                                            selected
                                                                                ? 'bg-white shadow'
                                                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                                        )
                                                                    } >Student</Tab>
                                                                </Tab.List>
                                                                <Tab.Panels>
                                                                    <Tab.Panel><form style={{ display: !flag ? "block" : "none" }} onSubmit={(e)=>handleLogin(e)}>

                                                                        <input type='text' name='phoneNo' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none' placeholder='Dice Code' />
                                                                        <input type='password' name='passWord' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none my-3' placeholder='Password' />
                                                                        <p onClick={() => { setLoginModal(false); setSignInModal(false); setSignUpModal(true) }} className='text-sm text-center underline cursor-pointer w-fit mx-auto ' >Don't have an account ?</p>
                                                                        <button type='submit' className='w-full rounded-lg border bg-gray-600/70 border-gray-400 hover:bg-gray-600/60 text-white py-2 mt-5'>
                                                                            Login
                                                                        </button>

                                                                    </form></Tab.Panel>
                                                                    <Tab.Panel><form style={{ display: !flag ? "block" : "none" }} onSubmit={(e)=>handleLogin(e)}>

                                                                        <input name='Mobile' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none' placeholder='Phone No.' />
                                                                        <input name='pass' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none my-3' placeholder='Pssword' />
                                                                        <p onClick={() => { setLoginModal(false); setSignInModal(false); setSignUpModal(true) }} className='text-sm text-center underline cursor-pointer w-fit mx-auto ' >Don't have an account ?</p>
                                                                        <button type='submit' className='w-full rounded-lg border bg-gray-600/70 border-gray-400 hover:bg-gray-600/60 text-white py-2 mt-5'>
                                                                            Login
                                                                        </button>

                                                                    </form></Tab.Panel>
                                                                    <Tab.Panel><form style={{ display: !flag ? "block" : "none" }} onSubmit={(e)=>handleLogin(e)}>

                                                                        <input name='Mobile' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none' placeholder='Phone No.' />
                                                                        <input name='pass' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none my-3' placeholder='Pssword' />
                                                                        <p onClick={() => { setLoginModal(false); setSignInModal(false); setSignUpModal(true) }} className='text-sm text-center underline cursor-pointer w-fit mx-auto ' >Don't have an account ?</p>
                                                                        <button type='submit' className='w-full rounded-lg border bg-gray-600/70 border-gray-400 hover:bg-gray-600/60 text-white py-2 mt-5'>
                                                                            Login
                                                                        </button>
                                                                    </form></Tab.Panel>
                                                                </Tab.Panels>
                                                            </Tab.Group>

                                                            {/* <form onSubmit={verifyLoginOtp} style={{ display: flag ? "block" : "none" }}>
                                                                <div className='mt-5'>

                                                                    <p className='text-sm' >Hey user please enter the OTP</p>
                                                                    <input required onChange={(e) => setOtp(e.target.value)} className='my-4 rounded-lg border w-full border-deep_purple_700' type="text" name="otp" id="" />
                                                                    <button type='submit' className='w-full rounded-lg border border-deep_purple_700 hover:bg-deep_purple_700 bg-deep_purple_800 text-white py-2 mt-1'>Verify</button>
                                                                    <p className='text-sm mt-3'>Didn't recieve a code? {" "} <span className='text-deep_purple_900 ' > click here</span> {" "}to recieve new OTP</p>
                                                                </div>
                                                            </form> */}
                                                        </div>}

                                                        {
                                                            signUpModal && <div>
                                                                <div className='flex justify-between items-center'>
                                                                    <Dialog.Title
                                                                        as="h2"
                                                                        className="text-xl mb-1 font-medium leading-6 text-gray-900"
                                                                    >
                                                                        Create an account
                                                                    </Dialog.Title>
                                                                    {/* <div onClick={() => { closeModal(); setSignUpModal(false); }}>
                              {close}
                            </div> */}
                                                                </div>
                                                                <form style={{ display: !flag ? "flex" : "none" }} onSubmit={createUser} className='flex flex-col gap-4 my-5'>
                                                                    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                                                                        <Tab.List className="flex my-2 space-x-1 rounded-xl bg-blue-900/20 p-1">
                                                                            <Tab key={2} className={({ selected }) =>
                                                                                classNames(
                                                                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                                                    selected
                                                                                        ? 'bg-white shadow'
                                                                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                                                )
                                                                            } >Teacher</Tab>
                                                                            <Tab key={3} className={({ selected }) =>
                                                                                classNames(
                                                                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                                                    selected
                                                                                        ? 'bg-white shadow'
                                                                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                                                )
                                                                            } >Student</Tab>
                                                                        </Tab.List>
                                                                    </Tab.Group>
                                                                    <div className="min-w-72 flex gap-2 items-center ">
                                                                        <Combobox value={selected} onChange={setSelected}>
                                                                            <div className="w-96">
                                                                                <div className="relative w-full border-transparent focus:outline-none focus:border-transparent  cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md  sm:text-sm">
                                                                                    <Combobox.Input
                                                                                        className='py-2.5 w-full border border-gray-400 rounded-lg px-3 focus:outline-none'
                                                                                        displayValue={(person) => person.name}
                                                                                        onChange={(event) => setQuery(event.target.value)}
                                                                                    />
                                                                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                                        <ChevronUpDownIcon
                                                                                            className="h-5 w-5 text-gray-400"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </Combobox.Button>
                                                                                </div>
                                                                                <Transition
                                                                                    as={Fragment}
                                                                                    leave="transition ease-in duration-100"
                                                                                    leaveFrom="opacity-100"
                                                                                    leaveTo="opacity-0"
                                                                                    afterLeave={() => setQuery('')}
                                                                                >
                                                                                    <Combobox.Options className="absolute mt-1 max-w-[21rem] max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                                                                    </div>

                                                                    <input name='text' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none' placeholder='Name' />
                                                                    {selectedIndex === 1 && <input name='text' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none' placeholder='Field of Study' />}
                                                                    <input name='phoneNumber' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none' placeholder='Phone No.' />
                                                                    <input name='password' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none' placeholder='Pssword' />
                                                                    <input name='verifyPassword' className='w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none' placeholder='Verify Pssword' />

                                                                    <div className='flex mt-2 items-center'>
                                                                        <input required onChange={handleAgreeClick} type="checkbox" name="agree" id="agree" />
                                                                        <label className='text-sm  ml-3' htmlFor="agree">I agree <span onClick={handleTermsClick} className='underline '>Term and Conditions</span> & <span onClick={handleTermsClick} className='underline '>Privacy Policy</span></label>
                                                                    </div>
                                                                    <button type='submit' className='w-full rounded-lg border bg-gray-600/70 border-gray-400 hover:bg-gray-600/60 text-white py-2 mt-4'>Sign Up</button>
                                                                </form>

                                                                <p onClick={() => { setSignUpModal(false); setLoginModal(true) }} className='w-fit mx-auto text-sm cursor-pointer underline '>Back to <span className='text-deep_purple_900 ' >Login</span> </p>
                                                            </div>
                                                        }
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
