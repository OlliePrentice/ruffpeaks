import Block from './block'
import Image from 'next/image'

export default function PageHeader({title, image}) {
    return (
        <Block padding={false}>
            <div className="relative py-40 flex items-center">
                <div className="relative min-h-full w-full bg-black bg-opacity-50 absolute z-10 top-0 left-0 py-40"></div>
                <Image
                    alt="Dog walk in forest"
                    src={image}
                    layout="fill"
                    objectFit="cover"
                />

                <div className="container mx-auto relative z-10 text-center">
                    <h1 className="text-white text-8xl">{title}</h1>
                </div>
            </div>
        </Block>
    )
}