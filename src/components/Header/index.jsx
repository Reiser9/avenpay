import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {
    const [darkTheme, setDarkTheme] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        $(window).on("resize", function(){
            if($(window).width() > 981){
                setMenuOpen(false);
                $("body").removeClass("scroll");
            }
        });
    }, []);

    const goto = (point) => {
        let element = document.getElementById(point);
        element.scrollIntoView();
        if(menuOpen){
            setMenuOpen(false);
            $("body").removeClass("scroll");
        }
    }

    const changeTheme = () => {
        let body = document.body.classList;
        if(!body.contains("dark")){
            body.remove("light");
            body.add("dark");
            setDarkTheme(true);
        }
        else{
            body.remove("dark");
            body.add("light");
            setDarkTheme(false);
        }
    }

    const toggleMenu = () => {
        if(menuOpen){
            setMenuOpen(false);
            $("body").removeClass("scroll");
        }
        else{
            setMenuOpen(true);
            $("body").addClass("scroll");
        }
    }

    return(
        <>
            <header className="header w100">
                <div className="container">
                    <div className="header__inner w100 df aic jcsb">
                        <div className="header__wrapper df aic">
                            <Link to="/" className="header__logo df">
                                <img src="./assets/img/logo.svg" alt="logo" className="img light" />
                                <img src="./assets/img/logo-dark.svg" alt="logo" className="img dark" />
                            </Link>

                            <nav className="header__nav df aic">
                                <button onClick={() => goto("about")} className="button header__nav--link">
                                    About Us
                                </button>

                                <button onClick={() => goto("solutions")} className="button header__nav--link">
                                    Solutions
                                </button>

                                <button onClick={() => goto("partners")} className="button header__nav--link">
                                    Partners
                                </button>

                                <button onClick={() => goto("contacts")} className="button header__nav--link">
                                    Contacts
                                </button>
                            </nav>
                        </div>

                        <div className="header__wrapper df aic">
                            <button className="button change__mode df aic jcc" onClick={changeTheme}>
                                <img src="./assets/img/moon.svg" alt="moon" className="change__mode--icon" />
                            </button>

                            <button className="button login__button">
                                Login
                            </button>

                            <button className="button button__default open__button">
                                <span>Open Account</span>
                            </button>

                            {menuOpen
                            ? <div className="menu__inner">
                                <img src="./assets/img/cross.svg" alt="cross" className="cross light" onClick={toggleMenu} />
                                <img src="./assets/img/cross-dark.svg" alt="cross" className="cross dark" onClick={toggleMenu} />
                            </div>
                            : <div className="menu__inner">
                                <img src="./assets/img/menu.svg" alt="menu" className="menu light" onClick={toggleMenu} />
                                <img src="./assets/img/menu-dark.svg" alt="menu" className="menu dark" onClick={toggleMenu} />
                            </div>}
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile__menu${menuOpen ? ' active' : ''}`}>
                <div className='container'>
                    <div className='mobile__menu--inner'>
                        <div className='mobile__menu--nav df fdc aifs'>
                            <button className='button mobile__menu--link w100 df aic jcsb' onClick={() => goto('about')}>
                                <span className='df aic'>
                                    About Us
                                </span>

                                <img src='./assets/img/arrow-menu.svg' alt='img' className='mobile__menu--arrow light' />
                                <img src='./assets/img/arrow-menu-dark.svg' alt='img' className='mobile__menu--arrow dark' />
                            </button>

                            <button className='button mobile__menu--link w100 df aic jcsb' onClick={() => goto('solutions')}>
                                <span className='df aic'>
                                    Solutions
                                </span>

                                <img src='./assets/img/arrow-menu.svg' alt='img' className='mobile__menu--arrow light' />
                                <img src='./assets/img/arrow-menu-dark.svg' alt='img' className='mobile__menu--arrow dark' />
                            </button>

                            <button className='button mobile__menu--link w100 df aic jcsb' onClick={() => goto('partners')}>
                                <span className='df aic'>
                                    Partners
                                </span>

                                <img src='./assets/img/arrow-menu.svg' alt='img' className='mobile__menu--arrow light' />
                                <img src='./assets/img/arrow-menu-dark.svg' alt='img' className='mobile__menu--arrow dark' />
                            </button>

                            <button className='button mobile__menu--link w100 df aic jcsb' onClick={() => goto('contacts')}>
                                <span className='df aic'>
                                    Contacts
                                </span>

                                <img src='./assets/img/arrow-menu.svg' alt='img' className='mobile__menu--arrow light' />
                                <img src='./assets/img/arrow-menu-dark.svg' alt='img' className='mobile__menu--arrow dark' />
                            </button>
                        </div>

                        <div className='mobile__menu--social df fdc aifs'>
                            <a href='https://google.com' target='_blanc' className='mobile__menu--link w100 df aic jcsb'>
                                <span className='df aic'>
                                    <img src='./assets/img/twitter.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/twitter-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Twitter
                                </span>

                                @avenpay
                            </a>

                            <a href='https://google.com' target='_blanc' className='mobile__menu--link w100 df aic jcsb'>
                                <span className='df aic'>
                                    <img src='./assets/img/facebook.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/facebook-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Facebook
                                </span>

                                @avenpay_com
                            </a>

                            <a href='https://google.com' target='_blanc' className='mobile__menu--link w100 df aic jcsb'>
                                <span className='df aic'>
                                    <img src='./assets/img/reddit.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/reddit-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Reddit
                                </span>

                                @aven_pay
                            </a>

                            <a href='https://google.com' target='_blanc' className='mobile__menu--link w100 df aic jcsb'>
                                <span className='df aic'>
                                    <img src='./assets/img/instagram.svg' alt='img' className='mobile__menu--icon light' />
                                    <img src='./assets/img/instagram-dark.svg' alt='img' className='mobile__menu--icon dark' />

                                    Instagram
                                </span>

                                @avenpay
                            </a>
                        </div>

                        <button className='button mobile__darkmode w100 df aic jcsb' onClick={changeTheme}>
                            <span className='df aic'>
                                <img src='./assets/img/moon.svg' alt='img' className='mobile__menu--icon' />

                                Dark mode
                            </span>

                            <div className={`darkmode__indicator${darkTheme ? ' darkmode' : ''}`}></div>
                        </button>

                        <button className="button login__button--mobile w100">
                            Login
                        </button>

                        <button className='button button__default mobile__menu--button'>
                            <span className="w100">Connect wallet</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;