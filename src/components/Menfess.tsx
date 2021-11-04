import * as React from 'react'
import Image from 'next/image'

type Props = {
    fessName?: string,
    menfess?:string,
    fakultas?:string
  }

const Menfess: React.FunctionComponent<Props> = ({fessName,menfess,fakultas})=>{

    return(
    <div className="flex flex-row space-x-4">
        <div className="flex flex-col justify-center space-y-2">
            <Image alt="JoeMama" height="80" width="80" className="rounded-full" layout="fixed" src="/itb.jpg" />
            <p className="text-base font-bold text-white font-fess">{fakultas}</p>
        </div>
        
        <p className="w-full px-4 py-4 text-base text-left bg-white rounded-lg font-fess"><span className="font-semibold text-blue-700">@{fessName}</span> {menfess}</p>
    </div> 
    );
}

export default Menfess;