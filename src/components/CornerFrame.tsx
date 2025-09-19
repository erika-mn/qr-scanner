import React from 'react';

export const CornerFrame: React.FC = () => (
    <div className='absolute top-[32rem] left-1/2 w-[35rem] h-[35rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
        {/* Top-left corner */}
        <div className='absolute top-0 left-0 w-[5rem] h-1 bg-white rounded-full' />
        <div className='absolute top-0 left-0 w-1 h-[5rem] bg-white rounded-full' />

        {/* Top-right corner */}
        <div className='absolute top-0 right-0 w-[5rem] h-1 bg-white rounded-full' />
        <div className='absolute top-0 right-0 w-1 h-[5rem] bg-white rounded-full' />

        {/* Bottom-left corner */}
        <div className='absolute bottom-0 left-0 w-[5rem] h-1 bg-white rounded-full' />
        <div className='absolute bottom-0 left-0 w-1 h-[5rem] bg-white rounded-full' />

        {/* Bottom-right corner */}
        <div className='absolute bottom-0 right-0 w-[5rem] h-1 bg-white rounded-full' />
        <div className='absolute bottom-0 right-0 w-1 h-[5rem] bg-white rounded-full' />
    </div>
);
