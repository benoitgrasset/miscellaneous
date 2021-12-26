import React from 'react';
import './style.css';

const col = 15;
const row = 20;

const buttonStyle = {
  marginBottom: '10px',
  width: '100px',
  height: '30px',
};

const getRandomBoolean = () => Math.random() < 0.5;

const getArray = () => {
  let array = [];
  for (let i = 0; i < row; i++) {
    array[i] = [];
    for (let j = 0; j < col; j++) {
      array[i][j] = getRandomBoolean();
    }
  }
  return array;
};

const getNewArray = (array) => {
  let newArray = [];
  for (let i = 0; i < row; i++) {
    newArray[i] = [];
    for (let j = 0; j < col; j++) {
      newArray[i][j] = !array[i][j];
    }
  }
  return newArray;
};

export default function App() {
  const [array, setArray] = React.useState(getArray());

  const handleNext = () => {
    const newArray = getNewArray(array);
    setArray(newArray);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div>
      <button onClick={handleNext} style={buttonStyle}>
        Next
      </button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {array.map((row) => {
          return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {row.map((cell) => {
                const style = cell && {
                  background: 'grey',
                };
                return (
                  <div
                    style={{
                      padding: '3px',
                      width: '30px',
                      height: '30px',
                      textAlign: 'center',
                      border: '1px solid black',
                      ...style,
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
