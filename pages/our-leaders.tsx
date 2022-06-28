import Header from "../components/layout/header"
import Breadcrumb from '../components/layout/breadcrumb'
import Footer2 from '../components/layout/footer2'
import EmptyArea from "../components/elements/shared/empty_area"

export default function OurLeaders() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Our Leaders" backgroundImage="url(/img/bg/breadcrum_bg_2.jpg)" />
        <EmptyArea />
        <Footer2 />
      </main>
    </>
  )
}
