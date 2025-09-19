import React from 'react';

type ButtonProps = {
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            className='px-5 py-2 bg-red-500 rounded-full hover:bg-red-800 transition text-white border-[0.2rem] border-gray-400 font-bold shadow-lg'
            onClick={onClick}
            aria-label='Increase gauge level'
        >
            BEND
        </button>
    );
};
