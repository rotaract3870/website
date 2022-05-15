import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

export default function Slider() {
  return (
    <section className="hero_area fix">
      <div className="swiper-container slider-active">
        <div className="swiper-wrapper">
          <Swiper
            // install Swiper modules
            spaceBetween={2}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
            pagination={{ clickable: true }}
          // navigation={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className="hero_wrapper hero_height p-rel d-flex align-items-center justify-content-center">
              <div
                className="slide-bg"
                style={{ background: "url(/img/slider/hero_bg2_1.jpg)" }}
              ></div>
              {/* <div
                className="img_center"
                data-animation="fadeInUp"
                data-delay="0.9s"
              >
                <img src="/img/slider/hero_shape.png" alt="img" />
              </div> */}
              <div className="hero_single p-rel">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12 text-center">
                      <div className="hero_content">
                        {/* <div
                          className="hero_meta"
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          <Link href="/cause">
                            <a>Education</a>
                          </Link>
                          <Link href="/cause">
                            <a>Water</a>
                          </Link>
                          <Link href="/cause">
                            <a>Medical</a>
                          </Link>
                        </div> */}
                        <h3
                          className="hero_title"
                          data-animation="fadeInUp"
                          data-delay="0.5s"
                        >
                          Protecting the Environment
                        </h3>
                        <p data-animation="fadeInUp" data-delay="0.7s">
                          We are committed to supporting activities that strengthen the conservation and protection of natural resources, advance ecological sustainability, and foster harmony between communities and the environment.
                        </p>
                        <div
                          className="hero_buttons mt-35"
                          data-animation="fadeInUp"
                          data-delay="0.9s"
                        >
                          <Link href="/cause">
                            <a className="g_btn theme1_bg to_rightout_heading rad-30 mr-20">
                              Our Causes<span></span>
                            </a>
                          </Link>
                          <Link href="/about">
                            <a className="g_btn heading_bg  to_right1 rad-30">
                              Learn More<span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hero_wrapper hero_height p-rel d-flex align-items-center justify-content-center">
              <div
                className="slide-bg"
                style={{ background: "url(/img/slider/hero_bg2_2.jpg)" }}
              ></div>
              {/* <div
                className="img_center wow fadeInUp"
                data-animation="fadeInUp"
                data-delay="0.9s"
              >
                <img src="/img/slider/hero_shape.png" alt="img" />
              </div> */}
              <div className="hero_single p-rel">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12 text-center">
                      <div className="hero_content">
                        {/* <div
                          className="hero_meta wow fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          <Link href="/cause">
                            <a>Education</a>
                          </Link>
                          <Link href="/cause">
                            <a>Water</a>
                          </Link>
                          <Link href="/cause">
                            <a>Medical</a>
                          </Link>
                        </div> */}
                        <h3
                          className="hero_title wow fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="0.5s"
                        >
                          Promoting Peace
                        </h3>
                        <p
                          className="wow fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="0.7s"
                        >
                          As a humanitarian organization, peace is a cornerstone of our mission. We believe when people work to create peace in their communities, that change can have a global effect.
                        </p>
                        <div
                          className="hero_buttons mt-35 wow fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="0.9s"
                        >
                          <Link href="/cause">
                            <a className="g_btn theme1_bg to_rightout_heading rad-30 mr-20">
                              Our Causes<span></span>
                            </a>
                          </Link>
                          <Link href="/about">
                            <a className="g_btn heading_bg  to_right1 rad-30">
                              Learn More<span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hero_wrapper hero_height p-rel d-flex align-items-center justify-content-center">
              <div
                className="slide-bg"
                style={{ background: "url(/img/slider/hero_bg2_3.jpg)" }}
              ></div>
              {/* <div
                className="img_center wow fadeInUp"
                data-animation="fadeInUp"
                data-delay="0.9s"
              >
                <img src="/img/slider/hero_shape.png" alt="img" />
              </div> */}
              <div className="hero_single p-rel">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12 text-center">
                      <div className="hero_content">
                        {/* <div
                          className="hero_meta wow fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="0.3s"
                        >
                          <Link href="/cause">
                            <a>Education</a>
                          </Link>
                          <Link href="/cause">
                            <a>Water</a>
                          </Link>
                          <Link href="/cause">
                            <a>Medical</a>
                          </Link>
                        </div> */}
                        <h3
                          className="hero_title wow fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="0.5s"
                        >
                          Fellowship Through Service
                        </h3>
                        <p
                          className="wow fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="0.7s"
                        >
                          Forge new relationships with people by serving the community. Service becomes the avenue as to which people are able to meet others who act and think like them.
                        </p>
                        <div
                          className="hero_buttons mt-35 wow fadeInUp"
                          data-animation="fadeInUp"
                          data-delay="0.9s"
                        >
                          <Link href="/cause">
                            <a className="g_btn theme1_bg to_rightout_heading rad-30 mr-20">
                              Our Causes<span></span>
                            </a>
                          </Link>
                          <Link href="/about">
                            <a className="g_btn heading_bg  to_right1 rad-30">
                              Learn More<span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
