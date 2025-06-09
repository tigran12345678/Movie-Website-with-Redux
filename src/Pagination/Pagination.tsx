
import './Pagination.css'

function Pagination({totalPosts, postsPerPage, setCurrentPage}: {totalPosts: number, postsPerPage: number, setCurrentPage: Function}){
    let pages =[];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pages.push(i); 
    }

    return(
        <div className="paginationButtons">
            {pages.map((page) => {
              return <button onClick={() => setCurrentPage(page)}>{page}</button>  
            })}
        </div>
    )
}

export default Pagination