import React from 'react'
import Link from 'next/link'
import resourcesRepo from '../../../data/resources.json';

export default function ResourcesArea() {
    return (
        <div className="team_area pt-110 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="section_title mb-50 text-center">
                            <span className="sub_title sub_title_2">Useful downloadables</span>
                            <h3 className="title title_2">Files and links</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {resourcesRepo.data.map((resource) => {
                        return (
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                                <Link href={resource.link}>
                                    <a className="g_btn fca_btn1 to_right2 p-40 rad-50">{resource.name}<span></span></a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
