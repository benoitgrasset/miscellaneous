import React from 'react';
import './style.css';

export default function App() {
  const N = 5000;

  const getArray = () => {
    let list = [];
    for (let i = 0; i <= N; i++) {
      const val = Math.random() < 0.5;
      list.push(val);
    }
    return list;
  };

  const array0 = getArray();

  const [array, setArray] = React.useState(array0);

  const handleNext = () => {
    const newArray = getArray();
    setArray(newArray);
  };

  const buttonStyle = {
    marginBottom: '10px',
    width: '100px',
    height: '30px',
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button onClick={handleNext} style={buttonStyle}>
        Next
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {array.map((e) => {
          const style = e && {
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
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
}
