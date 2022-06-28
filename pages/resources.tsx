import Header from "../components/layout/header"
import Breadcrumb from '../components/layout/breadcrumb'
import Footer2 from '../components/layout/footer2'
import ResourcesArea from "../components/elements/resources/resources_area"

export default function Resources() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Resources" backgroundImage="url(/img/bg/breadcrum_bg_2.jpg)" />
        <ResourcesArea />
        <Footer2 />
      </main>
    </>
  )
}
