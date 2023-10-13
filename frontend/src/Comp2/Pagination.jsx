import { Button } from '@chakra-ui/react';
import React from 'react'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);
  
    return (
      <div>
        {pageNumbers.map((page) => (
          <Button style={{margin: "5px"}}
            key={page}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </Button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
 
  
  
  
