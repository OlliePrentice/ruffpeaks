import Block from './block'

export default function TextContent({heading, copy}) {
    return (
        <Block>
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-center mb-16 lg:text-7xl font-body font-bold">{heading}</h1>
                    <div dangerouslySetInnerHTML={{__html: copy}}></div>
                </div>
            </div>
        </Block>
    )
}