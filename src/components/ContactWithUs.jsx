import "../App.css";
import { FaArrowRight } from "react-icons/fa";

const ContactWithUs = () => {
  return (
    <div className="text-center p-48 flex flex-col items-center">
    <h1 className="text-3xl font-light text-black leading-[1] mb-8">
      Have you project in mind?
    </h1>
    <p className="text-[100px] font-light text-black leading-[1] px-24 text-center">
      Let’s make something great together!
    </p>
    <div className="mt-24">
      <a
        href="#"
        className="relative flex items-center justify-center w-[200px] h-[200px] text-black border border-black rounded-full overflow-hidden p-20 transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-full bg-black scale-0 transition-transform duration-300 group-hover:scale-150"></span>
        <span className="text-2xl relative z-10 flex items-center text-black group-hover:text-white">
          Contact With Us <FaArrowRight size={40} className="ml-2" />
        </span>
      </a>
    </div>
  </div>
  
  );
};

export default ContactWithUs;
