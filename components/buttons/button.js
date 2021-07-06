export default function Button({ url, target, style = '', type = 'a', extraClasses, attributes, onClick, children }) {

      
    let classes = ' inline-block py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-wider border-2 shadow hover:shadow-lg focus:shadow-lg transition no-underline !outline-none';

    if(style === 'secondary') {
        classes += ' bg-green-500 text-white border-green-500 hover:text-white focus:text-white hover:bg-green-400 hover:border-green-400 focus:bg-green-400 focus:border-green-400';
    } else if(style === 'tertiary') {
        classes += ' border-gray-700 text-gray-700 hover:text-white focus:text-white hover:bg-green-400 focus:bg-green-400 hover:border-green-400 focus:border-green-400';
    } else {
        classes += ' border-green-500 text-green-500 hover:text-white focus:text-white hover:bg-green-400 focus:bg-green-400 hover:border-green-400 focus:border-green-400';
    }

    if(extraClasses) {
        classes += ' ' + extraClasses;
    }

  
    return (
        <>
            {type === 'a' && 
            <a className={`${classes}`} href={url} target={target} {...attributes} onClick={onClick} >
                {children}
            </a>}
            {type === 'button' && 
            <button className={`${classes}`} {...attributes} onClick={onClick} >
                {children}
            </button>}
        </>
    )
}