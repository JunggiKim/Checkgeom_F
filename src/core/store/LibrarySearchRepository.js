import axiosInstance from "../../util/axiosInstance.js";

class LibrarySearchRepository {
    async gyeonggidoCyberLibrarySearch(typeSearch, searchKeyword) {
        try {
            return (await axiosInstance.get(`api/v1/gyeonggiDoCyberLibrary/` + searchKeyword)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }

    async gyeonggiEducationalLibrarySearch(typeSearch, searchKeyword) {
        try {
            return (await axiosInstance.get(`api/v1/gyeonggiEducationalElectronic/` + searchKeyword)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }

    async smallBusinessLibrarySearch(typeSearch, searchKeyword) {
        try {
            return (await axiosInstance.get(`api/v1/smallBusiness/` + searchKeyword)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }

    async allLibrarySearch(typeSearch, searchKeyword) {
        try {
            return (await axiosInstance.get(`api/v1/allLibraryVirtualThreadAsyncSearch/` + searchKeyword)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }
}

// Usage
const librarySearchRepository = new LibrarySearchRepository();
export default librarySearchRepository;
