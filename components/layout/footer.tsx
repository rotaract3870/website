import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="footer_top_area footer_default_area p-rel bg_cover" style={{ "background": "url(/img/footer/footer_bg.jpg)" }}>
                <div className="footer_top_wrapper p-rel">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-3 col-xl-3 col-lg-7 col-md-7 col-sm-7">
                                <div className="footer_widget mb-50">
                                    <div className="footer_widget_title mb-30">
                                        <h4 className="footer_title">About Us</h4>
                                    </div>
                                    <p className="mb-25">Rotaract focuses on the development of young adults as leaders in their communities and workplaces. Clubs around the world also take part in international service projects, in a global effort to bring peace and international understanding to the world.</p>
                                    <div className="footer_locate_link theme-1">
                                        <ul>
                                            <li><Link href="#"><a><i className="fal fa-envelope"></i><strong>Email:</strong>rotaract3870.ict@gmail.com</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-5 col-sm-5">
                                <div className="footer_widget mb-50 pl_37">
                                    <div className="footer_widget_title mb-30">
                                        <h4 className="footer_title">Our Pages</h4>
                                    </div>
                                    <div className="footer_links theme-1">
                                        <ul>
                                            <li><Link href="#"><a>Our Clubs</a></Link></li>
                                            <li><Link href="#"><a>Council of DRRs</a></Link></li>
                                            <li><Link href="#"><a>Events</a></Link></li>
                                            <li><Link href="#"><a>District Team</a></Link></li>
                                            <li><Link href="#"><a>News</a></Link></li>
                                            <li><Link href="#"><a>Resources</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <div className="footer_widget mb-50 pl_17">
                                    <div className="footer_widget_title mb-30">
                                        <h4 className="footer_title">Causes</h4>
                                    </div>
                                    <div className="footer_links theme-1">
                                        <ul>
                                            <li><Link href="/cause"><a>Promoting Peace</a></Link></li>
                                            <li><Link href="/cause"><a>Fighting Disease</a></Link></li>
                                            <li><Link href="/cause"><a>Providing Clean Water</a></Link></li>
                                            <li><Link href="/cause"><a>Supporting Education</a></Link></li>
                                            <li><Link href="/cause"><a>Saving Mothers and Children</a></Link></li>
                                            <li><Link href="/cause"><a>Growing Local Economies</a></Link></li>
                                            <li><Link href="/cause"><a>Protecting the Environment</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                            <p>Copyright © 2022 All Rights Reserved by <strong><Link href="#"><a>Rotaract Club District 3870 ICT</a></Link></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}