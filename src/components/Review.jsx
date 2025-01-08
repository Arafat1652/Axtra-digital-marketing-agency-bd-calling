import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "../App.css";

const Review = () => {
  return (
    <div className="mt-80">
      <div
        style={{
          backgroundImage:
            "url(https://axtra-next-agency.vercel.app/assets/imgs/testimonial/3/bg.png)",
        }}
      >
        <div className="w-[40%] items-center mx-auto">
          <Swiper
            cssMode={true}
            navigation={true}
            // pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
            loop={true}
          >
            <SwiperSlide>
              <div className="">
                <div className=" flex justify-center items-center">
                  <section className="">
                    <div className=" max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                      <figure className="max-w-screen-md mx-auto">
                        <svg
                          className="h-12 mx-auto mb-3 text-black"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <blockquote>
                          <p className="text-xl font-medium text-gray-900 md:text-2x">
                            When we talk about Alts, we do not mean a typical
                            business partner, but rather a team that
                            collaborates with us daily, always there for us when
                            we encounter difficulties and celebrate
                            achievements. We see in Alts our best ally for
                            success!
                          </p>
                        </blockquote>
                        <footer className="flex items-center justify-center gap-3 mt-5">
                          <a
                            href=""
                            target="_blank"
                            className="inline-block font-bold tracking-tight"
                          >
                            <p className="text-2xl">MARIA D. HALK</p>
                            <p className="font-normal text-black/60 text-sm">
                              MANAGING DIRECTOR
                            </p>
                          </a>
                        </footer>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="">
                <div className=" flex justify-center items-center">
                  <section className="">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                      <figure className="max-w-screen-md mx-auto">
                        <svg
                          className="h-12 mx-auto mb-3 text-black"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <blockquote>
                          <p className="text-xl font-medium text-gray-900 md:text-2x">
                            When we talk about Alts, we do not mean a typical
                            business partner, but rather a team that
                            collaborates with us daily, always there for us when
                            we encounter difficulties and celebrate
                            achievements. We see in Alts our best ally for
                            success!
                          </p>
                        </blockquote>
                        <footer className="flex items-center justify-center gap-3 mt-5">
                          <a
                            href=""
                            target="_blank"
                            className="inline-block text-lg font-bold tracking-tight"
                          >
                            <p className="">MARIA D. HALK</p>
                            <p className="font-medium text-black/60">
                              MANAGING DIRECTOR
                            </p>
                          </a>
                        </footer>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        <div className="absolute w-[20%]">
            <img className="absolute -top-[650px] -left-[140px]" src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5fcd9521.jpg&w=384&q=75" alt="laptop girl" srcSet="" />
            <img className="absolute -top-[600px] -right-[300px]" src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.44563823.jpg&w=256&q=75" alt="sofa girl" srcSet="" />
            <img className="absolute -top-80 -left-96" src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.82004ae1.jpg&w=256&q=75" alt="men laptop" srcSet="" />
            <img className="absolute -top-40 -left-96" src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.632d09dc.jpg&w=750&q=75" alt="girl talking" srcSet="" />
            <img className="absolute -top-[320px] -right-[700px]" src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.83e5f14f.jpg&w=640&q=75" alt="girlsimile" srcSet="" />
            <img className=" translate-x-[650px] -translate-y-24" src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.faeeace1.jpg&w=384&q=75" alt="group discus" srcSet="" />
        </div>
        </div>


      </div>
    </div>
  );
};

export default Review;
