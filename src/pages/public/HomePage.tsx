import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Team from '@/sections/Team';
import Footer from '@/sections/Footer';
// import { PoolTraining } from '../sections/PoolTraining/PoolTraining'
// import { Trips } from '../sections/Trips/Trips'
// import { Contact } from '../sections/Contact/Contact'

export const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Team />
      {/* <PoolTraining /> */}
      {/* <Trips /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  </>
);
