import Button from '../buttons/button'

export default function HeaderNav() {

    const liClass = 'inline-block px-4 mb-0 text-sm font-semibold'

    return (
        <nav className="header-nav hidden md:block">
            <ul className="-mx-4 mb-0">
                <li className={liClass}>
                    <a href="/services">Services</a>
                </li>
                <li className={liClass}>
                    <a href="/gallery" className="active-page">Gallery</a>
                </li>
                <li className={liClass}>
                    <a href="/team">Team</a>
                </li>
                
                <li className={liClass}>
                    <a href="/faq">FAQ</a>
                </li>
                <li className={liClass}>
                    <Button url="/contact" style="secondary" small={true}>Contact</Button>
                </li>
            </ul>
        </nav>
    );
}