import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


const FillFess: React.FunctionComponent = ()=>{
    const [pname, setName] = React.useState("")
    const [pmenfess, setMenfess] = React.useState("")
    
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });

    const submitForm = async () =>{
        try {
            
            const res = await Axios.post(
              "https://plis-lah-bisa.herokuapp.com/",
              {
                name:pname,
                menfess:pmenfess,
                faculty:selected.fakultas
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
            console.log(res) //check now
            notify()
          } catch (e) {
              console.log(e)
          }
    }
    
    const notify = () =>{
        toast.success("Menfess Berhasil Dikirim!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {color: '#0FF23S', fontFamily:'raleway', fontWeight:'bold'}
          });
    }
    
      const faculty = [
        { fakultas: 'FMIPA' },
        { fakultas: 'SITH-S' },
        { fakultas: 'SF' },
        { fakultas: 'FITB' },
        { fakultas: 'FTTM' },
        { fakultas: 'STEI' },
        { fakultas: 'FTSL' },
        { fakultas: 'FTI' },
        { fakultas: 'FSRD' },
        { fakultas: 'FTMD' },
        { fakultas: 'FTMD' },
        { fakultas: 'SITH-R' },
        { fakultas: 'SBM' },
        { fakultas: 'SAPPK' },
      ]

      const [selected, setSelected] = useState(faculty[0])

    return(
    <>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <div className='flex flex-col justify-between h-screen bg-background'>
        <div className='h-4'></div>    
        <div className="container flex flex-col items-center justify-center mx-auto space-y-4 text-center align-middle">
            <h1 className="text-4xl font-bold text-text font-global">💌ITB Menfess💌</h1>
            <p className="w-8/12 text-lg text-center text-text xl:w-6/12 xl:5/12 font-global">Hayuk Kirimkan Pesanmu! </p>

            {/* Forms */}
            <div className="w-11/12 bg-white rounded-xl md:w-2/3 lg:w-2/3 xl:w-5/12">
                <div className="flex flex-col py-4">
                    <div className="flex flex-row px-4">
                        <div>
                            <Image alt="Joe" width="100" height="100" src="/itb.jpg" />
                        </div>

                        <div className="flex flex-col w-full ml-3">
                            <textarea
                            disabled={(currentDay === 31)? true:false}
                            value={pmenfess} 
                            onChange={(e)=> setMenfess(e.target.value)} 
                            placeholder="Tuliskan pesanmu..." 
                            className="w-full h-32 text-base outline-none resize-none font-global"></textarea>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between px-4 py-4 text-blue-400 border-t">
                        <div className="flex flex-col space-y-2">
                        <input
                        disabled={(currentDay === 31)? true:false}
                        onChange={(e)=> setName(e.target.value)}
                        value={pname} 
                        className="w-11/12 py-1 pl-2 text-sm font-semibold text-black transition-colors rounded-md outline-none ring ring-indigo-500 focus:ring-blue-300 font-global" 
                        placeholder="Untuk siapa?"/>
                        <label className="text-sm font-semibold text-left text-gray-700 font-global">
                            Kamu dari fakultas mana?
                            <Listbox disabled={(currentDay === 31)? true:false} value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 font-semibold text-left text-blue-600 bg-white rounded-lg shadow-md cursor-default font-global focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.fakultas}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 w-full py-1 pl-2 mt-1 space-y-4 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {faculty.map((faculty, facultyIdx) => (
                <Listbox.Option
                  key={facultyIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative`
                  }
                  value={faculty}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {faculty.fakultas}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
                        </label>
                        </div>
                        
                        
                        <button onClick={submitForm} disabled={(pname === "" && pmenfess === "")? true:false} className="inline px-4 py-3 font-bold text-white transition-colors bg-blue-600 rounded-full cursor-pointer hover:bg-blue-300">Post</button>
                    </div>
                </div>
            </div>
            
            <Link passHref={true} href="/">
                <button className="p-3 pl-6 pr-6 text-lg font-semibold text-gray-100 transition-colors duration-700 transform bg-indigo-600 border-indigo-300 rounded-lg hover:bg-blue-400 font-global focus:border-4">Kembali ke beranda</button>
            </Link>
            <Link passHref={true} href="/fess">
                <button className="p-3 pl-6 pr-6 text-lg font-semibold text-gray-100 transition-colors duration-700 transform bg-indigo-600 border-indigo-300 rounded-lg hover:bg-blue-400 font-global focus:border-4">Cek Menfess!!!</button>
            </Link>
        </div>
        
        <div className="py-2 bg-black">
            <p className="font-semibold text-center text-white font-global">Copyright &copy; 2021 • All right reserved by Anonymous</p>
        </div>
    </div>
    </>
    
    );
}

export default FillFess;           
