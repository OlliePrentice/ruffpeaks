import Image from 'next/image'
import Tag from '../tags/tag'

export default function CardPost() {
    return (
        <div className="remove-underlines">
            <a href="/" className="block shadow-lg overflow-hidden rounded-lg group">
                <div className="relative overflow-hidden text-zero">
                    <Image
                        alt="Dog Walk"
                        src="/pexels-james-frid-1587242.jpg"
                        layout="intrinsic"
                        width="800"
                        height="400"
                        objectFit="cover"
                        className="rounded-t-lg transform group-hover:scale-110 transition"
                    />
                </div>
                <div className="bg-white p-8 text-gray-800 transition">
                    <div className="mb-2">
                        <Tag name="Walking" />
                        <Tag name="Group" />
                    </div>
                    <h5 className="font-medium">Article Title Here</h5>
                    <div>
                        <p>Lorem ipsum dolor sit amet, vis cu platonem disputationi, erat reque suscipit at pri. Mea an nobis impedit salutatus. </p>
                    </div>
                    <span className="font-bold hover:text-primary-500 transition group-hover:text-primary-500">Read more</span>
                </div>
            </a>
        </div>
    );
}