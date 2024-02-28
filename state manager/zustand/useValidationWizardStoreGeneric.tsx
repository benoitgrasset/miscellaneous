import { create } from 'zustand';

type Store<T> = {
  data: Partial<T>;
  updateData: (data: Partial<T>) => void;
  activeStep: number;
  errorIndex: number | null;
  handleBack: () => void;
  handleNext: () => void;
  resetActiveStep: () => void;
  setErrorIndexForActiveStep: () => void;
};

export const useStore = <T extends object>() =>
  create<Store<T>>(set => ({
    data: {},
    updateData: (newData: Partial<T>) => set(state => ({ data: { ...state.data, ...newData } })),
    activeStep: 0,
    errorIndex: null,
    handleBack: () => set(state => ({ activeStep: state.activeStep - 1, errorIndex: null })),
    handleNext: () => set(state => ({ activeStep: state.activeStep + 1, errorIndex: null })),
    resetActiveStep: () => set({ activeStep: 0 }),
    setErrorIndexForActiveStep: () => set(state => ({ errorIndex: state.activeStep })),
  }))();
