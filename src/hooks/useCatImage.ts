import { useEffect, useState } from 'react';
import getCatImageURL from '../services/getCatImageURL';

export default function useCatImage({ fact }: { fact: string | undefined }) {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(()=>{
    if (!fact) return;
    const firstThreeWords = fact.split(' ',3).join(' ');
    console.log(firstThreeWords);
    getCatImageURL(firstThreeWords).then(setImageUrl);
  },[fact]);
  
  return { imageUrl };
}