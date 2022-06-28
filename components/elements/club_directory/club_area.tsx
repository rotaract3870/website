import React from 'react'
import Link from 'next/link'
import directoryRepo from '../../../data/club_directory.json';

export default function ClubArea() {
    return (
        <div className="team_area pt-110 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="section_title mb-50 text-center">
                            <span className="sub_title sub_title_2">Cagayan de Oro City</span>
                            <h3 className="title title_2">Zone 1</h3>
                        </div>
                    </div>
                    {directoryRepo.data.filter((club) => club.zone === "1").map((club) => {
                        return (
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                                <div className="single_team mb-30">
                                    <h5 className="member_name"><Link href="/volunteer-details"><a>{club.club_name}</a></Link></h5>
                                    <span className="designation">{club.president_name}</span>
                                    <div className="member_social">
                                        <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                                        <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                                        <Link href="#"><a className="behance"><i className="fab fa-behance"></i></a></Link>
                                        <Link href="#"><a className="youtube"><i className="fab fa-youtube"></i></a></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="section_title mb-50 text-center">
                            <span className="sub_title sub_title_2">Lanao del Norte</span>
                            <h3 className="title title_2">Zone 2</h3>
                        </div>
                    </div>
                    {directoryRepo.data.filter((club) => club.zone === "2").map((club) => {
                        return (
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                                <div className="single_team mb-30">
                                    <h5 className="member_name"><Link href="/volunteer-details"><a>{club.club_name}</a></Link></h5>
                                    <span className="designation">{club.president_name}</span>
                                    <div className="member_social">
                                        <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                                        <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                                        <Link href="#"><a className="behance"><i className="fab fa-behance"></i></a></Link>
                                        <Link href="#"><a className="youtube"><i className="fab fa-youtube"></i></a></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="section_title mb-50 text-center">
                            <span className="sub_title sub_title_2">Maguindanao</span>
                            <h3 className="title title_2">Zone 3</h3>
                        </div>
                    </div>
                    {directoryRepo.data.filter((club) => club.zone === "3").map((club) => {
                        return (
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                                <div className="single_team mb-30">
                                    <h5 className="member_name"><Link href="/volunteer-details"><a>{club.club_name}</a></Link></h5>
                                    <span className="designation">{club.president_name}</span>
                                    <div className="member_social">
                                        <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                                        <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                                        <Link href="#"><a className="behance"><i className="fab fa-behance"></i></a></Link>
                                        <Link href="#"><a className="youtube"><i className="fab fa-youtube"></i></a></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="section_title mb-50 text-center">
                            <span className="sub_title sub_title_2">Bukidnon, Misamis Oriental, and Camiguin Island</span>
                            <h3 className="title title_2">Zone 4</h3>
                        </div>
                    </div>
                    {directoryRepo.data.filter((club) => club.zone === "4").map((club) => {
                        return (
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                                <div className="single_team mb-30">
                                    <h5 className="member_name"><Link href="/volunteer-details"><a>{club.club_name}</a></Link></h5>
                                    <span className="designation">{club.president_name}</span>
                                    <div className="member_social">
                                        <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                                        <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                                        <Link href="#"><a className="behance"><i className="fab fa-behance"></i></a></Link>
                                        <Link href="#"><a className="youtube"><i className="fab fa-youtube"></i></a></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
