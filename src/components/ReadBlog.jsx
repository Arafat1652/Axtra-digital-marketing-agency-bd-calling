import { MdArrowOutward } from "react-icons/md";

const ReadBlog = () => {
  return (
    <div className="">
      {/* <!-- https://gist.github.com/goodreds/3d044027175954984fb96c7407a955ab --> */}

      {/* <!-- Container --> */}
      <div className="lg:flex">
        {/* <!-- Text Column --> */}
        <div className="relative flex flex-col items-center mx-auto">
       <div className="bg-white border-4 p-8 relative z-10 top-24">
          <p>UI Design . 02 May 2019</p>
          <h3 className="text-2xl">
            How to bring fold to your <br /> startup company with <br />
            Axtra
          </h3>
          <hr className="mt-8" />
          <button className="flex mt-6">
            Read More <MdArrowOutward size={25} className="ml-2" />
          </button>
        </div>
        <div className="w-full">
          <img
            className=""
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8079d114.jpg&w=750&q=75"
            alt="Winding mountain road"
          />
        </div>
       </div>
       <div className="relative flex flex-col items-center mx-auto">
       <div className="bg-white border-4 p-8 relative z-10 top-24">
          <p>UI Design . 02 May 2019</p>
          <h3 className="text-2xl">
            How to manage a talented <br /> and succesful design <br />
            team
          </h3>
          <hr className="mt-8" />
          <button className="flex mt-6">
            Read More <MdArrowOutward size={25} className="ml-2" />
          </button>
        </div>
        <div className="w-full">
          <img
            className=""
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c0b84348.jpg&w=750&q=75"
            alt="Winding mountain road"
          />
        </div>
       </div>
        {/* <!-- Close Text Column --> */}
        {/* <!-- Image Column --> */}
        {/* <!-- Close Image Column --> */}
      </div>
    </div>
  );
};

export default ReadBlog;
