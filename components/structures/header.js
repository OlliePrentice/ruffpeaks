import { useState } from "react";
import Image from 'next/image'
import Burger from '../menu/burger';
import HeaderNav from '../menu/header-nav';
import HeaderNavMobile from '../menu/header-nav-mobile';

export default function Header() {
    const [mobileMenuState, setMobileMenuState] = useState(false);

    function mobileMenuHander(active) {
        setMobileMenuState(active);
    }

    return (
        <>
            <header className="main-header bg-white fixed w-full top-0 left-0 z-50 shadow remove-underlines remove-bullets">
                <div className="py-1.5 md:py-2 px-5 ">
                    <div className="flex -mx-2 items-center">
                        <div className="flex-1 px-2 text-left">
                            <div className="main-header__logo py-2 md:py-1.5">
                                <a href="/"
                                    className="main-header__logo-link pt-1.5 inline-block">
                                        <Image
                                            src="/ruffpeaks-logo.svg"
                                            alt="logo"
                                            width={160}
                                            height={28}

                                        />
                                    </a>
                            </div>
                        </div>

                        <div className="flex-initial px-2 text-right">
                            <HeaderNav />
                            <Burger mobileMenuHander={mobileMenuHander} />
                        </div>
                    </div>
                </div>
            </header>
            <HeaderNavMobile menuState={mobileMenuState} />
        </>
    );
}