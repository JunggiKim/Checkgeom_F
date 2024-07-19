import React from "react";

const SearchResults = React.memo(({bookData}) => {

    if(bookData.length === 0){
        return (
            <p>검색된 결과가 없습니다.</p>
        )
    }

    const bookList = bookData.data.bookDtoList;
    const totalCount = bookData.data.totalCount;
    const moreViewLinks = bookData.data.moreViewLink;

    return (
        <div className="bookData-container">
            {
                bookList.map((book, index) => (
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

export default SearchResults;