function Hero() {

  return (
    <section className="px-2 pt-32 pb-20 bg-gray-900 md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1
          className="text-4xl font-extrabold tracking-tight text-left text-white sm:text-5xl md:text-6xl md:text-center">
            <span className="block">Get The <span
              className="block mt-1 text-purple-500 lg:inline lg:mt-0">Right Job</span> You Deserve</span>
        </h1>
        <p
          className="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center pb-5">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't waste time and start your search for a new job here!
        </p>
        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4 hidden">
          <a href="#_"
             className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">
            Find a job
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#_"
             className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
            Find a contractor
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
