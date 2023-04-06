import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";
import FirstBg from '../../assets/images/Payment-background-01.png'
import SecondBg from '../../assets/images/service-reservation.png'
import ThirdBg from '../../assets/images/dasboard-reservation.png'


const ITEMSSERVICE = [
    {
        id: 1,
        title: ' Payment',
        supTitle: "Ease of service",
        description: 'So why wait? Sign up for ALLO CHEF today and experience the convenience of ordering your favorite meals with just a few taps on your smartphone.',
        image: FirstBg
    },
    {
        id: 2,
        title: 'Reservation',
        supTitle: "Ease of service",
        description: "Our mission is to make food delivery fast, easy, and affordable for everyone, while also supporting local businesses and communities. We pride ourselves on providing exceptional customer service, with 24/7 support available to assist you with any questions or concerns.",
        image: SecondBg
    },
    {
        id: 3,
        title: 'Discovery',
        supTitle: "Ease of service",
        description: "With ALLO CHEF, you'll enjoy a vast selection of cuisines from all around the world, with options to suit every taste and budget. Whether you're looking for a quick bite during your lunch break or a gourmet dinner for a special occasion, our platform has got you covered.",
        image: ThirdBg
    },
]

export default function OurService() {
    return (
        <>
            <div className='mx-auto w-full  h-screen  bg-yellow-50'>
                <div className="w-full p-16 text-center">  
                    <h1 className=' text-5xl tracking-tight font-bold text-orange-500 dark:text-white'>Our Services</h1>
                </div>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper "
                >
                    {
                        ITEMSSERVICE.map((item, index) => {
                            return <SwiperSlide className="px-24 ">
                                <div className="w-full h-full grid grid-cols-5 bg-white">
                                    <img src={item.image} className="w-full col-span-3 h-full object-fill" alt="" />
                                    <div className='w-full pl-16 left-0 top-0 flex flex-col col-span-2 text-gray-700 justify-center items-start'>
                                        <span className='text-xl '>{item.title}</span>
                                        <h1 className=' font-semibold lg:text-5xl text-4xl py-2 text-black'>Ease of service</h1>
                                        <p className='  lg:text-xl text-lg font-normal py-8 '>
                                            {item.description}
                                        </p>
                                        <button className='bg-orange  font-bold rounded-sm py-3 px-12 bg-orange-500 text-white flex justify-center items-center gap-2 curser-pointer'>Read more</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })

                    }

                </Swiper>
            </div>

        </>
    );
}