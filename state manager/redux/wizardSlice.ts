import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export type WizardState = {
  data: object;
  activeStep: number;
  errorIndex: number | null;
};

const initialState: WizardState = {
  data: {},
  activeStep: 0,
  errorIndex: null,
};

const wizardSlice = createSlice({
  name: 'wizard',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<object>) => ({
      ...state,
      data: { ...state.data, ...action.payload },
    }),
    handleBack: state => ({
      ...state,
      activeStep: state.activeStep - 1,
    }),
    handleNext: state => ({
      ...state,
      activeStep: state.activeStep + 1,
    }),
    resetActiveStep: state => ({
      ...state,
      activeStep: 0,
    }),
    setErrorIndexForActiveStep: state => ({
      ...state,
      errorIndex: state.activeStep,
    }),
  },
});

export const { updateData, handleBack, handleNext, resetActiveStep, setErrorIndexForActiveStep } =
  wizardSlice.actions;

export const selectData = (state: RootState) => state.wizard.data;
export const selectActiveStep = (state: RootState) => state.wizard.activeStep;
export const selectErrorIndex = (state: RootState) => state.wizard.errorIndex;

export default wizardSlice.reducer;
