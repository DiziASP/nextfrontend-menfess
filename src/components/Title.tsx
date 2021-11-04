import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Title: React.FunctionComponent = ()=>{
    return(
    <div className='relative flex flex-col justify-between h-screen bg-background'>
        <div className='z-0 '>
            <Image src="/bg-element.svg" alt='Logo' layout="fill" />
        </div>
        <div className="container z-10 flex flex-col items-center justify-center mx-auto space-y-4 text-center align-middle">
            <Image src="/logo.jpg" height={300} width={300} className="rounded-full" alt='Logo' layout="fixed" />
            <h1 className="text-3xl font-bold text-center font-fess text-text sm:text-4xl">💌ITB Menfess💌</h1>
            <p className="w-8/12 text-base text-center text-text sm:text-lg xl:w-6/12 xl:5/12 font-global"><strong>ITB Menfess Website</strong> adalah kanal 
            menfess bagi Massa ITB 2021 untuk menyampaikan pesan anonim baik kepada seorang massa ITB, suatu fakultas ITB ataupun seluruh massa ITB. Kanal ini <span className="font-bold text-primary">bukan merupakan official account</span> dari suatu instansi dan 
            sama sekali tidak terkait dengan Instansi manapun </p>
            
            {/* Options */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row">
                <Link passHref={true} href="/register"><button className="p-3 pl-6 pr-6 text-base font-semibold text-gray-100 transition-colors duration-700 transform bg-blue-600 border-indigo-300 rounded-lg sm:text-lg hover:bg-indigo-400 font-global focus:border-4">Send your fess!💜</button></Link>
                <Link passHref={true} href="/fess"><button className="p-3 pl-6 pr-6 text-base font-semibold text-gray-100 transition-colors duration-700 transform bg-indigo-600 border-indigo-300 rounded-lg sm:text-lg hover:bg-blue-400 font-global focus:border-4">Menfess Hari ini💙</button></Link>
            </div>
        </div>
        <div className="z-10 py-2 bg-black">
            <p className="font-semibold text-center text-white font-global">Copyright &copy; 2021 • All right reserved by Anonymous</p>
        </div>
    </div>
    );
}

export default Title;