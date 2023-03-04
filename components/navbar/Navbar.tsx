import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter();
  return (
    <div className='sticky bg-white z-40 top-0 font-Nunito'>
      <header aria-label="Site Header"
        className="shadow-sm h-20">
        <div className=" mx-auto max-w-screen-xl p-4 lg:p-6 ">
          <div className="flex items-center justify-between gap-2 md:gap-4 lg:gap-10">
            <div className="">
              <a href="#">
                <span className="text-2xl font-extrabold" onClick={() => router.push("/")}>Readers Hub</span>
                {/* <span className="h-10 w-20 rounded-lg bg-gray-900">fdfdfd</span> */}
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

            <div className="hidden items-center justify-end gap-4 md:flex">

              <Link
                className="bg-indigo-500 text-white rounded-full font-semibold px-4 md:px-8 py-2 md: hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                href="/auth/login">
                Log in
              </Link>

              <Link
                href="/auth/signup"
                className="bg-indigo-500 text-white rounded-full font-semibold px-4 md:px-8 py-2  hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"

              >
                Sign up
              </Link>
            </div>

            <div className="md:hidden">
              <button className="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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