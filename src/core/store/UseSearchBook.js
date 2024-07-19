import axiosInstance from "../../util/axiosInstance.js";


export const gyeonggidoCyberLibrarySearch = async (
    typeSearch,
    searchKeyword) => {
    try {
        return (await axiosInstance
            .get(`api/v1/gyeonggiDoCyberLibrarySearch/` + searchKeyword)).data;
    } catch (e) {
        console.error(e)
        return '검색에 실패했습니다'
    }
}

export const gyeonggiEducationalLibrarySearch = async (
    typeSearch,
    searchKeyword) => {
    try {
        return (await axiosInstance
            .get(`api/v1/gyeonggiEducationalElectronicLibrary/` + searchKeyword)).data;
    } catch (e) {
        console.error(e)
        return '검색에 실패했습니다'
    }
}

export const SmallBusinessLibrarySearch = async (
    typeSearch,
    searchKeyword) => {
    try {
        return (await axiosInstance
            .get(`api/v1/smallBusinessLibrary/` + searchKeyword)).data;
    } catch (e) {
        console.error(e)
        return '검색에 실패했습니다'
    }
}


export const AllLibrarySearch = async (
    typeSearch,
    searchKeyword) => {
    try {
        return (await axiosInstance
            .get(`api/v1/gyeonggiDoCyberLibrarySearch/` + searchKeyword)).data;
    } catch (e) {
        console.error(e)
        return []
    }
}

