import Header from "../components/layout/header"
import Slider from "../components/layout/slider"
import About from "../components/layout/about"
import Footer from "../components/layout/footer"
import Newsfeed from "../components/layout/newsfeed"

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <About />
        <Newsfeed />
      </main>
      <Footer />
    </>
  )
}
