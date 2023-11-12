export const getAllBreeds = async () => {
  const url = new URL("https://dog.ceo/api/breeds/list/all");
  const request = new Request(url);
  const response = await fetch(request);
  const { status, message } = await response.json();
  const allBreads = [];
  if (status === "success") {
    for (const [breed, value] of Object.entries(message)) {
      if (value.length === 0) {
        allBreads.push(breed);
      } else {
        for (const sub of value) {
          allBreads.push(`${breed}/${sub}`);
        }
      }
    }
  }
  return allBreads;
};

export const getRandomImage = async (breed) => {
  const url = new URL(`https://dog.ceo/api/breed/${breed}/images/random`);
  const request = new Request(url);
  const response = await fetch(request);
  const { status, message } = await response.json();
  if (status === "success") {
    return message;
  }
  return null;
};

export const getBreedImages = async (breed) => {
  const url = new URL(`https://dog.ceo/api/breed/${breed}/images`);
  const request = new Request(url);
  const response = await fetch(request);
  const { status, message } = await response.json();
  if (status === "success") {
    return message;
  }
  return [];
};
