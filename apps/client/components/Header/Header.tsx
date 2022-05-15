import React from 'react';
import { UserCircleIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import Link from 'next/link';

function Header() {

  return (
    <header className="bg-gray-900 text-white border-gray-200">
      <div className="container mx-auto max-w-6xl flex justify-between items-center h-16 px-6 xl:px-0">
        <Link href="/">
          <a>
            <div className="font-semibold text-lg">jobbed<i className="opacity-50 text-purple-500 font-normal">.io</i>
            </div>
          </a>
        </Link>

        <div>
          <nav className="gap-5 grid-flow-col h-10 text-sm hidden md:grid">
            <Link href="/search">
              <a
                className="cursor-pointer bg-purple-500 border-2 border-purple-500 bg-opacity-10 rounded-md flex items-center justify-center px-4 w-40 font-semibold">
                Find a job
              </a>
            </Link>
            <a className="flex items-center justify-center px-4">Jobs</a>
            <a className="flex items-center justify-center px-4">Pricing</a>
            <a className="flex items-center justify-center px-4">
              <UserCircleIcon className="w-6 h-6" />
            </a>
          </nav>

          <div className="md:hidden">
            <MenuIcon className="w-6 h-6 " />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
