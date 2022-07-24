import Header from "../components/layout/header"
import Slider from "../components/layout/slider"
import About from "../components/layout/about"
import Footer from "../components/layout/footer"
import CausesArea from "../components/elements/index/causes_area"
import CensusArea from "../components/elements/index/census_area"
import CtaArea from "../components/elements/index/cta_area"

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <About />
        <CausesArea />
        {/* <Newsfeed /> */}
        <CensusArea />
        <CtaArea />
      </main>
      <Footer />
    </>
  )
}
