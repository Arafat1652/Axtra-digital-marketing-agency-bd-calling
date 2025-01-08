const RecentBlog = () => {
  return (
    <div className="container mx-auto w-[50%] mt-24">
      <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-10 ml-20 ">
        <p className="text-gray-900 uppercase mt-24 mb-4">Recent Blog</p>
        <h1 className="text-6xl font-medium mb-10 uppercase">
          Read Updated
          <br /> Journal
        </h1>
        <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-900 ml-40 w-[410px]">
          Read our blog and try to see everything from every perspective. Our
          passion lies in making everything accessible and aesthetic for
          everyone.
        </p>
      </div>
    </div>
  );
};

export default RecentBlog;
