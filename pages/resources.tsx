import Header from "../components/layout/header"
import Breadcrumb from '../components/layout/breadcrumb'
import Footer2 from '../components/layout/footer2'

export default function Resources() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Resources" backgroundImage="url(/img/bg/breadcrum_bg_2.jpg)" />
        <Footer2 />
      </main>
    </>
  )
}
