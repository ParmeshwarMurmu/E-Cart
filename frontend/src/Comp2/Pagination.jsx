import { Button } from '@chakra-ui/react';
import React from 'react'


const Pagination = ({ totalPages, currentPage, onPageChange }) => {


    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div>
        {pageNumbers.map((page) => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            isDisabled = {page == currentPage}
            variant={'none'}
            m={2}
            p={0}
            style={{
              border: `1px solid ${page == currentPage? 'blue' : 'black'}`,

              
            }}
          >
            {page}
          </Button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
 
  
  
  
