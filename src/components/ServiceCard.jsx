import { MdArrowOutward } from "react-icons/md";
import "../App.css";

const ServiceCard = () => {
  return (
    <div className="container mx-auto mt-24">
      {/*  */}
      <hr className=" h-[1px] border-t-0 bg-gray-400 dark:bg-gray-200" />

      <div className="flex items-start justify-between mt-24">
        <h1 className="text-4xl uppercase text-black font-medium">
          search engine <br />
          optimization
        </h1>
        <p className="w-[30%]">
          We help brands stand out through aweful, elegant visual design. Our
          design mainly philosophy.
          <br />
          <br />+ Logo Design
          <br />+ Advertisement
          <br />+ Promotion
        </p>
        <div className="">
              <a
                href="#"
                className="relative flex items-center justify-center w-[100px] h-[100px] text-black border border-black rounded-full overflow-hidden p-20 transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-full bg-black scale-0 transition-transform duration-300 group-hover:scale-150"></span>
                <span className="relative z-10 flex items-center text-black group-hover:text-white">
                  Explore <MdArrowOutward size={20} className="ml-2" />
                </span>
              </a>
            </div>
      </div>
      <hr className="my-12 h-[1px] border-t-0 bg-gray-400 dark:bg-gray-200" />
      <div className="flex items-start justify-between mt-24">
        <h1 className="text-4xl uppercase text-black font-medium">
          Email <br />
          Marketing
        </h1>
        <p className="w-[30%]">
          We help brands stand out through aweful, elegant visual design. Our
          design mainly philosophy.
          <br />
          <br />+ Logo Design
          <br />+ Advertisement
          <br />+ Promotion
        </p>
        <div className="">
        <a
                href="#"
                className="relative flex items-center justify-center w-[100px] h-[100px] text-black border border-black rounded-full overflow-hidden p-20 transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-full bg-black scale-0 transition-transform duration-300 group-hover:scale-150"></span>
                <span className="relative z-10 flex items-center text-black group-hover:text-white">
                  Explore <MdArrowOutward size={20} className="ml-2" />
                </span>
              </a>
        </div>
      </div>
      <hr className="my-12 h-[1px] border-t-0 bg-gray-400 dark:bg-gray-200" />
      <div className="flex items-start justify-between mt-24">
        <h1 className="text-4xl uppercase text-black font-medium">
          Content <br />
          Marketing
        </h1>
        <p className="w-[30%]">
          We help brands stand out through aweful, elegant visual design. Our
          design mainly philosophy.
          <br />
          <br />+ Logo Design
          <br />+ Advertisement
          <br />+ Promotion
        </p>
        <div className="">
        <a
                href="#"
                className="relative flex items-center justify-center w-[100px] h-[100px] text-black border border-black rounded-full overflow-hidden p-20 transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-full bg-black scale-0 transition-transform duration-300 group-hover:scale-150"></span>
                <span className="relative z-10 flex items-center text-black group-hover:text-white">
                  Explore <MdArrowOutward size={20} className="ml-2" />
                </span>
              </a>
        </div>
      </div>
      <hr className="my-12 h-[1px] border-t-0 bg-gray-400 dark:bg-gray-200" />
      <div className="flex items-start justify-between mt-24">
        <h1 className="text-4xl uppercase text-black font-medium">
          Social <br />
          Marketing
        </h1>
        <p className="w-[30%]">
          We help brands stand out through aweful, elegant visual design. Our
          design mainly philosophy.
          <br />
          <br />+ Logo Design
          <br />+ Advertisement
          <br />+ Promotion
        </p>
        <div className="">
        <a
                href="#"
                className="relative flex items-center justify-center w-[100px] h-[100px] text-black border border-black rounded-full overflow-hidden p-20 transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-full bg-black scale-0 transition-transform duration-300 group-hover:scale-150"></span>
                <span className="relative z-10 flex items-center text-black group-hover:text-white">
                  Explore <MdArrowOutward size={20} className="ml-2" />
                </span>
              </a>
        </div>
      </div>
      <hr className="my-12 h-[1px] border-t-0 bg-gray-400 dark:bg-gray-200" />

    </div>
  );
};

export default ServiceCard;