import "../App.css";
import "./module.css";

const Stats = () => {
  return (
    <div className="pt-10 mt-24 container mx-auto hidden lg:grid">
      <p className="text-gray-900 uppercase font-semibold">
        why <br /> choose us
      </p>
      <div className="flex items-center justify-between ">
        <div className="mt-2 flex flex-wrap justify-center items-center gap-40 w-[40%]">
          {/* <!-- Comments --> */}
          <a
            href="#"
            className="flex h-20 w-40 flex-col items-center justify-center transition-colors duration-100 ease-in-out"
          >
            <div className="flex flex-row items-center justify-center">
              <span className="font-normal text-black text-8xl"> 25k </span>
            </div>

            <div className="mt-2 text-lg text-[#555555] mr-16">
              Project
              <br />
              completed
            </div>
          </a>
          <a
            href="#"
            className="flex h-20 w-40 flex-col items-center justify-center transition-colors duration-100 ease-in-out"
          >
            <div className="flex flex-row items-center justify-center">
              <span className="font-normal text-black text-8xl"> 8k </span>
            </div>

            <div className="mt-2 text-lg text-[#555555]">
              Happy
              <br />
              customers
            </div>
          </a>
          <a
            href="#"
            className="flex h-20 w-40 flex-col items-center justify-center transition-colors duration-100 ease-in-out"
          >
            <div className="flex flex-row items-center justify-center">
              <span className="font-normal text-black text-8xl"> 15 </span>
            </div>

            <div className="mt-2 text-lg text-[#555555]">
            Years
              <br />
              experiences
            </div>
          </a>
          <a
            href="#"
            className="flex h-20 w-40 flex-col items-center justify-center transition-colors duration-100 ease-in-out"
          >
            <div className="flex flex-row items-center justify-center">
              <span className="font-normal text-black text-8xl"> 98 </span>
            </div>

            <div className="mt-2 text-lg text-[#555555]">
            Awards
              <br />
              achievement
            </div>
          </a>
        </div>
        <div>
          {/* right circle side */}
          <img
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcounter-3.40d27be6.png&w=1920&q=75"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
