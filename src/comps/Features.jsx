const Features = () => {
  return (
    <section className="flex container mx-auto flex-col lg:flex-row">
      <div className="flex flex-col  lg:w-1/2 mb-10">
        <h1 className="text-4xl font-bold text-center text-darkBlue mb-8 max-w-lg md:text-left ">
          What's different about Manage?
        </h1>
        <p className="text-darkGrayishBlue text-center lg:max-w-[80%] lg:text-left">
          Manage provides all the functionaliy your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams
        </p>
      </div>
      <div className="flex flex-col space-y-8  lg:w-1/2">
        <div className="flex space-x-6  items-start">
          <span className="bg-brightRed p-2 px-5 rounded-full text-white text-xl">
            01
          </span>
          <div className="">
            <h2 className="text-lg font-bold text-darkBlue mb-4">
              Track company-wide progress
            </h2>
            <p className="text-darkGrayishBlue ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium necessitatibus natus officiis, aspernatur, hic nemo
              reiciendis dolore, eius delectus consectetur esse.
            </p>
          </div>
        </div>
        <div className="flex space-x-6 items-start">
          <span className="bg-brightRed p-2 px-5 rounded-full text-white text-xl">
            02
          </span>
          <div className="">
            <h2 className="text-lg font-bold text-darkBlue mb-4">
              Advance built-in reports
            </h2>
            <p className="text-darkGrayishBlue ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium necessitatibus natus officiis, aspernatur, hic nemo
              reiciendis dolore, eius delectus consectetur esse.
            </p>
          </div>
        </div>
        <div className="flex space-x-6 items-start">
          <span className="bg-brightRed p-2 px-5 rounded-full text-white text-xl ">
            03
          </span>
          <div className="">
            <h2 className="text-lg font-bold text-darkBlue mb-4">
              Eveything you need in one place
            </h2>
            <p className="text-darkGrayishBlue ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium necessitatibus natus officiis, aspernatur, hic nemo
              reiciendis dolore, eius delectus consectetur esse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
