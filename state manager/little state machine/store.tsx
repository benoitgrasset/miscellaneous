  import { StateMachineProvider, createStore } from 'little-state-machine';
  
  createStore(
    { data: mapDataFromServer(dataFromServer), activeStep: 0, errorIndex: null },
    { name: 'product - wizard' }
  );
