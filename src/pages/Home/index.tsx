import { Navbar, Footer } from "@/shared/ui";
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