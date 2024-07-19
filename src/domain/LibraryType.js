class LibraryEnum {
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

 const LibraryType = new LibraryEnum({
    ALL: 'all',
    GYEONGGIDO_CYBER_LIBRARY: 'gyeonggiDoCyberLibrary',
    GYEONGGI_EDUCATIONAL_ELECTRONIC: 'gyeonggiEducationalElectronic',
    SMALL_BUSINESS: 'smallBusiness'
});




export  default LibraryType