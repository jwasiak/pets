export const getAllDogs = async () => {
    const url = new URL("https://dog.ceo/api/breeds/list/all");
    const request = new Request(url);
    const response = await fetch(request);
    return response.json();
};

export const getBreedDogs = async (breed) => {
    const url = new URL(`https://dog.ceo/api/breed/${breed}/images`);
    const request = new Request(url);
    const response = await fetch(request);
    return response.json();
};
