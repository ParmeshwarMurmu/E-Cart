import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  const [searchParams, setearchParams] = useSearchParams()
  

  // const initialPage = searchParams.get("page")
  // const [pageNoInUrl, setPageNoInUrl] = useState(initialPage || 1);
  // const pageNoInUrl = searchParams.get('page')
    
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    // console.log(totalPages, "totalPage");
    // console.log(currentPage, "currentPage");
    // console.log(pageNoInUrl, "PageNumberURL");

    
 
  
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
 
  
  
  
