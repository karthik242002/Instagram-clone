<<<<<<< HEAD

=======
import {Image} from 'next/image'
>>>>>>> 6776be62c63afde3c4a0d9a3152c66bfcacf162f
import React from 'react'
import { FaSearchIcon } from "react-icons/fa";
import Image from 'next/image';

export default function Header() {
    return (
        <div className="flex items-center justify-between max-w-6xl">
            { /* Left */}
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                    layout='fill'
                    className='object-contain' />

            </div>
            <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                    layout='fill'
                    className='object-contain' />

            </div>
            { /* Middle */}
            <div className=" ">
                <div className="">
                    <FaSearchIcon className="h-5" />

                    { /* Right */}
                    <h1>Right sides</h1>
                </div>
            </div>
        </div>
    )

}
