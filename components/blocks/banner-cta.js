import Block from './block';
import Button from '../buttons/button'

export default function BannerCta({heading, padding}) {
    return (
        <Block classes={padding}>
            <div className="py-32 bg-gray-900 text-center">
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto text-white">
                        <h2 className="text-5xl">Arrange a visit</h2>
                        <p>Get in touch through our contact form or Facebook page to arrange an introduction. We will ask some questions to get to understand your dog.</p>
                        <Button url="/contact" style="secondary">Contact today</Button>
                    </div>
                </div>
            </div>
        </Block>
    )
}