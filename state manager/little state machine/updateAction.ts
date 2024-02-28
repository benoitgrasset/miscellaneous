export const updateData = (state: any, payload: any) => ({
  ...state,
  data: {
    ...state.data,
    ...payload,
  },
});

export const handleNext = (state: any) => ({
  ...state,
  activeStep: state.activeStep + 1,
  errorIndex: null,
});

export const handleBack = (state: any) => ({
  ...state,
  activeStep: state.activeStep - 1,
  errorIndex: null,
});

export const handleReset = (state: any) => ({
  ...state,
  activeStep: 0,
});

export const setErrorIndexForActivestep = (state: any) => ({
  ...state,
  errorIndex: state.activeStep,
});

