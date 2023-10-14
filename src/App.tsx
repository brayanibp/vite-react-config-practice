import React from 'react';
import './style.css';

import useCatImage from './hooks/useCatImage';
import useCatFact from './hooks/useCatFact';

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  
  const handleClick = async () => {
    refreshFact();
  };

  return <>
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get New Fact</button>
      <section>
        { fact && <p>{fact}</p> }
        { imageUrl && <img src={imageUrl} alt='Random Cat Image' /> }
      </section>
    </main>
  </>;
}