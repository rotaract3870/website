import Header from "../components/layout/header"
import Slider from "../components/layout/slider"
import About from "../components/layout/about"

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <About />
      </main>
    </>
  )
}
