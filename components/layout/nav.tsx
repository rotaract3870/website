import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav id="mobile-menu">
            <ul>
                <li className="active">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li><Link href="/monthly-newsletter"><a>Sindaw</a></Link></li>
                <li><Link href="/events"><a>Events</a></Link></li>
                <li className="menu-item-has-children"><Link href="/our-leaders"><a>Our Leaders</a></Link>
                    <ul className="sub-menu">
                        <li><Link href="#"><a>District Rotaract Representative</a></Link></li>
                        <li><Link href="#"><a>District Governor</a></Link></li>
                        <li><Link href="#"><a>District Officers</a></Link></li>
                        <li><Link href="#"><a>Club Presidents</a></Link></li>
                        <li><Link href="#"><a>Council of PDRRs</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/club-directory"><a>Club Directory</a></Link></li>
                <li><Link href="/resources"><a>Resources</a></Link></li>
                <li><Link href="/about-us"><a>About Us</a></Link></li>
            </ul>
        </nav>
    )
}
