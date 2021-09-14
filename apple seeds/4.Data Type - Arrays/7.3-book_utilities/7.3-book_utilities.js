// 1
const book1 = {
    name: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    year: 1937
}
const book2 = {
    name: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    year: 1997
}
const book3 = {
        name: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        year: 1937
    }
    // 2
const bookUtils = {
    // 3
    getFirstPublished: function(book1, book2) {
        return book1.year < book2.year ? book1.year : book2.year;
    },
    // 4
    setNewEdition(book, editionYear) {
        return book.newEdition = editionYear;
    },
    // 5
    setLanguage(book, lang) {
        return book.newLanguage = lang;
    },
    // 6
    setTranslation(book, language, translator) {
        return book.translation = { translator: translator, language: language };
    },
    // 7
    setPublisher(book, name, location) {
        return book.publisher = { name: name, location: location };
    },
    // 8
    isSamePublisher(book1, book2) {
        return (book1.publisher.name == book2.publisher.name) == (book1.publisher.location == book2.publisher.location) ? "identical" : "Not identical";
    }
}

console.log(bookUtils.getFirstPublished(book1, book2));
console.log(bookUtils.setNewEdition(book1, 2016));
console.log(bookUtils.setLanguage(book1, 'Arabic'));
console.log(bookUtils.setTranslation(book1, 'Hebrew', 'Itay'));
console.log(bookUtils.setPublisher(book1, 'Oliver Napoleon Hill', 'United States'));
console.log(bookUtils.setPublisher(book3, 'Oliver Napoleon Hill', 'United States'));
console.log(bookUtils.isSamePublisher(book1, book3));
console.log(book1);
console.log(book3);