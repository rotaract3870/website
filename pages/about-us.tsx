import Header from "../components/layout/header"
import Breadcrumb from '../components/layout/breadcrumb'
import Footer2 from '../components/layout/footer2'
import AboutUsArea from '../components/elements/about_us/about_us_area'

export default function AboutUs() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="About Us" backgroundImage="url(/img/bg/breadcrum_bg_2.jpg)" />
        <AboutUsArea />
        <Footer2 />
      </main>
    </>
  )
}
