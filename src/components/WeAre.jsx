import { MdArrowOutward } from "react-icons/md";
import "../App.css";
const WeAre = () => {
  return (
    <div className="bg-[#121212]">
      <section className="body-font py-24">
        <div className="flex flex-row-reverse md:px-24 md:py-10 md:flex-row ">
          <div
            style={{
              backgroundImage: `url(https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75)`,
            }}
            className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6 h-[800px]  bg-no-repeat bg-fixed"
          ></div>

          <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-10 ml-20">
            <p className="text-white">WHO WE ARE</p>
            <h1 className="text-2xl leading-9 font-medium tracking-tight mb-24 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal uppercase">
              We are leading <br /> digital marketing <br /> agency.
            </h1>
            <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300 ml-40 w-[410px]">
              We’re a team of strategic mdigital marketing working globally with
              largest brands, We believe that progress only happens when you
              refused to play things safe. We combine ideas and behaviors, and
              insights with design, technological data to produce brand
              experiences that customers love our services.
            </p>
            <div className="flex justify-center ml-40 mt-16">
              <a
                href="#"
                className="relative flex items-center justify-center w-[100px] h-[100px] text-white border border-white rounded-full overflow-hidden p-20 transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-full bg-white scale-0 transition-transform duration-300 group-hover:scale-150"></span>
                <span className="relative z-10 flex items-center text-white group-hover:text-black">
                  Explore <MdArrowOutward size={20} className="ml-2" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeAre;

//   <div className="bg-black">
//   <section className="body-font py-24">
//     <div className="flex flex-row-reverse md:px-24 md:py-10 md:flex-row">
//       {/* Parallax Background */}
//       <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6 bg-center mr-24">
//         <Parallax
//           bgImage={
//             "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=640&q=75"
//           }
//           strength={1000}
//           bgImageStyle={{
//             // position: "fixed", // Keeps the image fixed // Adjusts for centering
//             objectFit: "cover", // Ensures the image covers the container
//           }}

//         >
//           <div style={{ height: "800px", width: "800px"}}></div>
//         </Parallax>
//       </div>

//       {/* Content Section */}
//       <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//         <p className="text-white">WHO WE ARE</p>
//         <h1 className="text-2xl leading-9 font-medium tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal uppercase">
//           We are leading <br /> digital marketing <br /> agency.
//         </h1>
//         <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed dark:text-gray-300">
//           We’re a team of strategic digital marketers working globally with
//           the largest brands. We believe that progress only happens when
//           you refuse to play it safe. We combine ideas, behaviors, and
//           insights with design and technological data to produce brand
//           experiences that customers love.
//         </p>
//         <div className="flex justify-center">
//           <a
//             href="#"
//             className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg"
//           >
//             Start Exploring
//           </a>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>
