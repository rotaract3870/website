import Header from "../components/layout/header"
import Slider from "../components/layout/slider"
import About from "../components/layout/about"
import Footer from "../components/layout/footer"

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <About />
      </main>
      <Footer />
    </>
  )
}
