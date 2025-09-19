import React from 'react';
import { HeroSection } from '../components/HeroSection';
import drillBits from '../assets/drillbits.png';

const LandingPage: React.FC = () => {
    return (
        <div className='relative flex flex-col w-full mx-auto px-auto'>
            <HeroSection />
            <div className='px-4 xs:-mt-[3.5rem] bg-black '>
                <h1 className='text-6xl mt-5 text-white'>
                    90% Have Chosen The{' '}
                    <span className='text-[#C7F903]'>Wrong Size Today.</span>
                </h1>{' '}
                <h4 className='text-xl mt-5 text-white'>
                    Get just the right size when drilling through metal,
                    plastic, or other materials with Carlyle stepped drill bits
                </h4>
                <div className='xxs:mt-20 xxs:pb-[4.95rem] mt-6 pb-[2rem]'>
                    <img src={drillBits} alt='Drill Bits' />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
