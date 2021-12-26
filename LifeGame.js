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
  let array = Array.from(Array(row), () => new Array(col).fill(false));
  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      array[i][j] = getRandomBoolean();
    }
  }
  return array;
};

const getNewArray = (array) => {
  let newArray = array;
  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      const reducedArray = getReducedArray(newArray, i, j);
      if (array[i][j] === true) {
        newArray[i][j] = has3Neighbors(reducedArray);
      } else newArray[i][j] = has2or3Neighbors(reducedArray);
    }
  }
  return newArray;
};

const getReducedArray = (array, i, j) => {
  const reducedArray = [
    [array[i - 1][j - 1], array[i - 1][j], array[i - 1][j + 1]],
    [array[i][j - 1], array[i][j], array[i][j + 1]],
    [array[i + 1][j - 1], array[i + 1][j], array[i + 1][j + 1]],
  ];
  return reducedArray;
};
const has3Neighbors = (array) => {
  return nbOfTrue(array) === 3;
};
const has2or3Neighbors = (array) => {
  return nbOfTrue(array) === 3 || nbOfTrue(array) === 4;
};
const nbOfTrue = (array) => {
  return array.flatMap((e) => e).filter((e) => e).length;
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
