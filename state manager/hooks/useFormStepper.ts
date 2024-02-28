import { useState } from 'react';

export function useFormWizard<T extends object>(defautlValues: T) {
  const [activeStep, setActiveStep] = useState(0);
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const [data, setData] = useState(defautlValues ?? {});

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setErrorIndex(null);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setErrorIndex(null);
  };

  const resetActiveStep = () => {
    setActiveStep(0);
  };

  const setErrorIndexForActiveStep = () => {
    setErrorIndex(activeStep);
  };

  const updateData = (values: T) => {
    setData(prevState => ({
      ...prevState,
      ...values,
    }));
  };

  const resetData = () => {
    setData({} as T);
  };

  return {
    data,
    updateData,
    resetData,
    activeStep,
    errorIndex,
    handleBack,
    handleNext,
    resetActiveStep,
    setErrorIndexForActiveStep,
  };
}

