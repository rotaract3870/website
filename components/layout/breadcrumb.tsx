import Link from 'next/link'

type BreadcrumbProps = {
    title: string,
    backgroundImage: string
}

export default function Breadcrumb({ title, backgroundImage } : BreadcrumbProps) {
    return (
        <section className="breadcrumb_area breadcrumb_overlay" style={{ "backgroundImage": backgroundImage }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb_section">
                            <ul className="breadcrumb-list volunteer_breadcrumb">
                                <li className="bhas_border"><Link href="/"><a>Home</a></Link></li>
                                <li><span className="active">{title}</span></li>
                            </ul>
                            <div className="breadcrumb_title">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
