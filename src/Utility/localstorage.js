const getStoredReadBook =() =>{
    const storedBookCollection = localStorage.getItem('book-collection');
    if(storedBookCollection){
        return JSON.parse(storedBookCollection)
    }
    return [];
}

const saveBookRead = id =>{
    const storedBookCollections = getStoredReadBook();
    const exists = storedBookCollections.find(bookId => bookId=== id)
    if(!exists) {
        storedBookCollections.push(id)
        localStorage.setItem('book-collection', JSON.stringify(storedBookCollections))
    }

}

export {getStoredReadBook ,saveBookRead}