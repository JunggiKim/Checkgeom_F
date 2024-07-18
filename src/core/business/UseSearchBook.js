import searchBook from "/src/core/store/UseSearchBook.js";

const BookSearch = (libraryType, typeSearch, searchKeyword) => {
    const bookData = {
        libraryType: '',
        typeSearch: '',
        searchKeyword: ''
    }
    console.log("호출함 ")
    const searchBooks = async () => {
        try {
            const data = await searchBook(libraryType, typeSearch, searchKeyword);
        } catch (error) {
            console.error(error);
        }
    };

    return searchBooks;
};

export default BookSearch;
