import Header from "../components/layout/header"
import Breadcrumb from '../components/elements/club_directory/breadcrumb'
import ClubArea from '../components/elements/club_directory/club_area'
import Footer2 from '../components/layout/footer2'

export default function About() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb />
        <ClubArea />
        <Footer2 />
      </main>
    </>
  )
}
