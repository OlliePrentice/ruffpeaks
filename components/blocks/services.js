import Block from '../blocks/block'
import Button from '../buttons/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Lottie from "lottie-react"
import * as dogAnimation from '../../public/dog.json'

export default function Services({animation}) {

    const panelClasses = 'px-12 py-16 h-full flex flex-col rounded-lg text-center shadow shadow-lg bg-white';

    return (
        <Block>
                <div className="container mx-auto relative">
                {animation && <div className="absolute -top-10 left-0 z-10 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 -scale-x-100">
                    <Lottie animationData={dogAnimation.default} />
                </div>}
                <div>
                    <h2 className="text-center mb-10">Our Services</h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-1/4">
                        <div className={panelClasses}>
                            <div className="flex-1">
                                <h4 className="mb-8 font-bold text-sm uppercase">Dog Walking</h4>
                                <div className="mb-8">
                                    <span className="text-6xl font-black"><span className="text-2xl font-medium">£</span>12<span className="text-2xl font-medium text-gray-400">/hour</span></span>
                                </div>
                                <ul className="text-left remove-bullets icon-bullets mb-10">
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>A 1 hour walk</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Multiple walking locations to stop your dog getting bored</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>A Gentle wash and dry if your pooch dirty from the walk</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Second Dog for £8</li>
                                </ul>
                            </div>
                            <div>
                                <Button url="/" style="tertiary" extraClasses="w-full">Enquire Now</Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-1/4">
                        <div className={panelClasses}>
                            <div className="flex-1">
                                <h4 className="mb-8 font-bold text-sm uppercase">Dog Sitting</h4>
                                <div className="mb-8">
                                <span className="text-6xl font-black"><span className="text-2xl font-medium">£</span>25<span className="text-2xl font-medium text-gray-400">/day</span></span>
                                </div>
                                <ul className="text-left remove-bullets icon-bullets mb-10">
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Up to 4 visits per day (price reduced for less visits)</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Fed and allowed outside every 3 hours</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Two walks included</li>
                                </ul>
                            </div>
                            <div>
                                <Button url="/" style="tertiary" extraClasses="w-full">Enquire Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className={panelClasses}>
                            <div className="flex-1">
                                <h4 className="mb-8 font-bold text-sm uppercase">Dog Boarding</h4>
                                <div className="mb-8">
                                    <span className="text-6xl font-black"><span className="text-2xl font-medium">£</span>32<span className="text-2xl font-medium text-gray-400">/day</span></span>
                                </div>
                                <ul className="text-left remove-bullets icon-bullets mb-10">
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Let your dog live in our home</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Enclosed Garden</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>We only board one dog at a time</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Two walks included</li>
                                </ul>
                            </div>
                            <div>
                                <Button url="/" style="tertiary"  extraClasses="w-full">Enquire Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className={panelClasses}>
                            <div className="flex-1">
                                <h4 className="mb-8 font-bold text-sm uppercase">Overnight Dog Sitting</h4>
                                <div className="mb-8">
                                <span className="text-6xl font-black"><span className="text-2xl font-medium">£</span>36<span className="text-2xl font-medium text-gray-400">/day</span></span>
                                </div>
                                <ul className="text-left remove-bullets icon-bullets">
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Security for your home while away</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Bin and garden maintenance</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Regular updates upon request</li>
                                    <li><FontAwesomeIcon icon={['far', 'check-circle']}/>Two walks included</li>
                                </ul>
                            </div>
                            <div>
                                <Button url="/" style="tertiary"  extraClasses="w-full">Enquire Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Block>
    );
}