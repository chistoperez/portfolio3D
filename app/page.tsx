import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="relative z-0 bg-primary">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </main>
  );
}
