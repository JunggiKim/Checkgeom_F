import { useState, useEffect } from "react";
import useSearchBook from "/src/core/store/UseSearchBook.js";

export default (path) => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        useSearchBook(path)
            .then((data) => setUserData(data))
            .catch((res) => console.error(res.status));
    }, [path]);


    return [userData];
};

