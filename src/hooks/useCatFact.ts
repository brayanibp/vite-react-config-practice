import { useEffect, useState } from 'react';
import getRadomFact from '../services/getRandomFact';
export default function useCatFact() {
  const [fact, setFact] = useState<string>();

  const refreshFact = () => {
    getRadomFact().then(setFact);
  };

  useEffect(()=>{
    refreshFact();
  }, []);

  return { fact, refreshFact };
}