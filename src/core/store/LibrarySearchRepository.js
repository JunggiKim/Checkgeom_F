import axiosInstance from "../../util/axiosInstance.js";



// 경기교육전자도서관은 제목만 검색가능

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
            return (await axiosInstance.get(`api/v1/allLibrary/`+ searchKeyword)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }
    async check(typeSearch, searchKeyword) {
        try {
            return (await axiosInstance.get(`api/v1/ok`)).data;
        } catch (e) {
            console.error(e);
            return '검색에 실패했습니다';
        }
    }
}

// Usage
const librarySearchRepository = new LibrarySearchRepository();
export default librarySearchRepository;
