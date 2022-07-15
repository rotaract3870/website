import React from 'react'
import Link from 'next/link'
import ResourceLink from './resource_link';

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
                {resourcesRepo.category_data.map((category) => {
                    return (
                        <div key={category.id} className="row mb-80">
                            <div className="col-xxl-12">
                                <div className="section_title">
                                    <h4 className="n_title">{category.name}</h4>
                                </div>
                            </div>
                            {resourcesRepo.data.filter((resource) => resource.category_id === category.id).map((resource) => {
                                return (
                                    <ResourceLink key={resource.name} name={resource.name} link={resource.link} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
