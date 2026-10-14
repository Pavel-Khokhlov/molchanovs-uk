import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
// import { PoolTraining } from '../sections/PoolTraining/PoolTraining'
// import { Trips } from '../sections/Trips/Trips'
// import { Contact } from '../sections/Contact/Contact'

export const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      {/* <PoolTraining /> */}
      {/* <Trips /> */}
      {/* <Contact /> */}
    </main>
  </>
);
