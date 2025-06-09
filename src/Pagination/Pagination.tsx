import React from "react";

function Pagination({totalPosts, postsPerPage, setCurrentPage} : {totalPosts: number, postsPerPage: number, setCurrentPage: Function}){
    let pages =[];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pages.push(i); 
    }

    return(
        <div className="paginationButtons">
            {pages.map((page, index) => {
              return <button onClick={() => setCurrentPage(page)}>{page}</button>  
            })}
        </div>
    )
}

export default Pagination