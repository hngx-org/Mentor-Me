import React from 'react'
import Image from 'next/image'
import { Awards } from '@/public'

const UserDetails = () => {
    return (
        <div className=' ml-14 mt-12 mb-6 '>
            <header className=' flex gap-20 '>
                <p className=' text-lg font-Inter font-medium border-b-4 border-Accent1' >Overviwe</p>
                <p className=' text-lg font-Inter font-medium'>Reviews <span className='rounded-full px-2 py-1 h-4 w-5 bg-Accent1 text-white'>6</span></p>
            </header>
            <div className='  mt-8 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2  '>
                <div className=' mb-32 md:mb-2 lg:mb-4'>
                    <h3 className=' mt-8 font-Inter text-base font-medium text-black mb-5 '>Bio</h3>
                    <p className=' w-[250px] h-20 lg:w-[500px] md:w-[300] mb-16 lg:mb-8 md:mb-8 text-Neutra40'>Experienced product designer with over 5
                        years of experience in developing and implementing
                        successful digital assets for leading companies.
                        Passionate about mentoring and helping
                        others achieve their career goals.</p>
                </div>
                <div>
                    <h3 className=' mt-8 font-Inter text-base font-medium text-black mb-4 '>Certifications <span className='rounded-full px-2 py-1 h-4 w-5 bg-Accent1 text-white'>2</span></h3>
                    <div className=' flex items-center gap-3 '>
                        <Image
                            src={Awards}
                            width={30}
                            height={20}
                            alt='facebook' />
                        <div>
                            <h4 className='font-Inter text-base font-semibold text-black ' >Cousera</h4>
                            <p>Google UX Certificate</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-3 mt-4'>
                        <Image
                            src={Awards}
                            width={30}
                            height={20}
                            alt='facebook' />
                        <div>
                            <h4 className='font-Inter text-base font-semibold text-black' >ABXYZ University</h4>
                            <p>Bachelor of Science in Computer Science</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className=' lg:mt-[8px] md:mt-0 mt-[60px] text-Accent1'> <a href='/mentor-profile' className=''>See more</a></p>

        </div>
    )
}

export default UserDetails
