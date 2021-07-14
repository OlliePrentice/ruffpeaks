import Link from 'next/link'

export default function Button({ url, target, style = '', type = 'a', extraClasses, attributes, onClick, children }) {

    let classes = ' inline-block py-3 px-6 rounded-full text-sm sm:text-xs font-semibold uppercase tracking-wider border-2 shadow hover:shadow-lg focus:shadow-lg transition no-underline !outline-none';

    if(style === 'secondary') {
        classes += ' bg-primary-500 text-white border-primary-500 hover:text-white focus:text-white hover:bg-primary-400 hover:border-primary-400 focus:bg-primary-400 focus:border-primary-400';
    } else if(style === 'tertiary') {
        classes += ' border-gray-700 text-gray-700 hover:text-white focus:text-white hover:bg-primary-400 focus:bg-primary-400 hover:border-primary-400 focus:border-primary-400';
    } else {
        classes += ' border-primary-500 text-primary-500 hover:text-white focus:text-white hover:bg-primary-400 focus:bg-primary-400 hover:border-primary-400 focus:border-primary-400';
    }

    if(extraClasses) {
        classes += ' ' + extraClasses;
    }

  
    return (
        <>
            {type === 'a' && 
            <Link href={url} target={target}  >
                <a className={`${classes}`} {...attributes} onClick={onClick}>{children}</a>
            </Link>}
            {type === 'button' && 
            <button className={`${classes}`} {...attributes} onClick={onClick} >
                {children}
            </button>}
        </>
    )
}