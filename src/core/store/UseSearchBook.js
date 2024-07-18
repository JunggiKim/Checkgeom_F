import axios from "axios";


export default async function searchBook( libraryType,
                                             typeSearch,
                                             searchKeyword,) {
    return await axios
        .get(`http://localhost:8080/api/v1/gyeonggiDoCyberLibrarySearch/` + searchKeyword)
        .then(response => console.error(response))
        .catch(response => console.error(response))
}