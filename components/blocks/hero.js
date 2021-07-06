import Block from './block'
import Image from 'next/image'

import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([EffectFade, Autoplay]);

export default function Hero() {
    return (
        <Block blockId="hero" padding="pb-20">
            <div className="relative h-screen-header select-none">
                <div className="min-h-full w-full bg-black bg-opacity-50 absolute z-10 top-0 left-0 py-40"></div>
                    
               
                    <Swiper
                        className="min-h-inherit"
                        spaceBetween={0}
                        slidesPerView={1}
                        effect="fade"
                        autoplay={{ delay: 5000 }} 
                    >
                    <SwiperSlide>
                        <Image
                            alt="Dog walk in forest"
                            src="/dog_hero.jpg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            alt="Dog walk in forest"
                            src="/pexels-artem-beliaikin-2613329.jpg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            alt="Dog walk in forest"
                            src="/pexels-james-frid-1587242.jpg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            alt="Dog walk in forest"
                            src="/pexels-johann-2002056.jpg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </SwiperSlide>
            
                    </Swiper>
                
                <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-xl px-4">
                    <Image
                        alt="White Logo"
                        src="/ruffpeaks-white-no-text.svg"
                        layout="intrinsic"
                        width="300"
                        height="300"
                    />

                    <div className="pt-2.5 text-white">
                        <h1 className="text-7xl mb-0">Dog walking around Glossop</h1>
                        <div className="flex flex-wrap justify-center cursor-pointer absolute -bottom-40 pt-20 left-1/2 transform -translate-x-1/2">
                            <p className="w-full mb-2">Find out more</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Block>
    )
}