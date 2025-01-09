import '../App.css'

const Footer = () => {
    return (
        <footer className="py-6 bg-[#121212] text-gray-50 mt-24">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
		<div className="grid lg:grid-cols-3">
			<div className="pb-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-12 h-12 rounded-full">
						<img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsite-logo-white-2.c8e48a63.png&w=256&q=75" alt="" srcSet="" />
					</div>
                    <br />
				</a>
                    <p className='lg:w-[70%]'>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
			</div>
			<div className=" text-center">
				<h3 className='border border-gray-400 w-40 text-center p-8'>FACEBOOK</h3>
				<h3 className='border border-gray-400 w-40 text-center p-8'>TWITTER</h3>
				<h3 className='border border-gray-400 w-40 text-center p-8'>LINKEDIN</h3>
				<h3 className='border border-gray-400 w-40 text-center p-8'>INSTAGRAM</h3>
			</div>
			<div className="flex gap-4 mt-4 lg:gap-8 lg:-translate-x-40">
				<h1 className='lg:text-9xl text-6xl bg-gradient-to-r from-primary via-[#c9f31d] to-secondary text-transparent bg-clip-text animate-gradient bg-300%'>LET'S {' '}</h1>
				<h1 className='lg:text-9xl text-6xl bg-gradient-to-r from-primary via-[#f9d371] to-secondary text-transparent bg-clip-text animate-gradient bg-300%'>{' '} TALK</h1>
               
			</div>
		</div>
		<div className="grid justify-center mt-24 p-10 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2025 All rights reserved</span>
				<a rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center rounded-full">
					ABOUT US
				</a>
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center rounded-full">
					CONTACT
				</a>
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center rounded-full">
					CAREER
				</a>
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center rounded-full">
					FAQS
				</a>
			</div>
		</div>
	</div>
</footer>
    );
};

export default Footer;