import React from 'react';
import banner from '../assets/spacex-dragon.jpg';

const Banner = () => {
    return (
        <div className='relative h-[40rem] w-full'>
            <div className='absolute text-4xl text-white left-[15rem] top-[12rem]'>
                <h1>
                    Spacex
                </h1>
            </div>
            <div className='w-full h-full'>
                <img className='w-full h-full' src={banner} alt="spacex" />
            </div>
        </div>
    );
}

export default Banner;