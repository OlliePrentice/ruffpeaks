import Block from './block'
import CardAccordion from '../cards/card-accordion'

export default function Accordion({segments}) {
    return (
        <Block>
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    {segments.map((segment, index) => 
                         (
                            <div key={index} className="mb-4 last:mb-0">
                                <CardAccordion id={`drop${index + 1}`} heading={segment.heading} copy={segment.copy} />
                            </div>
                        )
                    )}
            
                </div>
            </div>
        </Block>
    )
}