import Image from 'next/image'
import Button from '../buttons/button'

export default function Header() {

    const liClass = 'inline-block px-4 mb-0 text-sm font-semibold'

    return (
        <header className="main-header bg-white md:fixed w-full top-0 left-0 z-50 shadow remove-underlines  remove-bullets">
            <div className="py-4 px-5 ">
                <div className="flex -mx-2 items-center">
                    <div className="flex-1 px-2 text-center md:text-left">
                        <div className="main-header__logo py-10 md:py-0">
                            <a href="/"
                                className="main-header__logo-link pt-1 inline-block">
                                    <Image
                                        src="/ruffpeaks-logo.svg"
                                        alt="logo"
                                        width={160}
                                        height={28}

                                    />
                                </a>
                        </div>
                    </div>


                    <div className="flex-1 px-2 text-right hidden md:block">
                        <nav className="main-header__nav">
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
                                    <a href="/stories">Stories</a>
                                </li>
                                <li className={liClass}>
                                    <Button url="/contact" style="secondary" small={true}>Contact</Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}