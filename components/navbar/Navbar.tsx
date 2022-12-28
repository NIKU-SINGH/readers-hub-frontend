import React from 'react'

function Navbar() {
  return (
    <div className='font-Nunito'>
      <header aria-label="Site Header" className="shadow-sm h-20  overflow-hidden">
        <div className="mx-auto max-w-screen-xl p-6 ">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex  lg:flex-1">
              <a href="#">
                <span className="text-2xl font-extrabold">Readers Hub</span>
                <span className="h-10 w-20 rounded-lg bg-gray-900"></span>
              </a>
            </div>

            <nav
              aria-label="Site Nav"
              className="hidden gap-8 text-sm font-medium md:flex"
            >
              <a className="text-gray-700 text-base" href="">About</a>
              <a className="text-gray-700 text-base" href="">Blog</a>
              <a className="text-gray-700 text-base" href="">Projects</a>
              <a className="text-gray-700 text-base" href="">Contact</a>
            </nav>

            <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
              <a
                // className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
                className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-3 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                href=""
              >
                Log in
              </a>

              <a
                // className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
                className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-3 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                href=""
              >
                Sign up
              </a>
            </div>

            <div className="lg:hidden">
              <button className="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Navbar