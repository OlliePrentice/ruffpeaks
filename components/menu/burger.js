import { useState } from "react";

export default function Burger({mobileMenuHander}) {
    const [active, setActive] = useState(false);

    return (
        <div className={`burger md:hidden ${active && 'active'}`} onClick={() => { 
            setActive(!active);
            mobileMenuHander(!active); 
        }}>
            <div className="burger__wrapper">
                <div className="burger__menu">
                    <div className="burger__lines"></div>
                </div>
            </div>
        </div>
    );
}