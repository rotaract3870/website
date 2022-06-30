import React from 'react'
import Link from 'next/link'

export default function RepresentativeArea() {
    return (
        <div className="team_area pt-110 pb-90">
            <div className="container">
                <div className="row align-items-center mb-80">
                    <div className="col-xxl-5 col-xl-5 col-lg-5">
                        <div className="team_single_img">
                            <img src="/img/team/drr.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-7">
                        <div className="team_single_info_wrapper pl-50">
                            <div className="section_title">
                                <span className="sub_title sub_title_2">District Rotaract Representative, RY 2022-23</span>
                                <h3 className="title title_2">Stephen Leo Ferrera</h3>
                            </div>
                            <p className="mb-40">Our embodiment of being a Rotaractor is a message and inspiration for others and to see the purpose of becoming a member of this service humanitarian organization. As a Rotaractor, I would like to ask them if they believe in the power of collaborative service and if yes, they are welcome to Rotaract. I want them to know that Rotaract doesn’t choose people, but rather the people chose Rotaract. If they have the heart to serve and the openness to learn, we can make a difference and build a better tomorrow. It’s not always late to join Rotaract but you are just on time.</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="team_person_info">
                                        <Link href="/tell:+09638664967007"><a><strong>Phone:</strong> -</a></Link>
                                        <Link href="/mailto:example@gmail.com"><a><strong>Email:</strong> -</a></Link>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="team_person_info">
                                        <div className="team_info_social">
                                            <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                                            <Link href="#"><a className="google"><i className="fab fa-google-plus-g"></i></a></Link>
                                            <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                                            <Link href="#"><a className="pinterest"><i className="fab fa-pinterest-p"></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
