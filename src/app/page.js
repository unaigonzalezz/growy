
import HeroComponent from "./components/heroComponent/heroComponent";
import AboutUsComponent from "./components/aboutUsComponent/aboutUsComponent";
import Timeline from "./components/timeline/timeline";
import Footer from "./components/footer/footer";
import NextTopLoader from 'nextjs-toploader';
 
export const metadata  = {
  title: 'Growy',
}

export default function Home() {
  return (
    <div>
      <NextTopLoader />
      <HeroComponent />
      <AboutUsComponent />
      <Timeline/>
      <Footer />
    </div>
  );
}
