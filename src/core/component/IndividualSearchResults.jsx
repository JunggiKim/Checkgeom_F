import React from "react";
import './SearchResults.css';
import libraryType from "../../constant/LibraryType.js";
import LibraryType from "../../constant/LibraryType.js"; // 스타일 파일을 별도로 관리

const IndividualSearchResults = React.memo(({bookData}) => {

    console.log(bookData)

// 변환된 한글 값

    if(bookData.length === 0){
        return (
            <p>검색된 결과가 없습니다.</p>
        )
    }
        //TODO
    const bookList = bookData.bookDtoList;
    const totalCount = bookData.totalCount;
    const moreViewLinks = bookData.moreViewLink;
    return (
        <div className="bookData-container">
            <div className="bookData-header">
                <p> 검색한 도서관 {bookData.libraryTypeText}</p>
                <p className="bookData-count">
                    총 검색 결과: {totalCount}개
                </p>
                {moreViewLinks.length > 0 && (
                    <div className="moreViewLink-container">
                        {moreViewLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link}
                                className="moreViewLink"
                                target="_blank"
                                rel="noopener noreferrer">
                                더보기
                            </a>
                        ))}
                    </div>)}

            </div>
            {bookList.map((book, index) => (
                <div key={index} className="book-card">
                    <img
                        src={book?.bookImageLink}
                        alt={book?.title}
                        className="book-image"
                    />
                    <div className="book-info">
                        <h3 className="book-title">{book?.title}</h3>
                        <p className="book-author">{book?.author}</p>
                        <p className="book-publisher">{book?.publisher}</p>
                        <p className="book-date">{book?.publicationDate}</p>
                    </div>
                </div>
            ))
            }
        </div>
    );
});


export default IndividualSearchResults;