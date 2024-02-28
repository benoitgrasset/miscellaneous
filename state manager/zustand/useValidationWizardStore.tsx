import { create } from 'zustand';

type Store = {
  data: Partial<object>;
  updateData: (data: Partial<object>) => void;
  activeStep: number;
  errorIndex: number | null;
  handleBack: () => void;
  handleNext: () => void;
  resetActiveStep: () => void;
  setErrorIndexForActiveStep: () => void;
};

export const useStore = create<Store>(set => ({
  data: {},
  updateData: (newData: Partial<object>) => set(state => ({ data: { ...state.data, ...newData } })),
  activeStep: 0,
  errorIndex: null,
  handleBack: () => set(state => ({ activeStep: state.activeStep - 1, errorIndex: null })),
  handleNext: () => set(state => ({ activeStep: state.activeStep + 1, errorIndex: null })),
  resetActiveStep: () => set({ activeStep: 0 }),
  setErrorIndexForActiveStep: () => set(state => ({ errorIndex: state.activeStep })),
}));

const dataSelector = (state: Store) => state.data;
const updateDataSelector = (state: Store) => state.updateData;
const activeStepSelector = (state: Store) => state.activeStep;
const errorIndexSelector = (state: Store) => state.errorIndex;
const handleBackSelector = (state: Store) => state.handleBack;
const handleNextSelector = (state: Store) => state.handleNext;
const resetActiveStepSelector = (state: Store) => state.resetActiveStep;
const setErrorIndexForActiveStepSelector = (state: Store) => state.setErrorIndexForActiveStep;

export {
  activeStepSelector,
  dataSelector,
  errorIndexSelector,
  handleBackSelector,
  handleNextSelector,
  resetActiveStepSelector,
  setErrorIndexForActiveStepSelector,
  updateDataSelector,
};
