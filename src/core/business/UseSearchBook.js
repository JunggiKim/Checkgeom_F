import{
    gyeonggidoCyberLibrarySearch,
    gyeonggiEducationalLibrarySearch,
    SmallBusinessLibrarySearch
} from "/src/core/store/UseSearchBook.js";
import LibraryType from "../../domain/LibraryType.js";

const BookSearch = async (libraryType, typeSearch, searchKeyword) => {

    if (libraryType === LibraryType.ALL) {
        return await AllLibrarySearch(typeSearch, searchKeyword)
    }
    if (libraryType === LibraryType.GYEONGGIDO_CYBER) {
        return gyeonggidoCyberLibrarySearch(typeSearch, searchKeyword);
    }
    if (libraryType === LibraryType.GYEONGGI_EDUCATIONAL) {
        return await gyeonggiEducationalLibrarySearch(typeSearch, searchKeyword)
    }
    if (libraryType === LibraryType.SMALL_BUSINESS) {
        return await SmallBusinessLibrarySearch(typeSearch, searchKeyword)
    }
};

export default BookSearch;
