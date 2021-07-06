import Block from './block'
import CardAccordion from '../cards/card-accordion'

export default function Accordion() {
    return (
        <Block>
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-4 last:mb-0">
                        <CardAccordion />
                    </div>
                    <div className="mb-4 last:mb-0">
                        <CardAccordion />
                    </div>
                    <div className="mb-4 last:mb-0">
                        <CardAccordion />
                    </div>
                    <div className="mb-4 last:mb-0">
                        <CardAccordion />
                    </div>
                    <div className="mb-4 last:mb-0">
                        <CardAccordion />
                    </div>
                </div>
            </div>
        </Block>
    )
}