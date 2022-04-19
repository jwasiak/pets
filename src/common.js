export const imagesPerPage = 20;

export const getFavourities = () => {
    const storage = localStorage.getItem("favourities");
    return storage ? JSON.parse(storage) : [];
};
