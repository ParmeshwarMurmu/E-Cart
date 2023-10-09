import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { flexbox } from '@chakra-ui/react';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { womenKurtasKurtisBackend } from '../Redux/womenKurtasKurtisReducer/action';

export const WomenKuttasKutis = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [data, setData] = useState("");
    let kurtasKurtis;
    const dispatch = useDispatch()
    const {womenKurtasKurtisData, isLoading, isError, isData} = useSelector((store)=>{
    
        return {
            womenKurtasKurtisData: store.womenKurtasKurtisReducer.womenKurtasKurtisData,
            isLoading: store.womenKurtasKurtisReducer.isLoading,
            isData: store.womenKurtasKurtisReducer.isData,
            isError: store.womenKurtasKurtisReducer.isError
          
        }
    }, shallowEqual)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
        variableWidth: true,
    };

    
        
    
    if(isData){
        kurtasKurtis = [
            [
                womenKurtasKurtisData[0],
                womenKurtasKurtisData[1]
            ],
            [
                womenKurtasKurtisData[2],
                womenKurtasKurtisData[3]
            ],
            [
                womenKurtasKurtisData[4],
                womenKurtasKurtisData[5]
            ],
            [
                womenKurtasKurtisData[6],
                womenKurtasKurtisData[7]
            ]
        ]
    }

   


    useEffect(()=>{
        dispatch(womenKurtasKurtisBackend())
        
    }, [])
   
    

   

  return (
    <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
                { isData && kurtasKurtis.map((product) => (
                    <div key={product.id}>
                        <div className='main'>

                            {
                                product.map((el) => (
                                    <Link to={`/singleProduct/women/${el._id}`}>
                                    <div className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
                                        <img className='sliderImage' src={el.images[0]} alt={el.title} width = '200px' />
                                        
                                    </div>
                                    </Link>

                                ))
                            }



                            {/* Add more products here */}


                        </div>
                    </div>
                ))}
            </Slider>
            <div className="dot-indicators custom-dots">
                {isData && kurtasKurtis.map((_, index) => (
                    <div >
                        <span
                            key={index}
                            className={currentSlide === index ? 'active-dot' : 'dot'}
                            onClick={() => {
                                setCurrentSlide(index);
                
                                setData(123)

                            }}
                        />
                    </div>
                ))}
            </div>
        </DIV>
  )
}




const DIV = styled.div`
  margin-top: 30px;

  .main{
    display: flex;
    justify-content: space-between;
    
  }

.slider{
  width: 90%; /* Adjust the width as needed */
  margin: 0 auto; /* Center the slider */
 
}

--slider-arrow-color: #050505; 
  
  .slick-prev::before,
  .slick-next::before {
    color: var(--slider-arrow-color);
  }
  

  .slideshow-container{
    z-index: -1;
  }

  
@media screen and (max-width: 768px) {
      /* Your styles for large devices go here */

      .imgDiv{
          height: 170px;
      }

      .sliderImage{
           width: 170px;
      }

      .slider{

      }
   
      
    }

    @media screen and (max-width: 420px) {
      /* Your styles for large devices go here */

      .imgDiv{
          height: 70px;
      }

      .sliderImage{
           width: 150px;
      }

      .slider{
        height: 225px;
      }
   
      
    }

    @media screen and (max-width: 510px) {
      /* Your styles for large devices go here */

      .slider{
        height: 245px;
      }
   
      
    }


`

