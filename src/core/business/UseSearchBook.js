import searchBook from "/src/core/store/UseSearchBook.js";
import LibraryType from "../../domain/LibraryType.js";

const BookSearch = async (libraryType, typeSearch, searchKeyword) => {
    console.log('호출함')


    try {
        return await searchBook(libraryType, typeSearch, searchKeyword)
    } catch (e) {
        console.error(e);
        return []
    }

};

export default BookSearch;
