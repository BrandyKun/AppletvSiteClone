import Container from "./components/container";
import { Header } from "./components/header";
import { Hero } from "./components/section/hero";
import { Usps } from "./components/section/usps";
import { VideoCarousel } from "./components/section/videoCarousel";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
       <div className="bg-background">
         <Hero />
         <Usps />
       </div>
        <VideoCarousel />
      </main>
    </>
  );
}

export default App;
