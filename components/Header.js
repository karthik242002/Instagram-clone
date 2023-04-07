import Image from 'next/image';
import React from 'react';
import { FaSearch, FaPlusCircle } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
export default function Header() {

    return (
        <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
            <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
                { /* Left */}
                <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                        layout='fill'
                        className="object-contain" />

                </div>
                <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                        layout="fill"
                        className="object-contain" />

                </div>
                { /* Middle */}

                <div className="relative mt-1">
                    <div className="absolute top-2 left-2">
                        <FaSearch className="h-5 text-gray-500" />
                    </div>
                    <input type="text" placeholder="Search" className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
                </div>
                { /* Right */}
                <div className='flex space-x-4 items-center'>
                    <FaHome className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                    <FaPlusCircle className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                    <img src="https://media.licdn.com/dms/image/C5603AQGMJtZjoVzOlg/profile-displayphoto-shrink_400_400/0/1663685545626?e=1686182400&v=beta&t=7KrCDCxfCNAwWC_-JyT7w0YtipK7qdCbNu85zByoeFw" alt='user-image' className='h-10 rounded-full cursor-pointer' />

                </div>

            </div>



        </div>
    )

}
