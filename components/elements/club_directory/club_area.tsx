import React from 'react'
import Link from 'next/link'
import ClubCard from './club_card';
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
                        return <ClubCard key={club.club_name} club={club.club_name} president={club.president_name} />
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
                        return <ClubCard key={club.club_name} club={club.club_name} president={club.president_name} />
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
                        return <ClubCard key={club.club_name} club={club.club_name} president={club.president_name} />
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
                        return <ClubCard key={club.club_name} club={club.club_name} president={club.president_name} />
                    })}
                </div>
            </div>
        </div>
    )
}
