const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export default async function getRadomFact(): Promise<string> {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { fact } = data;
      return fact;
    });
}