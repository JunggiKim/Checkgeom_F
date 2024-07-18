import {useState, useEffect} from "react";
import searchBook from "/src/core/store/UseSearchBook.js";

 const BookSearch = (
    libraryType,
    typeSearch,
    searchKeyword,
) => {
    const [bookData, setBookData] = useState([]);
        console.log(searchKeyword)
    const searchBooks = async () => {
        try {
            const data = await searchBook( libraryType,
                typeSearch,
                searchKeyword);
            console.log(data)
            setBookData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        searchBooks();
    },[searchKeyword]);

     console.log(bookData)
    return bookData;
}

export default BookSearch;