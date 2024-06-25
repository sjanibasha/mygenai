// // MultiStepForm.js

// import React, { useState } from 'react';
// import Step1 from './Step1';
// import Step2 from './Step2';
// import Step3 from './Step3';
// // Import other steps/components as needed

// const MultiStepForm = ({ onClose }) => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handlePrevious = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const handleSubmit = () => {
//     // Handle form submission
//     onClose();
//   };

//   return (
//     <div>
//       {/* Render current step */}
//       {currentStep === 1 && <Step1 onNext={handleNext} />}
//       {currentStep === 2 && <Step2 onNext={handleNext} onPrevious={handlePrevious} />}
//       {currentStep === 3 && <Step3 onSubmit={handleSubmit} onPrevious={handlePrevious} />}
//       {/* Render other steps/components as needed */}
//     </div>
//   );
// };

// export default MultiStepForm;

// MultiStepForm.jsx
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';

const Step1 = ({ nextStep }) => (
  <Box >
    <Typography variant="h6">Step 1</Typography>
    <Button variant="contained" onClick={nextStep}>Next</Button>
  </Box>
);

const Step2 = ({ nextStep, prevStep }) => (
  <Box>
    <Typography variant="h6">Step 2</Typography>
    <Button variant="contained" onClick={prevStep}>Previous</Button>
    <Button variant="contained" onClick={nextStep}>Next</Button>
  </Box>
);

const Step3 = ({ nextStep, prevStep }) => (
  <Box>
    <Typography variant="h6">Step 3</Typography>
    <Button variant="contained" onClick={prevStep}>Previous</Button>
    <Button variant="contained" onClick={nextStep}>Next</Button>
  </Box>
);

const Step4 = ({ nextStep, prevStep }) => (
  <Box>
    <Typography variant="h6">Step 4</Typography>
    <Button variant="contained" onClick={prevStep}>Previous</Button>
    <Button variant="contained" onClick={nextStep}>Next</Button>
  </Box>
);

const Step5 = ({ prevStep, onClose }) => (
  <Box>
    <Typography variant="h6">Step 5</Typography>
    <Button variant="contained" onClick={prevStep}>Previous</Button>
    <Button variant="contained" onClick={onClose}>Finish</Button>
  </Box>
);

const MultiStepForm = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Step4 nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <Step5 prevStep={prevStep} onClose={onClose} />;
    default:
      return <Step1 nextStep={nextStep} />;
  }
};

export default MultiStepForm;
