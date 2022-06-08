import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const data = useSelector((state) => state.book);
  return (
    <div className="books-container">
      {data.map((e) => (
        <Book
          key={e.id}
          id={e.id}
          title={e.title}
          author={e.author}
          genere={e.category}
          currentChapter={e.currentChapter}
          progress={e.progress}
        />
      ))}
      <Form />
    </div>
  );
};
export default Books;
