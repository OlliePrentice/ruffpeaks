import Block from './block'
import Image from 'next/image'
import Button from '../buttons/button'

export default function BackgroundCta() {
    return (
        <Block>
            <div className="container mx-auto">
                <div className="relative py-40 flex justify-center items-center rounded-lg overflow-hidden">
                    <div className="absolute w-full h-full bg-black bg-opacity-50 absolute z-10 top-0 left-0 py-40"></div>
                    <Image
                        alt="Dog walk in forest"
                        src="/pexels-marcin-jozwiak-2739505.jpg"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="relative z-10 text-white text-center">
                        <h2>Book a walk</h2>
                        <Button url="/" style="secondary">Contact now</Button>
                    </div>
                </div>

            </div>
        </Block>
    )
}