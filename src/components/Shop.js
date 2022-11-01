import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Nav from '../ui/Nav'
import '../css/shop.css'
import Bag from '../bag/Bag';

function Shop() {

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
            <section className="filter-section">
                <p className="cartegory">ALL<span className="arrow" /></p>
                <p className="filter">FILTER<span className="cross-minus" /></p>
            </section>
            <section className="items">
                <div className="item">
                <div className="img-box">
                    <Link to="/Detail"><img src="Images/02.png" alt='/' /></Link>
                </div>
                <div className="paragraph-box">
                    <Link to="/Detail">
                    <p className="brand">FEAR OF GOD</p>
                    <p className="cloth">Full Zip Baseball Jersey</p>
                    <p className="price">₩976,200</p>
                    </Link>
                </div>
                </div>
            </section>
            <section className="page">
                <span className="left-arrow">←</span>
                <p>1</p>
                <p>2</p>
                <span className="right-arrow">→</span>
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
                    <p><Link to="/contact">CONTACT</Link></p>
                    <p><Link to="/client-services/shipping-policy">CLIENT SECVICE</Link></p>
                    <p><Link to="/legal-notices/privacy-policy">LEGAL NOTICES</Link></p>
                    <p><Link to="https://www.instagram.com/fearofgod/">SOCIAL</Link></p>
                </div>
                </footer>
            </div>
        </div>
        <Bag value={display}/>
    </Fragment>
  )
}

export default Shop;
