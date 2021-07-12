import { useState, useEffect, useRef } from "react";

export default function CardAccordion({id, heading, copy}) {
    const [open, setOpen] = useState(false); 
    const dropRef = useRef(null);

    useEffect(() => {
        if(window.location.hash && window.location.hash === '#' + id) {
            setOpen(!open);
            setTimeout(() => {
                dropRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 150);
       
        }
    }, []);

    return (
        <div id={id} className="remove-underlines shadow-md rounded-lg" ref={dropRef}>
                <div onClick={() => {setOpen(!open)}} className={`py-5 pl-5 lg:pl-10 pr-14 lg:pr-20 border border-gray-100 cursor-pointer relative ${!open ? 'rounded-lg' : 'rounded-t-lg'}`}>
                    <h5 className="mb-0">{heading}</h5>
                    <div className="absolute top-1/2 right-5 lg:right-10 transform -translate-y-1/2 text-primary-500">
                        {!open && 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}
                        {open &&
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}
                    </div>
                </div>
                <div className={`${!open ? 'hidden' : 'block'}`}>
                    <div className="border border-gray-100 border-t-0 py-5 px-5 lg:px-10 remove-last-margin" dangerouslySetInnerHTML={{__html: copy}}></div>
                </div>
        </div>
    );
}