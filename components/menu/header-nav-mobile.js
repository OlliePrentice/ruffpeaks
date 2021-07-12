import Button from '../buttons/button'

export default function HeaderNavMobile({menuState}) {

    const liClass = 'block px-4 mb-4 text-2xl text-center font-semibold last:mt-6';
    const aClass = 'inline-block p-2 no-underline';

    return (
        <nav className={`header-nav-mobile fixed left-0 z-50 bg-white w-full  overflow-y-auto overflow-x-hidden ${!menuState && 'hidden'} !md:hidden`}>
            <ul className="-mx-4 mb-0 pt-10 pb-10">
                <li className={liClass}>
                    <a href="/services" className={aClass}>Services</a>
                </li>
                <li className={liClass}>
                    <a href="/gallery" className={`active-page ${aClass}`}>Gallery</a>
                </li>
                <li className={liClass}>
                    <a href="/team" className={aClass}>Team</a>
                </li>
                
                <li className={liClass}>
                    <a href="/faq" className={aClass}>FAQ</a>
                </li>
                <li className={liClass}>
                    <Button url="/contact" style="secondary" small={true}>Contact</Button>
                </li>
            </ul>
        </nav>
    );
}