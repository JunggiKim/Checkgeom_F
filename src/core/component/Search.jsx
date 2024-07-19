import useBookSearch from "../business/UseSearchBook.js";
import {useState} from "react";
import SearchResults from "./SearchResults.jsx";

export default function SearchIndex() {
    const [libraryType, setLibraryType] = useState("");
    const [typeSearch, setTypeSearch] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [bookData, setBookData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitInput = async (event) => {
        setIsLoading(true)
        event.preventDefault()
        const result = await useBookSearch(libraryType, typeSearch, searchKeyword);
        setIsLoading(false); // 로딩 완료 상태로 변경
        setBookData(result);
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
                        onChange={(e) => setLibraryType(e.target.value)}>
                        <option value="all">전체</option>
                        <option value="gyeonggiDoCyberLibrary">경기도 사이버 전자 도서관</option>
                        <option value="gyeonggiEducationalElectronic">경기 교육 전자 도서관</option>
                        <option value="smallBusiness">소상 공인 전자 도서관</option>
                    </select>
                    <select
                        className="typeSearch"
                        value={typeSearch}
                        onChange={(e) => setTypeSearch(e.target.value)}>
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
                <SearchResults bookData={bookData} />
            </div>
        </div>
    );
}