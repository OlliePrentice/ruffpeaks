import Block from './block'
import Image from 'next/image'
import Button from '../buttons/button'
import Lottie from "lottie-react"
import * as dogAnimation from '../../public/dog.json'

export default function ContentImage({heading, copy, link, image, reverse, animation}) {
    return (
        <Block id="contentImageOne">
            <div className="container mx-auto xl:max-w-6xl relative">
                {animation && <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-12">
                    <Lottie animationData={dogAnimation.default} />
                </div>}
                <div className={`flex flex-wrap items-center -mx-4 ${reverse && 'flex-row-reverse'}`}>
                    <div className="px-4 w-1/2">
                        <div className="shadow-2xl text-zero rounded-xl">
                            <Image
                                alt="Dog Walk"
                                src={image}
                                layout="intrinsic"
                                width="1000"
                                height="1200"
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="px-4 w-1/2">
                        <div className={`max-w-lg py-10 px-10 ${!reverse && 'ml-auto'}`}>
                            <h2 className="text-6xl" dangerouslySetInnerHTML={{__html: heading}}></h2>
                            <div className="l-copy" dangerouslySetInnerHTML={{__html: copy}}></div>
                            <Button url={link.url} >{link.title}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Block>
    )
}