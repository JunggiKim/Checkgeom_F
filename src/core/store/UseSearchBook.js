import axios from "axios";
import axiosInstance from "../../util/axiosInstance.js";


export default async function searchBook( libraryType,
                                          typeSearch,
                                          searchKeyword,) {
    try{
        const response = await axiosInstance
            .get(`api/v1/gyeonggiDoCyberLibrarySearch/` + searchKeyword);
        return  response.data
    }  catch (e) {
        console.error(e)
        return []
    }
}