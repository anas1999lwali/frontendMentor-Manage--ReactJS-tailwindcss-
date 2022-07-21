const Hero = () => {
  return (
    <div className="container mx-auto p-2 flex flex-col-reverse  mb-12 lg:flex-row mt-10 ">
      <div className="flex flex-col space-y-12 mb-32 lg:pl-16 lg:w-1/2 ">
        <h1 className="font-bold text-5xl text-darkBlue max-w-lg text-center lg:text-5xl lg:text-left">
          Bring everyone together to build better products.
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue lg:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>

        <div className="flex justify-center lg:justify-start">
          <button className="p-3 px-2 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex  justify-center lg:w-1/2 ">
        <img src="\assets\illustration-intro.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
