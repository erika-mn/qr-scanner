import { useState } from 'react';
import SocketOverlay from '../components/SocketOverlay';
import background from '../assets/background-interactive.png';
import { Button } from '../components/Button';
import { getOverlayColor, getGaugeFillColor } from '../utils/gaugeUtils';

const GaugePage: React.FC = () => {
    const [gauge, setGauge] = useState<number>(0);
    const incrementGauge = (): void => {
        setGauge((prev) => Math.min(prev + 10, 100));
    };

    return (
        <div
            className='relative w-full h-screen flex justify-center'
            role='main'
        >
            <img
                src={background}
                alt='Metal workshop background'
                className='max-w-full max-h-full xl:object-contain object-cover'
            />

            <div className='items-center z-20'>
                {gauge >= 100 && (
                    <h2
                        className='absolute text-center text-4xl text-red-600 font-bold left-1/2 transform -translate-x-1/2 top-8'
                        role='alert'
                    >
                        BREAK!
                    </h2>
                )}

                <div className='relative z-20'>
                    <SocketOverlay
                        className={`absolute 
                            h-[34.7rem] top-[6.5rem] right-[5.8rem] -translate-x-1/2 scale-x-125 
                            xxs:h-[35rem] xxs:top-[6rem] xxs:right-[7.5rem]
                            xs:top-[6rem] xs:right-[9rem]
                            md:-translate-x-[17rem] md:top-[6rem] md:-left-1
                            lg:-translate-x-[18rem] lg:top-[6rem] lg:left-3
                            xl:h-[39rem] xl:top-[7rem] xl:-left-4
                            ${getOverlayColor(gauge)}
                        `}
                        aria-hidden='true'
                    />
                </div>

                <div className='absolute bottom-[6.2rem] z-20 left-1/2 transform -translate-x-1/2'>
                    <Button
                        onClick={incrementGauge}
                        aria-label='Increase gauge level'
                    />
                </div>
            </div>

            <div
                className='absolute md:right-[6rem] right-12 flex flex-col'
                role='region'
                aria-label='Gauge indicator'
            >
                <div
                    className='w-12 h-64 border top-[19rem] border-white radius relative overflow-hidden rounded-full shadow-inner'
                    role='progressbar'
                    aria-valuenow={gauge}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label='Bending progress'
                >
                    <div
                        className={`absolute bottom-0 w-full transition-all duration-300 ${getGaugeFillColor(
                            gauge
                        )}`}
                        style={{ height: `${gauge}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default GaugePage;
