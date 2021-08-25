import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./index.css";

const Cards = () => {
  const [card, setCards] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(card.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setCards(json));
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="cards">
        {card.slice(pagesVisited, pagesVisited + usersPerPage).map((cd) => (
          <div className="card">
            <img className="avatar" src={cd.avatar_url} alt="avatar" />
            <div className="user-data">
              <h4 style={{ paddingLeft: "10px" }}>{cd.login}</h4>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};
export default Cards;
