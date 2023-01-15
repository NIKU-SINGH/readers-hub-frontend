import React from 'react'
import ClubCard from '../cards/club'
import ProfileCard from '../cards/profile'

function index() {
    return (
        <div className='font-Nunito'>
            <div className="sticky top-20 z-10 flex items-center justify-center w-full  p-4">
                <div className="flex items-center justify-center space-x-4 rounded-full bg-blue-100 shadow-md  p-2 overflow-hidden w-full">
                    <a
                        href="#clubs"
                        className="trasition inline-block rounded-full bg-white px-4 py-2 font-medium text-gray-800 shadow duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600">
                        Clubs
                    </a>

                    <a
                        href="#profile"
                        className="trasition inline-block rounded-full px-4 py-2 font-medium text-gray-800 duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600">
                        Persons
                    </a>

                    <a
                        href="#featured"
                        className="trasition inline-block rounded-full px-4 py-2 font-medium text-gray-800 duration-150 ease-in hover:bg-indigo-200 hover:text-indigo-600">
                        Featued
                    </a>
                </div>
            </div>

            <div id="clubs" className=''>
                <h1 className='font-extrabold text-5xl text-center mt-24'>Clubs</h1>
                <ClubCard />
                <ClubCard />
                <ClubCard />
            </div>
            <div id="profile" >
                <h1 className='font-extrabold text-5xl text-center mt-24'>Persons</h1>
                <ProfileCard />
            </div>
            <div id="featured">
                <h1 className='font-extrabold text-5xl text-center mt-24'>Persons</h1>
                <ProfileCard />
            </div>
        </div>
    )
}

export default index