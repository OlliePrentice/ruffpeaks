import Image from 'next/image'
import Script from 'next/script'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <>
        <footer className="main-footer bg-gray-100 z-50 remove-underlines remove-bullets">
            <div className="container mx-auto">
                <div className="py-10">
                    <div className="mb-10 pt-2">
                        <a href="/"
                           className="main-header__logo-link opacity-70 hover:opacity-100">
                                <Image
                                    src="/ruffpeaks-horizontal.svg"
                                    alt="logo"
                                    width={200}
                                    height={80}

                                />
                           </a>
                    </div>
                    <nav>
                        <ul className="flex flex-wrap -mx-4 mb-0">
                            <li className="w-full w-1/2 md:w-1/4 px-4 mb-4">
                                <a href="#" className="font-bold uppercase text-sm mb-4 inline-block tracking-wide">About</a>
                                <ul>
                                    <li className="mb-1">
                                        <a href="/services">Services</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="/team">Team</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-full w-1/2 md:w-1/4 px-4 mb-4">
                                <a href="#" className="font-bold uppercase text-sm mb-4 inline-block tracking-wide">Support</a>
                                <ul>
                                    <li className="mb-1">
                                        <a href="/faq">FAQ</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-full w-1/2 md:w-1/4 px-4 mb-4">
                                <a href="#" className="font-bold uppercase text-sm mb-4 inline-block tracking-wide">Legal</a>
                                <ul>
                                    <li className="mb-1">
                                        <a href="/privacy-policy">Privacy Policy</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="/cookie-policy">Cookie Policy</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-full w-1/2 md:w-1/4 px-4 mb-4">
                                <a href="#" className="font-bold uppercase text-sm mb-4 inline-block tracking-wide">Social</a>
                                <ul className="font-zero -mx-3">
                                    <li className="inline-block px-3">
                                        <a href="/" className="hover:text-primary-500">
                                            <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                                        </a>
                                    </li>
                                    <li className="inline-block px-3">
                                        <a href="/" className="hover:text-primary-500">
                                            <FontAwesomeIcon icon={['fab', 'twitter']}/>
                                        </a>
                                    </li>
                                    <li className="inline-block px-3">
                                        <a href="/" className="hover:text-primary-500">
                                            <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                        </a>
                                    </li>
                                    <li className="inline-block px-3">
                                        <a href="/" className="hover:text-primary-500">
                                            <FontAwesomeIcon icon={['fab', 'youtube']}/>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                           
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="border-t border-gray-300 py-5">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="flex-1 px-4">
                            <span className="text-sm">Ruff Peaks. &copy; {new Date().getFullYear()}. All rights reserved.</span>
                        </div>
                        <div className="px-4">
                            <span className="text-sm">Made my <span className="!underline">Prentice Design</span></span>
                        </div>
                
                    </div>
                </div>
            </div>

        </footer>
        <div id="fb-root"></div>

        <div id="fb-customer-chat" className="fb-customerchat">
        </div>

        <Script>
            {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "104181658543041");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function() {
                FB.init({
                xfbml            : true,
                version          : 'v11.0'
                });
            };

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            `}
        </Script>
        </>
    );
}