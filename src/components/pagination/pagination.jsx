import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './PaginationComponent.css'; // You can style the pagination component here
import { Link } from 'react-router-dom';

function PaginationComponent({ itemsPerPage, data }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [datax,setData] = useState([]);
    const [offset,setOffset] = useState(0);

    const handlePageClick = (event) => {
        const adjustedSelectedPage = event.selected;
        setCurrentPage(adjustedSelectedPage);
        
    };
    useEffect(() =>{
        setOffset(currentPage * itemsPerPage);
        setData(data.slice(offset, offset + itemsPerPage))
    },[currentPage])
    
    return (
        <div>
            <div className="parentOfAllArticles">
            {
              datax.map((item,index) =>   
                                                <div className="singleArticle" key={index}>
                                                        <Link to={{ pathname: `/detailsPage/${index}`}} state={item } className="links">
                                                             <h3>{item.title}</h3>
                                                             <img src={item.image} alt="something went wrong" />
                                                        </Link>
                                                </div>)
                                               
                                                
            }
            </div>

            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}

export default PaginationComponent;
