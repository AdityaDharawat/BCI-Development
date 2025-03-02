import React from 'react';
import Lottie from 'react-lottie-player';
import brainScanAnimation from '../assets/brainScan.json'; // Adjust the path as needed

const BrainScan = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-full filter blur-3xl opacity-20 float-animation"></div>
            <Lottie
                loop
                animationData={brainScanAnimation}
                play
                className="relative z-10 max-w-md rounded-2xl shadow-2xl float-animation"
            />
        </div>
    );
};

export default BrainScan;
