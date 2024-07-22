class LibraryTypeEnum {
    constructor(englishNames, koreanNames) {
        Object.keys(englishNames).forEach(key => {
            this[key] = { english: englishNames[key], korean: koreanNames[key] };
        });

        // 상수 객체를 변경할 수 없도록 동결
        Object.freeze(this);
    }

    static getEnglishValues(enumObj) {
        return Object.values(enumObj).map(item => item.english);
    }

    static getKoreanNames(enumObj) {
        return Object.values(enumObj).map(item => item.korean);
    }

    static getKeys(enumObj) {
        return Object.keys(enumObj);
    }

    static getByEnglishName(enumObj, englishName) {
        return Object.values(enumObj).find(item => item.english === englishName);
    }
    static getKoreanByEnglishName(enumObj, englishName) {
        console.log(enumObj)
        console.log(englishName)

        const item = this.getByEnglishName(enumObj, englishName);
        return item ? item.korean : null;
    }

}

const LibraryType = new LibraryTypeEnum(
    {
        ALL: 'all',
        GYEONGGIDO_CYBER: 'gyeonggiDoCyberLibrary',
        GYEONGGI_EDUCATIONAL: 'gyeonggiEducationalElectronic',
        SMALL_BUSINESS: 'smallBusiness'
    },
    {
        ALL: '전체',
        GYEONGGIDO_CYBER: '경기도 사이버 도서관',
        GYEONGGI_EDUCATIONAL: '경기도 교육 전자 도서관',
        SMALL_BUSINESS: '소상공인 도서관'
    }
);

export default LibraryType;