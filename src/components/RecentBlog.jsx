const RecentBlog = () => {
  return (
    <div className="container mx-auto w-[50%] mt-24">
      <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-10 lg:ml-20 ">
      <p className="text-black mb-4">Recent Blog</p>
            <h1 className="text-4xl font-medium  lg:mb-24 text-black lg:text-6xl md:text-3xl uppercase">
            Read Updated<br /> Journal
            </h1>
            <p className="lg:mb-8 mt-4 md:pl-0  pl-2 pr-2 leading-relaxed lg:ml-40 w-[410px]">
            Read our blog and try to see everything
from every perspective. Our passion lies
in making everything accessible and
aesthetic for everyone.
            </p>
      </div>
    </div>
  );
};

export default RecentBlog;
