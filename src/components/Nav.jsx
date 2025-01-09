
import { Link } from 'react-router-dom';
import "../App.css"
import { FaSearch } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';

const Nav = () => {

    const navlink = <>
        <li><Link className='lg:mx-10' to="/">HOME</Link></li>
        <li><Link className='lg:mx-10' to="/">ABOUT</Link></li>
        <li><Link className='lg:mx-10' to="/">PAGES</Link></li>
        <li><Link className='lg:mx-10' to="/">SERVICES</Link></li>
        <li> <Link className='lg:mx-10' to="/">TEAM</Link></li>
        <li><Link className='lg:mx-10' to="/">BLOG</Link></li>
        <li><Link className='lg:mx-10' to="/">CONTACT</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 py-6 px-12 fixed z-50">
  <div className="navbar-start w-96 lg:w-[100%]">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-0 lg:w-52 p-2 shadow">
            
      {navlink}
      </ul>
    </div>
    <img src="./logo.png" alt="" srcSet="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal text-lg">
      {navlink}
    </ul>
  </div>
  <div className="lg:navbar-end navbar-start ml-24 lg:ml-0">
    <FaSearch/>
    <CgMenuRight className="lg:ml-16 ml-4" size={25} />
  </div>
</div>
    );
};

export default Nav;

{/* <div className="mx-auto flex h-screen w-full items-center justify-center bg-gray-200 py-20">
    <div className="group relative cursor-pointer py-2">

        <div className="flex items-center justify-between space-x-5 bg-white px-4">
            <a className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4" onClick="">
                Choose Day
            </a>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span>
        </div>

        <div
            className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Sunday
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Monday
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Tuesday
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Wednesday
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Thursday
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Friday
            </a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Saturday
            </a>

        </div>
    </div>
</div> */}