import Block from './block'
import CardPost from '../cards/card-post'

export default function PostLoop() {
    return (
        <Block>
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="px-4 w-1/4 mb-8">
                        <CardPost/>
                    </div>
                    <div className="px-4 w-1/4 mb-8">
                        <CardPost/>
                    </div>
                    <div className="px-4 w-1/4 mb-8">
                        <CardPost/>
                    </div>
                    <div className="px-4 w-1/4 mb-8">
                        <CardPost/>
                    </div>
         
                </div>
            </div>
        </Block>
    )
}