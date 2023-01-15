import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='h-[90vh] w-full flex items-center p-8' >
            <div className="h-full w-full lg:w-1/2 items-center justify-center font-Nunito flex ">
                <div className='ml-0 lg:ml-16'>
                    <h1 className='text-6xl font-semibold'>
                        Unlimited Books,
                        <br />
                        Communities,<br />
                        People & more.
                    </h1>
                    <p className='text-3xl mt-4'>Watch anywhere.<br /> Cancel anytime</p>

                    <div className='mt-4'>
                        <div className="flex flex-col justify-center">
                            <div className="relative w-full sm:max-w-2xl sm:mx-auto">
                                <div className="overflow-hidden z-0 rounded-full relative">
                                    <form role="form" className="relative flex z-50 bg-gray-200 rounded-full">
                                        <input
                                            type="text"
                                            placeholder="enter your search here"
                                            className="bg-gray-200 text-lg rounded-full flex-1 px-6 text-gray-700 focus:outline-none"
                                        />
                                        <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-3 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden lg:flex h-full justify-center w-1/2 overflow-hidden rounded-3xl'>
                <div className='w-full'>

                    <div className="columns-2 md:columns-3 lg:columns-4">
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/1" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/2" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/3" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/4" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/5" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/6" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/7" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/8" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/9" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/10" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/11" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/12" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/13" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/14" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/15" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/16" />
                        </div>
                        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                            <Image
                                height={350}
                                width={210}
                                alt="book picture"
                                className="w-full rounded-md"
                                src="https://source.unsplash.com/random/17" />
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner