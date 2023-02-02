import React from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai"
import { BsChatDots, BsBookmark } from "react-icons/bs"
import { BiWinkSmile } from "react-icons/bi"

export default function Post({ img, userImg, caption, username, id }) {
    return (
        <div className="bg-white my-7 border rounded">
            { /* Post Header */}
            <div className="flex items-center p-5">
                <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
                <p className="font-bold flex-1">{username}</p>

                <HiDotsHorizontal className='h-5' />
            </div>
            {/* Post Image */}
            <img className='object-cover w-full' src={img} alt="" />
            <div className='flex pt-5 justify-between px-4'>
                <div className='flex space-x-4 '>
                    <AiOutlineHeart className='h-5 hover:scale-125 transition-transform duration-200 ease-out font-bold cursor-pointer' />
                    <BsChatDots className="h-5 font-bold hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
                </div>
                <BsBookmark className='h-5 hover:scale-125 transition-transform duration-200 ease-out font cursor-pointer' />
            </div>
            <div className='px-5 pt-2 pb-5 flex gap-3'><h2 className='font-bold'>{username}</h2><p>{caption}</p></div>
            <div className='flex justify-between pb-4 px-4'>
                <div className='flex space-x-8'>
                    <BiWinkSmile className='cursor-pointer hover:scale-125 transition-transform duration-200 ease-out h-5' />
                    <p className='text-sm  cursor-pointer text-zinc-500'>Enter your comment...</p>
                </div>
                <div>
                    <p className=' text-blue-500 cursor-pointer'>Post</p>
                </div>
            </div>
        </div>

    )
}
