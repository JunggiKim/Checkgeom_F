import React from "react";
import './SearchResults.css';
import IndividualSearchResults from "./IndividualSearchResults.jsx"; // 스타일 파일을 별도로 관리

const AllSearchResults = React.memo(({AllLibraryBookData}) => {

    console.log(AllLibraryBookData)
    if(AllLibraryBookData.length === 0){
        return (
            <p>검색된 결과가 없습니다.</p>
        )
    }
    const bookDataList = AllLibraryBookData.librarySearchServiceResponseList
    console.log(bookDataList)

    return (
        <div className="allSearchResults-container">
            {bookDataList.map((libraryData) =>
                (
                <IndividualSearchResults
                    bookData={libraryData}
                />
            ))
            }

        </div>

    );

});


export default AllSearchResults;