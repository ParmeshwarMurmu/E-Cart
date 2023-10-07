
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { flexbox } from '@chakra-ui/react';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { womenHeelsTrendingData } from '../Redux/shoeHeelsTrendingReducer/action';


export const WomenHeelsTrending = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [data, setData] = useState("");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
        variableWidth: true,
    };

    const dispatch = useDispatch();
    let womenHeels;

    const {heels, isLoading, isData, isError } = useSelector((store)=>{

        return {
           heels: store.shoesHeelsTrendingReducer.heels,
           isLoading: store.shoesHeelsTrendingReducer.isLoading,
           isData: store.shoesHeelsTrendingReducer.isData,
           isError: store.shoesHeelsTrendingReducer.isError,
        }
    }, shallowEqual)

    if(isData){
        womenHeels = [
            [
                heels[3],
                heels[4],

            ],
            [
                heels[5],
                heels[0],

            ],
            [
                heels[1],
                heels[2]
            ],
            [
                heels[13],
                heels[15]
            ]
        ]
    }


    useState(()=>{
        dispatch(womenHeelsTrendingData())

    },[])

   

  return (
    <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
                {isData && womenHeels.map((product) => (
                    <div key={product.id}>
                        <div className='main'>

                            {
                                product.map((el) => (
                                    <Link to={`/singleProduct/shoes/${el._id}`}>
                                    <div className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
                                        <img className='sliderImage' src={el.images[0]} alt={el.name} width = '200px' />
                                        
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
                {isData && womenHeels.map((_, index) => (
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


