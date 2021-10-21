import * as React from 'react'
import Image from 'next/image'

type Props = {
    fessName?: string,
    menfess?:string
  }
const Menfess: React.FunctionComponent<Props> = ({fessName,menfess})=>{
    return(
    <div className="flex flex-row space-x-4">
        <Image alt="JoeMama" height="60" width="60" className="rounded-full" src="https://pbs.twimg.com/profile_images/1436574780518375424/sB7so_ln_400x400.jpg" />
        <p className="w-full px-4 py-4 text-base text-left bg-white rounded-lg font-global"><span className="font-semibold text-blue-700">@{fessName}</span> {menfess}</p>
    </div> 
    );
}

export default Menfess;