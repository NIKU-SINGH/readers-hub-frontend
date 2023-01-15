import React from 'react'

function profile() {
    return (
        <div>
            <div className="flex items-center justify-center m-10">
                <div className="w-full rounded-2xl p-6 md:p-10 shadow-2xl shadow-blue-200 md:w-8/12 lg:w-10/12 bg-white">
                    <div className="grid grid-cols- gap-6 lg:grid-cols-12">
                        <div className="h-full w-full  grid-cols-1 lg:col-span-4 flex items-center justify-center">
                            <div className="relative flex items-end overflow-hidden rounded-xl">
                                <img
                                    src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                                    alt="wallpaper"
                                    className='object-cover'
                                />

                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-8">
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-extrabold text-zinc-700">Virat Kholi</h2>
                                <p className="mt-4 text-zinc-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                                    <br />
                                    mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                                </p>
                                {/* <p className="mt-2 font-semibold text-zinc-700">@xyzuser</p> */}
                                <div className='felx space-x-2 space-y-2 py-2'>
                                    <button className="px-4 py-2 bg-gray-400 hover:bg-gray-900 text-white text-sm font-medium rounded-full">
                                        Dark Button
                                    </button>
                                    <button className="px-4 py-2 bg-gray-400 hover:bg-gray-900 text-white text-sm font-medium rounded-full">
                                        Dark Button
                                    </button>
                                    <button className="px-4 py-2 bg-gray-400 hover:bg-gray-900 text-white text-sm font-medium rounded-full">
                                        Dark Button
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
                                <div className='flex space-x-2'>
                                    <p className="font-bold text-lg text-zinc-700">345+</p>
                                    <p className="text-lg font-semibold text-zinc-700">Members</p>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-4">
                                <button className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">Explore more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile