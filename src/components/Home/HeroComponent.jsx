import React from 'react'
import heroBanner from "../../assets/hero-banner/banner-two-img-1.webp"
import heroBanner1 from "../../assets/hero-banner/banner-two-img-2.webp"
import backgroundImage from "../../assets/background-image/features-shape.webp"
import {ButtonComponent} from "../Components"

const HeroComponent = () => {
    return (
        <>
            <div className='w-full grid lg:grid-cols-2  grid-cols-1 px-4 dark:bg-black dark:text-white'>
                <div className='relative'>
                    <div style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}>
                        <p className='bg-lightPink inline-block text-center text-xl'>welcome to <span className='font-title'>momo mania</span></p>
                        <h1 className='font-navtitle font-bold lg:text-9xl text-5xl py-1 text-center'>organic  & fresh coffee house</h1>

                        <p className='text-start mt-32 font-poppins'>
                            On the other hand, we denounce with righteous indignation
                            and dislike men who are so beguiled an item by the charms
                            of pleasure of the moment with a righteous hand.
                        </p>
                        <div className='flex items-center justify-center gap-3 my-5'>
                            <ButtonComponent tittle={'get delivery'} />
                            <ButtonComponent tittle={'explore more'} />

                        </div>
                    </div>

                </div>
                <div>
                    <img src={heroBanner1} alt="" className='w-full h-[80%] object-cover' />
                </div>

                <div className='lg:absolute left-[40%] top-[50%]'>
                    <img src={heroBanner} alt="" className='w-full lg:h-72 object-cover' />
                </div>

            </div>

        </>
    )
}

export default HeroComponent