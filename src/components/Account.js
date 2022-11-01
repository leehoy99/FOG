import React, { Fragment, useEffect, useState } from 'react'
import Nav from '../ui/Nav';
import Bag from '../bag/Bag';
import '../css/account.css'

function Account() {
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
            <Nav value={display} getDis={getDis}/>
            <section class="account">
                <div class="contents">
                    <p>LOGIN</p>
                    <form action="" class="account-form">
                        <div class="email-box">
                            <label for="email"></label>
                            <input type="email" id="email" placeholder="EMAIL"/>
                        </div>
                        <div class="password-box">
                            <label for="password"></label>
                            <input type="password" id="password" placeholder="PASSWORD"/>
                        </div>
                        <input type="submit" value="SIGN IN" />
                    </form>
                    <a href="/"><p>FORGOT YOUR PASSWORD?</p></a>
                    <input type="button" id="resist" value="REGISTER AN ACCOUNT"/> 
                </div>
            </section>
            <div class="bottom-menu">
                <section class="contact-section">
                    <div class="contact">
                        <h4 class="join">Join the Conversation</h4>
                        <label for="email"></label>
                        <input type="email" class="email" placeholder="EMAIL ADDRESS" onfocus="this.placeholder=''" />
                    </div>
                </section>
                <footer class="footer-section">
                    <div class="footer">
                        <p><a href="/contact.html">CONTACT</a></p>
                        <p><a href="/client-services/shipping-policy.html">CLIENT SECVICE</a></p>
                        <p><a href="/legal-notices/privacy-policy.html">LEGAL NOTICES</a></p>
                        <p><a href="https://www.instagram.com/fearofgod/">SOCIAL</a></p>
                    </div>
                </footer>
            </div>
            <Bag value={display}/>
    </Fragment>
  )
}

export default Account