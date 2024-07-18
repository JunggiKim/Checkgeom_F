//
// import { useEffect, useState } from "react";
// import useBookSearch from "../business/UseSearchBook.js";
//
// export default function SearchIndex() {
//     const [searchParams, setSearchParams] = useState(null);
//     const [searchTrigger, setSearchTrigger] = useState(false);
//
//     const result = useBookSearch(searchParams?.libraryType, searchParams?.typeSearch, searchParams?.searchKeyword);
//
//     const handleSubmitInput = () => {
//         const libraryType = document.querySelector('.libarySearch').value;
//         const typeSearch = document.querySelector('.typeSearch').value;
//         const searchKeyword = document.querySelector('.searchKeyword').value;
//         setSearchParams({ libraryType, typeSearch, searchKeyword });
//         setSearchTrigger(true);
//     };
//
//     useEffect(() => {
//         if (searchTrigger) {
//             console.log(result);
//             setSearchTrigger(false);
//         }
//     }, [searchTrigger]);
//
//     return (
//         <div>
//             <h1>검색하세요!</h1>
//
//             <div className="search_wrap fl after">
//                 <span className="search fl after">
//                     <label htmlFor="libary" className="blind">도서관 : </label>
//                     <select className="libarySearch">
//                         <option value="all">전체</option>
//                         <option value="gyeonggiDoCyberLibrary">경기도 사이버 전자 도서관</option>
//                         <option value="gyeonggiEducationalElectronic">경기 교육 전자 도서관</option>
//                         <option value="smallBusiness">소상 공인 전자 도서관</option>
//                     </select>
//                     <select className="typeSearch">
//                         <option value="all">전체</option>
//                         <option value="title">제목</option>
//                         <option value="author">저자</option>
//                     </select>
//                     <input type="text" className="searchKeyword" placeholder="검색어를 입력해 주세요" autoComplete="off" />
//                     <button className="searchButton" onClick={handleSubmitInput}>검색</button>
//                 </span>
//             </div>
//         </div>
//     );
// }


import useBookSearch from "../business/UseSearchBook.js";
import {useState} from "react";

export default function SearchIndex() {
    const [libraryType, setLibraryType] = useState("all");
    const [typeSearch, setTypeSearch] = useState("all");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [results, setResults] = useState([]);

    const handleSubmitInput = () => {
        const result = useBookSearch(libraryType, typeSearch, searchKeyword);
        setResults(result);
    };
    return (
        <div>
            <h1>검색하세요!</h1>
            <div className="search_wrap fl after">
                <span className="search fl after">
                    <label htmlFor="libary" className="blind">도서관 : </label>
                    <select
                        className="libarySearch"
                        value={libraryType}
                        onChange={(e) => setLibraryType(e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="gyeonggiDoCyberLibrary">경기도 사이버 전자 도서관</option>
                        <option value="gyeonggiEducationalElectronic">경기 교육 전자 도서관</option>
                        <option value="smallBusiness">소상 공인 전자 도서관</option>
                    </select>
                    <select
                        className="typeSearch"
                        value={typeSearch}
                        onChange={(e) => setTypeSearch(e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="title">제목</option>
                        <option value="author">저자</option>
                    </select>
                    <input
                        type="text"
                        className="searchKeyword"
                        placeholder="검색어를 입력해 주세요"
                        autoComplete="off"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <button className="searchButton" onClick={handleSubmitInput}>검색</button>
                </span>
            </div>
            <div className="results">
                {results.length > 0 ? (
                    results.map((result) => (
                        <div key={result.id} className="result-item">
                            <h3>{result.title}</h3>
                            <p>{result.author}</p>
                        </div>
                    ))
                ) : (
                    <p>검색 결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
}