class LibrarySearchTypeEnum {
    constructor(enumObj) {
        Object.keys(enumObj).forEach(key => {
            this[key] = enumObj[key];
        });

        // 상수 객체를 변경할 수 없도록 동결
        Object.freeze(this);
    }

    static getValues(enumObj) {
        return Object.values(enumObj);
    }

    static getKeys(enumObj) {
        return Object.keys(enumObj);
    }
}

 const LibrarySearchType = new LibrarySearchTypeEnum({
    ALL: 'all',
    AUTHOR: 'author',
    TITLE: 'title',
});




export  default LibrarySearchType