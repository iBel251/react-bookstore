import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, author, genere, currentChapter, progress,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book-card">
      <div className="book-left-section">
        <p className="book-genere">{genere}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <ul className="book-btns">
          <li>Comments</li>
          <div className="line-vertical" />
          <li><button className="remove-btn" type="button" onClick={() => dispatch(removeBook(id))}>Remove</button></li>
          <div className="line-vertical" />
          <li>Edit</li>
        </ul>
      </div>
      <div className="book-middle-section">
        <div className="progressbar-container">
          <CircularProgressbar value={progress} />
        </div>
        <div>
          <p>{`${progress}%`}</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-right-section">
        <p>CURRENT CHAPTER</p>
        <p>{currentChapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genere: PropTypes.string.isRequired,
  currentChapter: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};
export default Book;
