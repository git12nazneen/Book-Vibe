
// Functions for managing 'Read' book collection
const getStoredReadBook = () => {
    const storedBookCollection = localStorage.getItem('book-read-collection');
    return storedBookCollection ? JSON.parse(storedBookCollection) : [];
}

const saveBookRead = (id) => {
    const storedBookCollections = getStoredReadBook();
    const exists = storedBookCollections.includes(id);
    if (!exists) {
        storedBookCollections.push(id);
        localStorage.setItem('book-read-collection', JSON.stringify(storedBookCollections));
        return true; // Book added successfully
    }
    return false; // Book already exists
}

// Functions for managing 'Wish' book collection
const getStoredWishBook = () => {
    const storedWishCollection = localStorage.getItem('book-wish-collection');
    return storedWishCollection ? JSON.parse(storedWishCollection) : [];
}

const saveBookWish = (id) => {
    const storedWishCollections = getStoredWishBook();
    const exists = storedWishCollections.includes(id);
    if (!exists) {
        storedWishCollections.push(id);
        localStorage.setItem('book-wish-collection', JSON.stringify(storedWishCollections));
        return true; // Book added successfully
    }
    return false; // Book already exists
}

export { getStoredReadBook, saveBookRead, getStoredWishBook, saveBookWish };
