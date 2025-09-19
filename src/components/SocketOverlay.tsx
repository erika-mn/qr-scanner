import React from 'react';

type Props = {
    className?: string;
};

const SocketOverlay: React.FC<Props> = ({ className }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 70 532'
            className={`w-auto h-full ${className}`}
            preserveAspectRatio='xMidYMid meet'
        >
            <path
                d='M19.5 318.5V525C37.784 532.886 47.2806 532.717 63 525V318.5L57 300V182L63 157V108L69.5 32C69.5 32 69.5 1 35 1C0.499992 1 0.5 32 0.5 32L11 108V157L19.5 182L24.5 300L19.5 318.5Z'
                fill='currentColor'
                stroke='currentColor'
            />
        </svg>
    );
};

export default SocketOverlay;
