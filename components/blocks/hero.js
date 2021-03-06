import Block from './block';
import Image from 'next/image';

import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([EffectFade, Autoplay]);

export default function Hero() {

    function scrollClickHandler(e) {
        e.currentTarget.closest('section').nextSibling.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    return (
        <Block blockId="hero" classes="pb-0 lg:pb-20">
            <div className="relative min-h-screen-header select-none flex items-center justify-center py-16 lg:py-56">
                <div className="min-h-full w-full bg-black bg-opacity-50 absolute z-10 top-0 left-0"></div>
                    
                <div className="absolute top-0 left-0 w-full h-full">
                    <Swiper
                        className="h-full"
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
                </div>
                
                <div className="relative z-20 text-center w-full max-w-xs sm:max-w-sm lg:max-w-xl px-4">
                    <div className="w-3/5 lg:w-full mx-auto">
                        <Image
                            alt="White Logo"
                            src="/ruffpeaks-white-no-text.svg"
                            layout="intrinsic"
                            width="300"
                            height="300"
                        />
                    </div>

                    <div className="pt-2.5 text-white">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-0">Dog walking around Glossop</h1>
                        <div className="hidden lg:flex flex-wrap justify-center cursor-pointer absolute -bottom-40 pt-20 left-1/2 transform -translate-x-1/2 hover:opacity-70 transition" onClick={(e) => {scrollClickHandler(e)}}>
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