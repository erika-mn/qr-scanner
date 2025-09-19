export const getGaugeFillColor = (value: number): string => {
    if (value < 25) return 'bg-green-500';
    if (value < 50) return 'bg-yellow-400';
    if (value < 75) return 'bg-orange-500';
    return 'bg-red-600';
};

export const getOverlayColor = (value: number): string => {
    if (value < 25) return 'text-green-500';
    if (value < 50) return 'text-yellow-400';
    if (value < 75) return 'text-orange-500';
    return 'text-red-600';
};
