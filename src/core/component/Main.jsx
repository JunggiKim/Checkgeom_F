import {useState} from "react";

export default function Main() {



    return (
        <div>
            <h1>검색하세요!</h1>

            <div className="search_wrap fl after">
                    <span className="search fl after">
                        <label htmlFor="searchType2" className="blind">도서관</label>
                        <select className="select fl" id="searchType2">
                            <option value="all">전체</option>
                            <option value="gyeonggiDoCyberLibrary">경기도 사이버 전자 도서관</option>
                            <option value="gyeonggiEducationalElectronic">경기 교육 전자 도서관</option>
                            <option value="smallBusiness">소상 공인 전자 도서관</option>
                        </select>
                        <span className="fl line">｜</span>
                        <input type="text" className="input fl" placeholder="검색어를 입력해 주세요" id="searchKeyword" autoComplete="off"/>
                        <button className="btFind" id="searchButton">검색</button>
                    </span>
            </div>

        </div>
    );
}

