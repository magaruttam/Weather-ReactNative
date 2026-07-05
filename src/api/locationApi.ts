export const SearchLocation = async (city: string) =>{
const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`

  );
  const data = await response.json();
  return data.results;
}