import React from 'react';
import classnames from 'classnames';
import { BookmarkIcon, HeartIcon as HeartOutlineIcon, UserCircleIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon, HeartIcon, StarIcon } from "@heroicons/react/solid";

function Container({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={classnames("container mx-auto max-w-[900px]", className)}>
      {children}
    </div>
  )
}

function HomePage() {
  return (
    <div className="">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-[1280px] flex justify-between items-center h-16">
          <div className="font-semibold">jobbed.io</div>

          <div>
            <nav className="grid gap-5 grid-flow-col h-10 text-sm">
              <a className="bg-yellow-300 rounded-md flex items-center justify-center px-4 w-40 font-semibold">Find a
                job</a>
              <a className="flex items-center justify-center px-4">Jobs</a>
              <a className="flex items-center justify-center px-4">Pricing</a>
              <a className="flex items-center justify-center px-4">
                <UserCircleIcon className="w-6 h-6" />
              </a>
            </nav>
          </div>

        </div>
      </header>

      <Container className="grid grid-cols-12 gap-8 py-10">
        <div className="col-span-4 flex">
          <div className="bg-white rounded-xl flex-1 p-5 flex">
            <label className="flex-1 flex flex-col">
              <div className="font-semibold mb-2">Required Skills</div>
              <input className="bg-gray-100 rounded-md flex py-1 px-3" />
            </label>
          </div>
        </div>

        <div className="col-span-8 grid gap-8">

          {Array.from(Array(2)).map((_, index) => (
            <div key={index} className="bg-white rounded-xl p-5 hover:ring cursor-pointer transition-shadow ring-yellow-500 ring-opacity-40">
              <div className="flex gap-3">
                <div className="flex-0 bg-gray-50 border border-gray-100 w-16 h-16 rounded-md overflow-hidden">
                  <img
                    alt="ATMOS"
                    src="https://wellpaidio.imgix.net/logos/327c5998-1553-4b9a-bb31-73e936fd5411.png?w=236&h=236&fit=crop" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">Senior React
                    Developer
                  </div>
                  <div className="text-xs text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis">We are looking
                    for a Senior React Developer to join our team of highly
                  </div>
                </div>
                <div className="flex-0 flex justify-center items-center border border-gray-100 w-10 h-10 rounded-md">
                  <BookmarkIcon className="w-4 h-4 text-gray-500" />
                </div>
              </div>

              <div className="flex gap-3 pt-3 text-xs">
                <div
                  className="bg-gray-100 px-2 py-1 flex items-center justify-center rounded-md text-gray-400">
                  React
                </div>
                <div
                  className="bg-gray-100 px-2 py-1 flex items-center justify-center rounded-md text-gray-400">
                  TypeScript
                </div>
              </div>

              <div className="bg-gray-50 -mx-5 px-5 py-2 mt-3 flex gap-3">
                <div className="text-sm text-gray-600">£500 - £600 / day</div>
                <div className="text-sm text-gray-600">Outside IR35</div>
              </div>

              <div className="flex justify-between pt-5">
                <div>
                  {index % 2 ? <HeartOutlineIcon className="w-7 w-7 text-gray-300" /> :
                    <HeartIcon className="w-7 w-7 text-red-400" />}
                </div>
                <div className="grid gap-1 grid-flow-col hidden">
                  <StarIcon className="w-5 w-5 text-yellow-400" />
                  <StarIcon className="w-5 w-5 text-yellow-400" />
                  <StarIcon className="w-5 w-5 text-yellow-400" />
                  <StarIcon className="w-5 w-5 text-yellow-400" />
                  <StarIcon className="w-5 w-5 text-gray-200" />
                </div>

                <div className="flex justify-center items-center text-sm">
                  <div className="flex">
                    <BadgeCheckIcon className="w-5 h-5 text-blue-400 mr-1" />
                    <div className="text-sm text-gray-500">Project Verified</div>
                  </div>

                  <div className="ml-3">
                    <div><span className="font-semibold">46</span> Applicants</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

    </div>
  );
}

export default HomePage;
