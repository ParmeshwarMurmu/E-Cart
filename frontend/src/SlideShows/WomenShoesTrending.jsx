
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { womenHeelsTrendingData } from '../Redux/shoeHeelsTrendingReducer/action';
import { Link } from 'react-router-dom';
import { FinalLoader } from '../Comp2/FinalLoader';

export const WomenShoesTrending = () => {
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
                heels[14],
                heels[6]
            ],
            [
                heels[12],
                heels[11]
            ],
            [
                heels[10],
                heels[9]
            ],
            [
                heels[8],
                heels[7]
            ]
        ]
    }


    useState(()=>{
        dispatch(womenHeelsTrendingData())
    },[])

   

  return (
    <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
                {isLoading === true ? <FinalLoader />  : isData && womenHeels.map((product) => (
                    <div key={product.id}>
                        <div className='main'>

                            {
                                product.map((el) => (
                                    <Link to={`/singleProduct/shoe/${el._id}/${el.category}`}>
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
  width: 102%; /* Adjust the width as needed */
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

  .imgDiv {
  position: relative;
  /* box-shadow: 0 25px 50px rgba(0,0,0,0.55); */
  cursor: pointer;
  transition: all .3s;
}

.imgDiv:hover {
  transform: scale(0.9);
}

 
@media screen and (max-width: 1237px) {
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

    @media screen and (max-width: 1076px) {
      /* Your styles for large devices go here */

      .slider{
        height: 180px;
        width: 102%;
      }

      .sliderImage{
        height: 180px;
        width: 150px;
      }
   
      
    }

  
@media screen and (max-width: 768px) {
      /* Your styles for large devices go here */

      .imgDiv{
          height: 170px;
      }

      .sliderImage{
           width: 160px;
      }

      .slider{

      }
   
      
    }

    @media screen and (max-width: 639px) {
      /* Your styles for large devices go here */

      .slider{
        height: 150px;
        width: 102%;
      }

      .sliderImage{
        height: 150px;
        width: 130px;
      }
   
      
    }

    @media screen and (max-width: 500px) {
      /* Your styles for large devices go here */

      .slider{
        height: 120px;
        width: 102%;
      }

      .sliderImage{
        height: 120px;
        width: 110px;
      }
   
      
    }

    @media screen and (max-width: 425px) {
      /* Your styles for large devices go here */

      .imgDiv{
          /* width: 100px; */
      }

      /* .sliderImage{
        height: 140px;
      
      }

      .slider{
        height: 150px;
       width: 100%;
      } */

    }

   


`

