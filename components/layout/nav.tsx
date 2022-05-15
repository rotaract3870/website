import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav id="mobile-menu">
            <ul>
                <li className="active">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li><Link href="#"><a>Monthly Newsletter</a></Link></li>
                <li><Link href="#"><a>Events</a></Link></li>
                <li className="menu-item-has-children"><Link href="#"><a>Our Leaders</a></Link>
                    <ul className="sub-menu">
                        <li><Link href="#"><a>District Rotaract Representative</a></Link></li>
                        <li><Link href="#"><a>District Governor</a></Link></li>
                        <li><Link href="#"><a>District Officers</a></Link></li>
                        <li><Link href="#"><a>Club Presidents</a></Link></li>
                        <li><Link href="#"><a>Council of PDRRs</a></Link></li>
                    </ul>
                </li>
                <li><Link href="#"><a>Club Directory</a></Link></li>
                <li><Link href="#"><a>Resources</a></Link></li>
            </ul>
        </nav>
    )
}
