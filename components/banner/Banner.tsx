import Image from 'next/image'
import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function Banner() {
    return (
        <div className='h-[90vh] w-full flex items-center p-8' >
            <div className="h-full w-1/2 items-center font-Nunito flex ">
                <div className='ml-16'>
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
                                    <form role="form" className="relative flex z-50 bg-gray-200 p-1 rounded-full">
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
            <div className='h-full justify-center  w-1/2 flex overflow-hidden rounded-3xl'>
                    <div className='p-1'>
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        
                    </div>
                    <div className='p-1 mt-10'>
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        
                    </div>
                    <div className='p-1 -mt-10 '>
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                    </div>
                    <div className='p-1 mt-10 '>
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                        <Image
                            height={500}
                            width={250}
                            alt=""
                            className='m-2 h-52 w-36 rounded-2xl'
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" 
                        />
                    </div>
                    
            </div>
        </div>
    )
}

export default Banner