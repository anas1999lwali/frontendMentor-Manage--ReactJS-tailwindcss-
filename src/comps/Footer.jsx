const Footer = () => {
  return (
    <div className="flex flex-col space-y-16 mx-auto items-center py-16 bg-veryDarkBlue lg:flex-row-reverse lg:space-y-0 lg:justify-evenly lg:items-start lg:py-8 ">
      {/* search-cnt */}
      <div className="flex justify-start space-x-3 w-[80%] lg:w-1/4">
        <input
          type=""
          className="px-4 flex-1 rounded-full bg-white focus:outline-none"
          placeholder="Update in your inbox"
        />
        <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
          Go
        </button>
      </div>
      {/* nav */}
      <div className="flex text-white text-xl space-x-36 ">
        <div className="flex flex-col space-y-4">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Products</a>
          <a href="">About US</a>
        </div>
        <div className="flex flex-col space-y-4">
          <a href="">Careers</a>
          <a href="">Community</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
      {/* social media linsk */}
      <div className="flex flex-col space-y-16  lg:items-center lg:m-0 lg:p-0  lg:w-1/4">
        <div className="flex space-x-12 lg:space-x-4 mx-auto">
          <a href="#">
            <img
              src="\assets\icon-facebook.svg"
              className=" w-[45px] lg:w-[30px] "
              alt=""
            />
          </a>
          <a href="">
            <img
              src="\assets\icon-youtube.svg"
              className=" w-[45px] lg:w-[30px] "
              alt=""
            />
          </a>
          <a href="">
            <img
              src="\assets\icon-twitter.svg"
              className=" w-[45px] lg:w-[30px] "
              alt=""
            />
          </a>
          <a href="">
            <img
              src="\assets\icon-pinterest.svg"
              className=" w-[45px] lg:w-[30px] "
              alt=""
            />
          </a>
          <a href="">
            <img
              src="\assets\icon-instagram.svg"
              alt=""
              className=" w-[45px] lg:w-[30px] "
            />
          </a>
        </div>
        <img src="\assets\logo.svg" className="w-[200px] mx-auto " alt="" />
      </div>
    </div>
  );
};

export default Footer;
