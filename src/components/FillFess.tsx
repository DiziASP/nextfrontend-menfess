import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'


const FillFess: React.FunctionComponent = ()=>{
    const [pname, setName] = React.useState("")
    const [pmenfess, setMenfess] = React.useState("")
    
    const submitForm = async () =>{
        try {
            
            const res = await Axios.post(
              "https://plis-lah-bisa.herokuapp.com/",
              {
                name:pname,
                menfess:pmenfess
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

    return(
    <>
    <ToastContainer
    position="top-right"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <div className='flex flex-col justify-between h-screen bg-gradient-to-r from-tertiary to-primary'>
        <div className='h-4'></div>    
        <div className="container flex flex-col items-center justify-center mx-auto space-y-4 text-center align-middle">
            <h1 className="text-4xl font-bold text-white font-global">💌STEI Menfess💌</h1>
            <p className="w-8/12 text-lg text-center text-white xl:w-6/12 xl:5/12 font-global">Hayuk Kirimkan Pesanmu! </p>

            {/* Forms */}
            <div className="w-11/12 bg-white rounded-xl md:w-2/3 lg:w-2/3 xl:w-5/12">
                <div className="flex flex-col py-4">
                    <div className="flex flex-row px-4">
                        <div>
                            <Image alt="Joe" width="100" height="100"src="https://pbs.twimg.com/profile_images/1436574780518375424/sB7so_ln_400x400.jpg" />
                        </div>

                        <div className="flex flex-col w-full ml-3">
                            <textarea
                            value={pmenfess} 
                            onChange={(e)=> setMenfess(e.target.value)} 
                            placeholder="Tuliskan pesanmu..." 
                            className="w-full h-32 text-base outline-none resize-none font-global"></textarea>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between px-4 py-2 text-blue-400 border-t">
                        <input
                        onChange={(e)=> setName(e.target.value)}
                        value={pname} 
                        className="w-1/2 px-4 font-semibold text-black rounded-md outline-none focus:ring ring-blue-300 font-global" 
                        placeholder="Untuk siapa?"/>
                        <button onClick={submitForm} disabled={(pname === "" && pmenfess === "")? true:false} className="inline px-4 py-3 font-bold text-white bg-blue-600 rounded-full cursor-pointer">Post</button>
                    </div>
                </div>
            </div>
            
            <Link passHref={true} href="/">
                <button className="p-3 pl-6 pr-6 text-lg font-semibold text-gray-100 transition-colors duration-700 transform bg-indigo-600 border-indigo-300 rounded-lg hover:bg-blue-400 font-global focus:border-4">Kembali ke beranda</button>
            </Link>
        </div>
        
        <div className="py-2 bg-black">
            <p className="font-semibold text-center text-white font-global">Copyright &copy; 2021 o All right reserved by STEI ITB 2021</p>
        </div>
    </div>
    </>
    
    );
}

export default FillFess;           
