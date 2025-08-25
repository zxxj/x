import Header from './components/header';
import { Router } from './router';
import Silk from './components/silk';

const App = () => {
  return (
    <div className=" relative w-screen h-screen overflow-hidden">
      <Silk
        speed={10}
        scale={1}
        color="#1c1c1c"
        noiseIntensity={1.5}
        rotation={0}
      />

      <Header />

      <div className="mt-[90px] mx-5 2xl:mx-28 lg:mx-20 h-full">
        <Router />
      </div>
    </div>
  );
};

export default App;
