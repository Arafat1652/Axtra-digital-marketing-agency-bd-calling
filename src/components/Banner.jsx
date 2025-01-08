import React from 'react';
import { GoHorizontalRule } from 'react-icons/go';
import '../App.css'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url('https://img.freepik.com/free-vector/crystal-textured-background-illustration_53876-81310.jpg?t=st=1736222539~exp=1736226139~hmac=3a0d4eea83aa811f66253faa0d742468e248bfcd933220a18aff57a1cdb191cc&w=996')`}} >

        <div className='container mx-auto pt-40'>
            <h3 className='text-2xl font-bold text-black flex gap-8 items-center p-0'> DIGITAL <hr className='border-black border-[1px] w-20'/></h3>
           <div className=''>
           <h1 className='text-[250px] font-bold text-black leading-[0.8]'> MARK</h1>
           {/* <video className='w-[20%]' controls src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4"></video> */}
           </div>
           <div className='flex justify-between items-center p-0'>
            <p className='w-[280px]'>Static and dynamic secure code review can prevent a day before your product is even realsed.We can integrate your dev environment.</p>
            <h1 className='text-[250px] font-bold text-black leading-[0.8] z-10'> ETING</h1>
           </div>
        </div>
            <div className=' flex justify-end -translate-y-8'>
                <img className='h-[300px] w-[1000px] z-0' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b1728b9b.jpg&w=3840&q=75" alt="" />
            </div>
        </div>
    );
};

export default Banner;