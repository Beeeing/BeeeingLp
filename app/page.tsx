import HeroSlider from "./components/HeroSlider"
import Services from "./components/Services"
import FeatureCarousel from "./components/FeatureCarousel"
import WearYourStory from "./components/WearYourStory"
import PortfolioGrid from "./components/PortfolioGrid"
import Testimonials from "./components/Testimonials"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <FeatureCarousel />
      <WearYourStory />
      <PortfolioGrid />
      <Testimonials />
    </>
  )
}

