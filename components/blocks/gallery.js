import Block from './block'
import Image from 'next/image'
import Masonry from 'react-masonry-css'

export default function Gallery() {

    const breakpointColumns = {
        default: 3,
        768: 2,
        475: 1
    };

    return (
        <Block>
            <div className="container mx-auto text-zero">

                <Masonry
                    breakpointCols={breakpointColumns}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column">
                                          
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-johann-2002056.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="1200"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/dog_hero.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="800"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-artem-beliaikin-2613329.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="1000"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-james-frid-1587242.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="800"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-dariusz-grosa-2043021.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="1000"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-johann-2002056.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="1200"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/dog_hero.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="800"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-artem-beliaikin-2613329.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="1000"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-james-frid-1587242.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="800"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-dariusz-grosa-2043021.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="1000"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-johann-2002056.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="1200"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/dog_hero.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="800"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-artem-beliaikin-2613329.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="1000"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-james-frid-1587242.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="800"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Image
                            alt="Dog Walk"
                            src="/pexels-dariusz-grosa-2043021.jpg"
                            layout="intrinsic"
                            width="1000"
                            height="1000"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </Masonry>
            </div>
        </Block>
    )
}