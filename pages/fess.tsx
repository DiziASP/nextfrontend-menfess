import * as React from 'react'
import Layout from '../src/components/Layout'
import Link from 'next/link'
import { NextPage } from 'next'
import Menfess from '../src/components/Menfess'
import Axios from "axios";
import { GetServerSideProps } from 'next'

interface FessContent{
  [fessContent:string]:any
}

type Item = {
  [key:string]:any
}

const FessPage: NextPage = ({fessContent}:FessContent) => {
  const currentYear = new Date().getFullYear();
  const currentDay = new Date().getDate();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  
  return (
    <Layout title="STEI 2021 || Menfess Website ">
      <div className='flex flex-col justify-between min-h-screen py-16 bg-gradient-to-r from-tertiary to-primary'>
        <div className="container flex flex-col items-center justify-center mx-auto space-y-4 text-center align-middle">
            <h1 className="text-4xl font-semibold text-white font-global"><span className="font-bold">💌STEI Menfess</span> ♡ {currentDay}-{currentMonth}-{currentYear}💌</h1>
            <p className="w-8/12 text-lg text-center text-white xl:w-6/12 xl:5/12 font-global"> Pesan-pesan dari seseorang untuk kamu hari ini!</p>

            {/* Forms */}
            <div className="flex flex-col w-full h-full p-8 space-y-8 text-gray-600 rounded-lg shadow-md outline-none bg-secondary">
                {fessContent.map((item:Item, idx:number)=>(
                    <Menfess key={idx} fessName={item.name} menfess={item.menfess}/> 
                ))}
            </div>
            <div className="flex flex-row space-x-4">
                <Link passHref={true} href="/"><button className="p-3 pl-6 pr-6 text-lg font-semibold text-gray-100 transition-colors duration-700 transform bg-indigo-600 border-indigo-300 rounded-lg hover:bg-blue-400 font-global focus:border-4">Kembali ke beranda</button></Link>
                <Link passHref={true} href="/register"><button className="p-3 pl-6 pr-6 text-lg font-semibold text-gray-100 transition-colors duration-700 transform bg-blue-600 border-indigo-300 rounded-lg hover:bg-indigo-400 font-global focus:border-4">Send your fess!💜</button></Link>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default FessPage

type MyType = {
  id: number;
  name: string;
}
export const getServerSideProps: GetServerSideProps = async () => {
  const res:any = await Axios.get('https://plis-lah-bisa.herokuapp.com/');
  const doto = res.data.Fess
  return {
    props: { fessContent: doto },
  };
};