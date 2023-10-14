const CAT_IMAGE_URL_PREFIX = 'https://cataas.com/';

async function getCatImageURL(firstThreeWords: string): Promise<string> {
  return fetch(`${CAT_IMAGE_URL_PREFIX}cat/says/${firstThreeWords}?size=50&color=red&json=true`)
    .then(res => res.json())
    .then(resp => {
      const { url } = resp;
      return CAT_IMAGE_URL_PREFIX+url;
    });
}

export default getCatImageURL;