import React from 'react';
import './style.css';

export default function App() {
  const N = 5000;

  const isPrimer = (nbr) => {
    for (let i = 2; i < nbr; i++) if (nbr % i === 0) return false;
    return nbr > 1;
  };

  const getArray = () => {
    let list = [];
    for (let i = 0; i <= N; i++) {
      list.push(i);
    }
    return list;
  };

  const array = getArray();

  return (
    <div>
      <h1>Nombres premiers</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {array.map((e) => {
          const premier = isPrimer(e);
          const premierStyle = premier && {
            color: 'red',
            fontWeight: 700,
            background: 'yellow',
          };
          return (
            <div
              style={{
                padding: '3px',
                width: '30px',
                textAlign: 'center',
                border: '1px solid black',
                ...premierStyle,
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
