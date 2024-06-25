import React from 'react';

const ProgressBar = ({ currentStep, steps }) => {
    const progressPercentage = (currentStep / (steps - 1)) * 100;

    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
    );
};

export default ProgressBar;
