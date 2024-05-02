import HeroComponent from "./components/heroComponent/heroComponent";
import AboutUsComponent from "./components/aboutUsComponent/aboutUsComponent";
import Timeline from "./components/timeline/timeline";
import Footer from "./components/footer/footer";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Growy</title>
      </Head>
    <HeroComponent />
    <AboutUsComponent />
    <Timeline/>
    <Footer />
    </div>
  );
}
