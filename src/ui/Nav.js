import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'

function Nav(props) {

    
    const [navScroll, setNavScroll] = useState('nav-top');
    const [mouse, setMouse] = useState('searchExtend off');
    
    const click = () => {
        props.getDis('on');
        console.log('do in nav')
    }
    
    const mouseOver = () => {
        setMouse('searchExtend on');
        setNavScroll('nav-top nav-bg');
    }
    const mouseLeave = () => {
        setMouse('searchExtend off');
        setNavScroll('nav-top nav-bg');
    }

    const navGoScroll = function() {
        if(window.scrollY > 0) {
            setNavScroll('nav-top nav-bg')
        } else {
            setNavScroll('nav-top')
        }
    }
    
    useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener('scroll', navGoScroll);
            navGoScroll();
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', navGoScroll)
        }
    }, []);

    return (
    <Fragment>
        <div className='container' onMouseLeave={mouseLeave}>
            <div className='nav-top-sticky'>
                <nav className={navScroll}>
                    <div className="react-i">
                        <span className="material-symbols-outlined search" onClick={mouseOver}>search</span>
                        <Link to="/Account"><span className="material-symbols-outlined person">person</span></Link>
                        <span className="material-symbols-outlined local_mall" onClick={click}>local_mall</span>
                    </div>
                    <div className="L-gnb gnb">
                        <ul>
                            <li className="gnb1">
                                <Link to="/Shop" className="fog" >FEAR OF GOD</Link>
                            </li>
                            <li className="gnb2">
                                <Link to="/Athletics" className="ath">ATHLETIC</Link>
                            </li>
                            <li className="gnb3">
                                <Link to className="esn">ESSENTIALS</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="title">
                        <Link to="/Main"><p>FEAR OF GOD</p></Link>
                    </div>
                    <div className="R-gnb gnb">
                        <ul>
                        <li className="gnb4"><p onMouseOver={mouseOver}>SEARCH</p>
                        </li>
                        <li className="gnb5"><Link to="/Account">ACCOUNT</Link></li>
                        <li className="gnb6" onClick={click}><p>BAG</p></li>
                        </ul>
                    </div>
                    <div className={mouse} onMouseOver={mouseOver}>
                        <input type="text" id='nav-search'/>
                    </div>
                </nav>
            </div>
            <div className="nav-bottom-sticky">
                <nav className="nav-bottom">
                <div className="L-gnb gnb">
                    <ul>
                    <li className="gnb1">
                        <Link to="/Shop" className="fog">FEAR OF GOD</Link>
                    </li>
                    <li className="gnb2">
                        <Link to="/Athletics">ATHLETIC</Link>
                    </li>
                    <li className="gnb3">
                        <Link to="/Shop" className="esn">ESSENTIALS</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    </Fragment>
  )
}

export default Nav;