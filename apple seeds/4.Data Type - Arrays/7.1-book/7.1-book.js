const book = {
    author: 'Napolen Hill',
    title: 'Think And Grow Rich',
    publishYear: 1937,
    pages: 238,
    subject: 'self-improvement'
};

function printBook(theBook) {
    return `${theBook.title} was written by ${theBook.author} in ${theBook.publishYear} and promoted as a ${theBook.subject} book and had ${theBook.pages} pages.`;
}

console.log(printBook(book));