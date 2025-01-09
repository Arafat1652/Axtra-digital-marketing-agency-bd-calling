import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation,Autoplay,Pagination } from 'swiper/modules';
import "../App.css"

const Fetaured = () => {
    return (
        <div className='max-w-[100%] mx-auto lg:mt-24 bg-[#121212] lg:p-24'>  

<Swiper
        cssMode={true}
        navigation={true}
        modules={[Pagination,Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{
            delay: 3000,
        }}
        pagination={{
            clickable: true,
          }}
        loop={true}
      >
    <SwiperSlide>
  <div className="relative px-10 lg:px-0">
        <p className='text-white uppercase'>Featured <br /> Work</p>
    <div className="hero h-[100vh] bg-cover object-center overflow-hidden lg:flex justify-around">
        <div className='mr-60 lg:mr-0'>

        <h2 className='text-white lg:ml-96 '><span className='text-5xl'> 1 /</span>4</h2>
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1]'>
            BENJON
        </h1> 
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1] lg:translate-x-44
         z-10 translate-x-10'> WEBSITE </h1>
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1]
        '> 2012 </h1>
        </div>
      
      <img className='lg:-translate-x-24 z-[-1]' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.fa8e208f.jpg&w=1200&q=75" alt=""  />
    </div>
  </div>
</SwiperSlide>
    <SwiperSlide>
  <div className="relative px-10 lg:px-0">
        <p className='text-white uppercase'>Featured <br /> Work</p>
    <div className="hero h-[100vh] bg-cover object-center overflow-hidden lg:flex justify-around">
        <div className='mr-60 lg:mr-0'>

        <h2 className='text-white lg:ml-96 '><span className='text-5xl'> 2 /</span>4</h2>
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1]'>
            BENJON
        </h1> 
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1] lg:translate-x-44
         z-10 translate-x-10'> WEBSITE </h1>
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1]
        '> 2012 </h1>
        </div>
      
      <img className='lg:-translate-x-24 z-[-1]' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.23156821.jpg&w=1200&q=75" alt=""  />
    </div>
  </div>
</SwiperSlide>
    <SwiperSlide>
  <div className="relative px-10 lg:px-0">
        <p className='text-white uppercase'>Featured <br /> Work</p>
    <div className="hero h-[100vh] bg-cover object-center overflow-hidden lg:flex justify-around">
        <div className='mr-60 lg:mr-0'>

        <h2 className='text-white lg:ml-96 '><span className='text-5xl'> 3 /</span>4</h2>
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1]'>
            BENJON
        </h1> 
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1] lg:translate-x-44
         z-10 translate-x-10'> WEBSITE </h1>
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1]
        '> 2012 </h1>
        </div>
      
      <img className='lg:-translate-x-24 z-[-1]' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.2d3fe8ed.jpg&w=1200&q=75" alt=""  />
    </div>
  </div>
</SwiperSlide>
    <SwiperSlide>
  <div className="relative px-10 lg:px-0">
        <p className='text-white uppercase'>Featured <br /> Work</p>
    <div className="hero h-[100vh] bg-cover object-center overflow-hidden lg:flex justify-around">
        <div className='mr-60 lg:mr-0'>

        <h2 className='text-white lg:ml-96 '><span className='text-5xl'> 4 /</span>4</h2>
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1]'>
            BENJON
        </h1> 
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1] lg:translate-x-44
         z-10 translate-x-10'> WEBSITE </h1>
        <h1 className='text-white lg:text-[180px] text-5xl font-medium leading-[1]
        '> 2012 </h1>
        </div>
      
      <img className='lg:-translate-x-24 z-[-1]' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.ce321823.jpg&w=1200&q=75" alt=""  />
    </div>
  </div>
</SwiperSlide>



      </Swiper>
    </div>
    );
};

export default Fetaured;

// https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.23156821.jpg&w=1200&q=75
// https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.2d3fe8ed.jpg&w=1200&q=75
// https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.ce321823.jpg&w=1200&q=75