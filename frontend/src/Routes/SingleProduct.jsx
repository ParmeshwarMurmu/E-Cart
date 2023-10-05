import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { singlePageData } from '../Redux/SingleProductPage/action'
import { SingleProductLoader } from '../Comp2/SingleProductLoader'
import { Box, Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { FaRupeeSign } from 'react-icons/fa';

export const SingleProduct = () => {

  const [index, setIndex] = useState(0)

  const { category, id } = useParams()
  const dispatch = useDispatch()

  const { isLoading, isError, data, isData } = useSelector((store) => {

    return {
      isLoading: store.singleProductPage.isLoading,
      isError: store.singleProductPage.isError,
      data: store.singleProductPage.data,
      isData: store.singleProductPage.isData

    }
  }, shallowEqual)

  console.log(data);
  console.log(isData, "isData");

 

  useEffect(() => {
    dispatch(singlePageData(id, category))
  }, [])



  return (
    <DIV>

      <div className='loader'>
        {
          isLoading && <SingleProductLoader />
        }
      </div>

      <div className='singleData'>
        {
          isData && <div style={{ border: "2px solid black",display: "flex" }}>

            <div  style={{ border: "2px solid blue", display: "flex" }}>
            <div style={{ border: "2px solid green" }}>
              <Box boxSize='sm'>
                <Image src={data.images[index]} alt={data.title} />
              </Box>
            </div>


            <div>
              {
                data.images.map((el, ind) => (
                  <div key={ind}
                   style={{marginBottom: "10px",
                   padding: "5px",
                    boxShadow: ind === index ? ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' : ''
                    }} >
                    <Image
                     onClick={()=>{(setIndex(ind))}}
                      boxSize='70px'
                      objectFit='cover'
                      src={el}
                      alt='Dan Abramov'
                    />
                  </div>
                ))
              }
            </div>
            </div>

            <div>
            <Text fontSize='2xl'>{data.brand}</Text>
            <Text fontSize='lg'>{data.title}</Text>            
            <Text fontSize='lg'><span><FaRupeeSign /></span> {data.price}</Text>     
            <div style={{display: 'flex'}}>   
            {
              data.size.map((el, sizeIndex)=>(
                <div key={sizeIndex} style={{margin: "10px", display: 'flex'}}>
                  <Text fontSize='lg'>{el}</Text>         
                </div>
              ))
            }    
            </div>
            </div>


          </div>
        }

        <div>

        </div>

        <div>

        </div>

      </div>
    </DIV>
  )
}

// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
const DIV = styled.div`



.loader{
  display: flex;
  justify-content: center;
  align-items: center;
}

.singleData{
  
  border: 2px solid red;
}



`