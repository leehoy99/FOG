import React, { Fragment, useEffect, useState } from 'react'
import ReactPlayer from "react-player";
import Bag from '../bag/Bag';
import '../css/main.css'
import Nav from '../ui/Nav'

function Main() {

    const [display, setDisplay] = useState('');
    const getDis = (display) => {
        setDisplay(display)
        console.log('do in shop')
    };
    console.log(display)
    useEffect(() => {
        getDis();
    },[display])

  return (
    <Fragment>
        <div className="container">
            <Nav value={display} getDis={getDis}/>
            <header className="header">
                <div className="header-img">
                    <ReactPlayer 
                        className='video'
                        url={'https://cdn.shopify.com/videos/c/o/v/9d91782f640c475ba57648d9daae34e0.mp4'}
                        playing={true}
                        loop={true}
                        muted={true}
                        autoPlay={true}
                        width={'100%'}
                        height={'auto'}
                    />
                </div>
                <div className="header-text">
                <h1 className="header-text1">ESSENTIALS</h1>
                <h1 className="header-text1">THE SECOND DELIVERY</h1>
                <h4 className="header-text2">SHOP</h4>
                </div>
            </header>
            <section className="cloth-section">
                <div className="cloth-menu-1 cloth-menu">
                <a href="/shop.html">
                    <img src="Images/02.png" alt='/' />
                    <p>FEAR OF GOD</p>
                </a>
                </div>
                <div className="cloth-menu-2 cloth-menu">
                <a href="/athletics.html">
                    <img src="Images/03.png" alt='/' />
                    <p>ATHLETICS</p>
                </a>
                </div>
                <div className="cloth-menu-3 cloth-menu">
                <a href="/shop.html">
                    <img src="Images/04.png" alt='/' />
                    <p>ESSENTIALS</p>
                </a>
                </div>
            </section>
            <div className="bottom-menu">
                <section className="contact-section">
                <div className="contact">
                    <h4 className="join">Join the Conversation</h4>
                    <label htmlFor="email" />
                    <input type="email" className="email" placeholder="EMAIL ADDRESS" onfocus="this.placeholder=''" />
                </div>
                </section>
                <footer className="footer-section">
                <div className="footer">
                    <p><a href="/contact.html">CONTACT</a></p>
                    <p><a href="/client-services/shipping-policy.html">CLIENT SECVICE</a></p>
                    <p><a href="/legal-notices/privacy-policy.html">LEGAL NOTICES</a></p>
                    <p><a href="https://www.instagram.com/fearofgod/">SOCIAL</a></p>
                </div>
                </footer>
            </div>
            <a href="/"><span className="top">↑</span></a>
        </div>
        <Bag value={display}/>
    </Fragment>
  )
}

export default Main
