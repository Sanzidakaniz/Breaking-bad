import React, { useEffect, useState } from "react";
import Character from '../Character/Character';
import Search from '../Header/Search/Search';
import "./Characters.css";
const renderData = (characters) => {
  return (
    <div>
                {
                    characters.map(character=><Character
                   key={character.char_id} character={character}></Character>)
                }
              </div>
  );
};

function PaginationComponent() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('')
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(characters.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch(`https://breakingbadapi.com/api/characters?name=${query}`)
      .then((response) => response.json())
      .then((json) => setCharacters(json));
  }, [query]);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

 

  return (
    <>
        <Search getQuery={(q) => setQuery(q)}/>
      {renderData(currentItems)}
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    
    </>
  );
}

export default PaginationComponent;















// import React, { useEffect, useState } from 'react';
// import Character from '../Character/Character';
// import Search from '../Header/Search/Search';
// import './Characters.css';
// import ReactPaginate from "react-paginate";

// const Characters = () => {
//     const [characters,setCharacters]=useState([]);
//     const [query, setQuery] = useState('')
//     const [pageCount, setpageCount] = useState(0);

//   let limit = 10;

//   useEffect(() => {
//     const getComments = async () => {
//       const res = await fetch(
//         `https://breakingbadapi.com/api/characters?_page=1&_limit=${limit}`
      
//       );
//       const data = await res.json();
//       const total = res.headers.get("x-total-count");
//       setpageCount(Math.ceil(total / limit));
//       // console.log(Math.ceil(total/12));
//       setCharacters(data);
//     };

//     getComments();
//   }, [limit]);

//   const fetchComments = async (currentPage) => {
//     const res = await fetch(
//       `https://breakingbadapi.com/api/characters?_page=${currentPage}&_limit=${limit}`
    
//     );
//     const data = await res.json();
//     return data;
//   };

//   const handlePageClick = async (data) => {
//     console.log(data.selected);

//     let currentPage = data.selected + 1;

//     const commentsFormServer = await fetchComments(currentPage);

//     setCharacters(commentsFormServer);
//     // scroll to the top
//     //window.scrollTo(0, 0)
//   };
 

//     // useEffect(()=>{
//     //    fetch(`https://breakingbadapi.com/api/characters?name=${query}`)
//     //    .then(res=>res.json())
//     //    .then(data=>setCharacters(data))
//     // },[query])



    
     
//     return (
//         <div>
//        <Search getQuery={(q) => setQuery(q)}/>
//        <div>
//            {
//                characters.map(character=><Character
//                key={character.char_id} character={character}></Character>)
//            }
//            </div>

//            <ReactPaginate
//         previousLabel={"previous"}
//         nextLabel={"next"}
//         breakLabel={"..."}
//         pageCount={pageCount}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={3}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination justify-content-center"}
//         pageClassName={"page-item"}
//         pageLinkClassName={"page-link"}
//         previousClassName={"page-item"}
//         previousLinkClassName={"page-link"}
//         nextClassName={"page-item"}
//         nextLinkClassName={"page-link"}
//         breakClassName={"page-item"}
//         breakLinkClassName={"page-link"}
//         activeClassName={"active"}
//       />
  
//            </div>
//     );
// };

// export default Characters;