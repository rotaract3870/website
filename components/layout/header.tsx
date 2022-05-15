import React from 'react'
import Nav from './nav'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="header-area">
            <div id="sticky-header" className="header_menu_area header_menu_area_2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-5 col-lg-3 col-md-6 col-6">
                            <div className="logo">
                                <Link href="/"><a><img src="/img/logo/logo.png" alt="" /></a></Link>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-9 d-none d-lg-block">
                            <div className="main-menu menu_2 text-center">
                                <Nav />
                            </div>
                        </div>
                        {/* <div className="col-xxl-3 col-xl-3 col-lg-1 col-md-6 col-6">
                            <div className="header-right d-flex align-items-center justify-content-end">
                                <div className="hamburger-menu menu-bar info-bar d-inline-block ml-20">
                                    <button className="hamburger-btn open-mobile-menu"><i className="fal fa-bars"></i></button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    )
}
