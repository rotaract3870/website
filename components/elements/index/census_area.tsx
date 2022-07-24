import React from 'react'

export default function CensusArea() {
    return (
        <div className="nfeed_area pt-105 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="section_title mb-45">
                            <span className="sub_title">People are helping the cause</span>
                            <h3 className="title">Census</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                        <div className="choose_single_card p-rel pt-50">
                            <div className="choose_abs theme-4">
                                <i></i>
                            </div>
                            <div className="h2 mt-25" style={{ color: "#2984ff" }}>600</div>
                            <div>
                                Members in the District
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                        <div className="choose_single_card p-rel pt-50">
                            <div className="choose_abs theme-5">
                                <i></i>
                            </div>
                            <div className="h2 mt-25" style={{ color: "#5fb35b" }}>28</div>
                            <div>
                                Clubs in the District
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                        <div className="choose_single_card p-rel pt-50">
                            <div className="choose_abs theme-2">
                                <i></i>
                            </div>
                            <div className="h2 mt-25" style={{ color: "#65c9bb" }}>4</div>
                            <div>
                                Zones in the District
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}