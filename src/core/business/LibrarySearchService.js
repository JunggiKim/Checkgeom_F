import librarySearchRepository from "/src/core/store/LibrarySearchRepository.js";
import LibraryType from "../../constant/LibraryType.js";

class LibrarySearchService{

    search  =  async (libraryType, typeSearch, searchKeyword) => {
        console.log(libraryType)
        console.log(typeSearch)
        console.log(searchKeyword)

        if (libraryType === LibraryType.ALL.english) {
            return await librarySearchRepository.allLibrarySearch(typeSearch, searchKeyword)
        }
        if (libraryType === LibraryType.GYEONGGIDO_CYBER.english) {
            return librarySearchRepository.gyeonggidoCyberLibrarySearch(typeSearch, searchKeyword);
        }
        if (libraryType === LibraryType.GYEONGGI_EDUCATIONAL.english) {
            return await librarySearchRepository.gyeonggiEducationalLibrarySearch(typeSearch, searchKeyword)
        }
        if (libraryType === LibraryType.SMALL_BUSINESS.english) {
            return await librarySearchRepository.smallBusinessLibrarySearch(typeSearch, searchKeyword)
        }
    };

    check = async () => await librarySearchRepository.check();



}

const librarySearchService = new LibrarySearchService();
export default librarySearchService;