import Header from "../components/layout/header"
import Breadcrumb from '../components/layout/breadcrumb'
import ClubArea from '../components/elements/club_directory/club_area'
import Footer2 from '../components/layout/footer2'

export default function About() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Club Directory" backgroundImage="url(/img/bg/breadcrum_bg_2.jpg)" />
        <ClubArea />
        <Footer2 />
      </main>
    </>
  )
}
