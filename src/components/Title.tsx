import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../src/components/images/Logo.jpg"

const Title: React.FunctionComponent = ()=>{
    return(
    <div className='h-screen flex flex-col justify-between bg-gradient-to-r from-tertiary to-primary'>
        <div className='h-4'></div>
        <div className="container flex flex-col items-center justify-center mx-auto space-y-4 text-center align-middle">
            <h1 className="text-4xl font-bold text-center text-white">💌STEI Menfess💌</h1>
            <p className="w-8/12 text-lg text-center text-white xl:w-6/12 xl:5/12 font-global"><strong>STEI Menfess Website</strong> adalah kanal 
            menfess bagi Massa STEI 2021 untuk menyampaikan pesan anonim baik kepada seorang massa STEI atau seluruh massa STEI. Kanal ini <span className="font-bold text-red-300">bukan merupakan official account</span> dari suatu instansi dan 
            sama sekali tidak terkait dengan Instansi manapun </p>
            
            {/* Options */}
            <div className="flex-row space-x-6">
                <Link passHref={true} href="/register"><button className="p-3 pl-6 pr-6 text-lg font-semibold text-gray-100 transition-colors duration-700 transform bg-blue-600 border-indigo-300 rounded-lg hover:bg-indigo-400 font-global focus:border-4">Send your fess!💜</button></Link>
                <Link passHref={true} href="/fess"><button className="p-3 pl-6 pr-6 text-lg font-semibold text-gray-100 transition-colors duration-700 transform bg-indigo-600 border-indigo-300 rounded-lg hover:bg-blue-400 font-global focus:border-4">Menfess Hari ini💙</button></Link>
            </div>
        </div>
        <div className="bg-black py-2">
            <p className="text-center text-white font-global font-semibold">Copyright &copy; 2021 o All right reserved by STEI ITB 2021</p>
        </div>
    </div>
    );
}

export default Title;