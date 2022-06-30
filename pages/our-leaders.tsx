import Header from "../components/layout/header"
import Breadcrumb from '../components/layout/breadcrumb'
import Footer2 from '../components/layout/footer2'
import RepresentativeArea from "../components/elements/our_leaders/representative_area"

export default function OurLeaders() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Our Leaders" backgroundImage="url(/img/bg/breadcrum_bg_2.jpg)" />
        <RepresentativeArea />
        <Footer2 />
      </main>
    </>
  )
}
