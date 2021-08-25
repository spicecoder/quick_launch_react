import { useEffect, useState } from "react";
import "./index.css";

const Cards = () => {
  const [card, setCards] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  useEffect(() => {
    fetch(`http://localhost:8000/posts?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, posts }) => {
        setCards(posts);
        setNumberOfPages(totalPages);
      });
  }, [pageNumber]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="cards">
        {card.map((cd) => (
          <div className="post">
            <small>{cd.id}</small>
            <h1>{cd.title}</h1>
            <p>{cd.body}</p>
          </div>
        ))}
      </div>
      <div style={{ width: "300px", margin: "auto", marginBottom: "50px" }}>
        <button onClick={gotoPrevious}>Previous</button>
        {pages.map((pageIndex) => (
          <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
            {pageIndex + 1}
          </button>
        ))}
        <button onClick={gotoNext}>Next</button>
      </div>
    </div>
  );
};
export default Cards;
