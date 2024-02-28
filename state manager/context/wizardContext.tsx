import { FC, createContext, useState } from 'react';

type Props = {
  name: string;
  age: number;
  happyBirthday: () => void;
} | null;

export const WizardContext = createContext<Props>(null);

const WizardProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);
  return (
    <WizardContext.Provider value={{ name, age, happyBirthday }}>{children}</WizardContext.Provider>
  );
};

function withWizard<T extends object>(Child: FC<T>) {
  return (props: T) => (
    <WizardContext.Consumer>{context => <Child {...props} {...context} />}</WizardContext.Consumer>
  );
}

export { WizardProvider, withWizard };
