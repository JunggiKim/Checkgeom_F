import useBookSearch from "../business/LibrarySearchService.js";
import {useState} from "react";
import SearchResults from "./IndividualSearchResults.jsx";
import librarySearchService from "../business/LibrarySearchService.js";
import LibraryType from "/src/constant/LibraryType.js";
import AllSearchResults from "./AllSearchResults.jsx";
import LibrarySearchType from "../../constant/LibrarySearchType.js";
import IndividualSearchResults from "./IndividualSearchResults.jsx";

export default function SearchBar() {
    const [libraryType, setLibraryType] = useState("all");
    const [typeSearch, setTypeSearch] = useState("all");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [bookData, setBookData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isAllLibrarySearch, setIsAllLibrarySearch] = useState(false);

    const handleSubmitInput = async () => {
        setIsLoading(true)
        const resultBookData = await librarySearchService.search(libraryType, typeSearch, searchKeyword);
        setIsLoading(false); // 로딩 완료 상태로 변경
        console.log(resultBookData)
        setBookData(resultBookData.data);
    };

    return (
        <div>
            <h1>검색하세요</h1>
            <div className="search_wrap fl after">
                <span className="search fl after">
                    <label htmlFor="libary" className="blind">도서관 : </label>
                    <select
                        className="libarySearch"
                        value={libraryType}
                        onChange={(e) => setLibraryType(e.target.value)}>
                        <option value={LibraryType.ALL.english}>전체</option>
                        <option value= {LibraryType.GYEONGGIDO_CYBER.english}>경기도 사이버 전자 도서관</option>
                        <option value={LibraryType.GYEONGGI_EDUCATIONAL.english}>경기 교육 전자 도서관</option>
                        <option value={LibraryType.SMALL_BUSINESS.english}>소상 공인 전자 도서관</option>
                    </select>
                    <select
                        className="typeSearch"
                        value={typeSearch}
                        onChange={(e) => setTypeSearch(e.target.value)}>
                        <option value={LibrarySearchType.ALL}>전체</option>
                        <option value={LibrarySearchType.TITLE}>제목</option>
                        <option value={LibrarySearchType.AUTOR}>저자</option>
                    </select>
                    <input
                        type="text"
                        className="searchKeyword"
                        placeholder="검색어를 입력해 주세요"
                        autoComplete="off"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}/>
                    <button
                        className="searchButton"
                        onClick={handleSubmitInput}
                        disabled={isLoading}>
                    {isLoading ? `검색 중` : '검색'}
                    </button>
                </span>
            </div>
            <div className="results">
                {bookData.libraryTypeText === LibraryType.ALL.english ?
                    <AllSearchResults AllLibraryBookData={bookData} /> :
                    <IndividualSearchResults bookData={bookData} />
                }
            </div>
        </div>
    );
}