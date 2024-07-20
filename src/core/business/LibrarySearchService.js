import librarySearchRepository from "/src/core/store/LibrarySearchRepository.js";
import LibraryType from "../../domain/LibraryType.js";

class LibrarySearchService{

    search  =  async (libraryType, typeSearch, searchKeyword) => {
        if (libraryType === LibraryType.ALL) {
            return await librarySearchRepository.allLibrarySearch(typeSearch, searchKeyword)
        }
        if (libraryType === LibraryType.GYEONGGIDO_CYBER) {
            return librarySearchRepository.gyeonggidoCyberLibrarySearch(typeSearch, searchKeyword);
        }
        if (libraryType === LibraryType.GYEONGGI_EDUCATIONAL) {
            return await librarySearchRepository.gyeonggiEducationalLibrarySearch(typeSearch, searchKeyword)
        }
        if (libraryType === LibraryType.SMALL_BUSINESS) {
            return await librarySearchRepository.smallBusinessLibrarySearch(typeSearch, searchKeyword)
        }
    };

}

const librarySearchService = new LibrarySearchService();
export default librarySearchService;