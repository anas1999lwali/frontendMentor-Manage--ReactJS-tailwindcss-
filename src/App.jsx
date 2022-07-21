import Nav from "./comps/Nav";
import Hero from "./comps/Hero";
import Features from "./comps/Features";
import Testimonal from "./comps/Testimonal";
import Footer from "./comps/Footer";
function App() {
  return (
    <div className="h-screen w-screen ">
      <Nav />
      <Hero />
      <Features />
      <Testimonal />

      <div
        id="cta"
        className="flex mx-auto px-8 py-32 space-y-10 flex-col justify-center items-center bg-brightRed lg:p-8 lg:flex-row lg:space-y-0 lg:px-24 lg:justify-between"
      >
        <h1 className="text-white max-w-sm text-5xl font-medium	 text-center leading-[1.3em] lg:max-w-1/2 lg:text-left lg:text-3xl">
          Simplify how your team works today
        </h1>
        <button className="shadow p-3 px-6 pt-2 text-xl text-brightRed bg-white rounded-full baseline font-semibold	 hover:bg-brightRedLight">
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
