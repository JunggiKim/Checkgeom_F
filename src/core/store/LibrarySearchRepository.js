import axiosInstance from "../../util/axiosInstance.js";

class LibrarySearchRepository {
    async gyeonggidoCyberLibrarySearch(typeSearch, searchKeyword) {
        try {
            return (await axiosInstance.get(`api/v1/gyeonggiDoCyberLibrarySearch/` + searchKeyword)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }

    async gyeonggiEducationalLibrarySearch(typeSearch, searchKeyword) {
        try {
            return (await axiosInstance.get(`api/v1/gyeonggiEducationalElectronicLibrary/` + searchKeyword)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }

    async smallBusinessLibrarySearch(typeSearch, searchKeyword) {
        try {
            return (await axiosInstance.get(`api/v1/smallBusinessLibrary/` + searchKeyword)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }

    async allLibrarySearch(typeSearch, searchKeyword) {
        try {
            return (await axiosInstance.get(`api/v1/allLibrarySearch/` + searchKeyword)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }
}

// Usage
const librarySearchRepository = new LibrarySearchRepository();
export default librarySearchRepository;
