import React from 'react';

const books = [
    { id: 1, bname: 'Master React', price: 670 },
    { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 3, bname: 'Mongo Essentials', price: 450 }
];

function BookDetails() {
    return (
        <div className="section">
            <h1>Book Details</h1>
            {books.map(book => (
                <div key={book.id}>
                    <h3>{book.bname}</h3>
                    <h5>{book.price}</h5>
                </div>
            ))}
        </div>
    );
}

export default BookDetails;
