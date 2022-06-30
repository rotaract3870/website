import React from 'react'
import Link from 'next/link'

type ClubCardProps = {
    club: string,
    president: string
}

export default function ClubCard({ club, president }: ClubCardProps) {
    return (
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
            <div className="single_team mb-30" style={{ minHeight: 200 }}>
                <h5 className="member_name"><Link href="#"><a>{club}</a></Link></h5>
                <span className="designation">{president}</span>
                {/* <div className="member_social">
                    <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                    <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                    <Link href="#"><a className="behance"><i className="fab fa-behance"></i></a></Link>
                    <Link href="#"><a className="youtube"><i className="fab fa-youtube"></i></a></Link>
                </div> */}
            </div>
        </div>
    )
}