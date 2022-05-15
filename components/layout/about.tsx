import Link from "next/link";

export default function About() {
  return (
    // about area start
    <section className="about_area about_area_2 pt-120 pb-100">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about_wrapper">
              <div className="section_title">
                <span className="sub_title sub_title_2">About Us</span>
                <h3 className="title title_2">
                  Rotaract Clubs of Rotary International District 3870,
                  Philippines
                </h3>
              </div>
              <p className="mb-40 n_mb20">
                Rotaract brings together people ages 18 and older to exchange
                ideas with leaders in the community, develop leadership and
                professional skills, and have fun through service. In
                communities worldwide, Rotary and Rotaract members work side by
                side to take action through service. From big cities to rural
                villages, Rotaract is changing communities like yours.
              </p>
              <div className="about_summary">
                <p>
                  Served <span className="theme-1">Hundreds</span> of Projects
                  in{" "}
                  <span className="theme-4">
                    Bukidnon, Camiguin, Lanao del Norte, Lanao del Sur,
                    Maguindanao, Misamis Oriental, North Cotabato, and Sultan
                    Kudarat
                  </span>
                  , <br />
                  Benefiting Over <span className="theme-2">
                    Thousands
                  </span>{" "}
                  People.
                </p>
              </div>
              <Link href="/about">
                <a className="g_btn trans_btn rad-50 p-45">
                  Learn More <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about_img_wrapper_2 w_img border_radius10 ml-100">
              <Link href="/about">
                <a>
                  <img src="/img/about/about2_1_big.jpg" alt="img" />
                </a>
              </Link>
              <div className="about_champ_card about_abs2">
                <i className="flaticon-creativity"></i>
                <h3 className="abs_numb">≈40</h3>
                <span>Years in Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
