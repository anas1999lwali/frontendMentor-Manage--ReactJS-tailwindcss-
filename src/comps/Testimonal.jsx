import { useState, useEffect } from "react";
import data from "./testDB";

const Testimonal = () => {
  const [counter, setCounter] = useState(0);
  const [testimonail, setTestimonal] = useState(data);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter === data.length - 1 ? 0 : counter + 1);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex  flex-col justify-center max-w-6xl px-5 mx-auto mt-32 space-y-12 lg:justify-start">
      <h1 className="text-5xl font-bold text-center text-darkBlue mb-16 ">
        What they've said
      </h1>

      <div className="flex flex-col space-y-12 justify-between items-center lg:flex-row lg:space-y-0 lg:space-x-8 lg:items-start ">
        <div className=" flex flex-col p-4 items-center space-y-4 bg-veryLightGray rounded-lg lg:w-1/3 lg:hidden">
          <img src={data[counter].img} className="-mt-12" alt="" width={70} />
          <span className="text-darkBlue font-bold">{data[counter].name}</span>
          <p className="max-w-[20rem] text-center font-semibold text-xl text-darkGrayishBlue">
            {data[counter].testimonal}
          </p>
        </div>

        {data.map((elem) => (
          <div className="hidden  p-6 flex-col items-center space-y-4 bg-veryLightGray rounded-lg lg:w-1/4 lg:flex">
            <img src={elem.img} className="-mt-8" alt="" width={70} />
            <span className="text-darkBlue font-bold">{elem.name}</span>
            <p className="max-w-xl text-justify font-semibold text-lg text-darkGrayishBlue">
              {elem.testimonal}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 lg:hidden">
        {testimonail.map((elem) => (
          <button
            className={`border-solid ${
              counter === elem.id ? "bg-brightRed" : ""
            } border-brightRed border-2  w-2.5 h-2.5 rounded-full hover:bg-brightRed`}
            onClick={() => setCounter(elem.id)}
          ></button>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="mb-12 shadow p-3 px-6 pt-2 text-xl text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Testimonal;
