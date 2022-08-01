import React from 'react'

import causesRepo from '../../../data/causes.json';

export default function CausesArea() {
    return (
        //about feature area start 
        <div className="about_features_area soft-grey-2 pt-120 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="section_title text-center mb-60">
                            <span className="sub_title sub_title_2">Rotary&apos;s Areas of Focus</span>
                            <h3 className="title title_2">Causes</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {causesRepo.data.map((causes) => {
                        return (
                            <div key={causes.id} className="col-xl-3 col-lg-6 col-sm-6">
                                <div className="choose_single_card theme-2 p-rel bg-white mb-30">
                                    <img className="img-fluid mb-15" src={causes.src} />
                                    <div className="choose_card_content">
                                        {causes.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        //about feature area end
    )
}
