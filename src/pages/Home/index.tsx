import { Navbar, Footer } from "@/components/Layout";
import Hero from "./Hero";

const Home = () => {
 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />

   <Hero />

   <Footer />
  </div>
 );
};

export default Home;
