import React from 'react'
import Image from "next/image";
import { ProfileImage } from "@/public"
import { Star } from "@/public"
import { Star0 } from "@/public"
import { Facebuk } from "@/public"
import { instaggram } from "@/public"
import { updatee } from "@/public"
import { EditIcon } from "@/public"


const UserHero = () => {
    return (
        <div className='' >
            <div className=' bg-neutral-700 h-44 relative'>
                <div className=' flex '>


                    <Image
                        className=' border rounded-full ml-12 absolute -bottom-28'
                        src={ProfileImage}
                        width={180}
                        height={180}
                        alt='ths profileImage' />
                    <Image
                        className=' rounded-lg bg-white ml-44 absolute -bottom-28'
                        src={EditIcon}
                        width={40}
                        height={40}
                        alt='ths profileImage' />

                </div>
            </div>
            <div className=' lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 items-center justiry-between'>
                <div className='justify-center items-center ml-[50px] mt-[150px] lg:ml-[270px] lg:mt-8 md:ml-[270px] md:mt-8'>
                    <h1 className=' font-Hanken text-3xl font-bold text-Neutra50 lg:text-4xl md:3xl md:whitespace-nowrap'>Shade Mayowa</h1>
                    <p className=' font-Hanken text-sm font-normal text-Neutra40'>Product Designer</p>
                    <div className=' flex gap-2 w-4 h-4 mt-2 items-center'>
                        <Image src={Star} alt="Star" />
                        <Image src={Star} alt="Star" />
                        <Image src={Star} alt="Ster" />
                        <Image src={Star} alt="Star" />
                        <Image src={Star0} alt="Rating" />

                        <p className='text-Neutra50 font-Hanken flex gap-2'>4.5 <span>|</span> <span className='flex gap-1'>20 <span>reviews</span></span>
                            <Image
                                src={Facebuk}
                                width={50}
                                height={40}
                                alt='facebook' />
                            <Image
                                src={instaggram}
                                width={50}
                                height={40}
                                alt='facebook' />
                        </p>

                    </div>
                </div>
                <div className='flex gap-5 items-center ml-16 mt-8 lg:justify-end lg:mr-20  md:justify-end md:mr-10'>

                    <Image
                        className=' h-fit items-center'
                        src={updatee}
                        width={30}
                        height={5}
                        alt='facebook' />
                    <div className='flex'>

                        <button className=' inline-flex h-14 px-10 py-5 items-center border-[0.5px] rounded-lg border-gray-900'>
                            Edit profile
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserHero
