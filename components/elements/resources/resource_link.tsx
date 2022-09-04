import React from 'react'
import Link from 'next/link'

type ResourceLinkProps = {
    name: string,
    link: string
}

export default function ResourceLink({ name, link }: ResourceLinkProps) {
    return (
        <div key={name} className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center mb-25">
            <Link href={link}>
                <a className="d-block g_btn fca_btn1 to_right2 p-40 rad-50">{name}<span></span></a>
            </Link>
        </div>
    )
}