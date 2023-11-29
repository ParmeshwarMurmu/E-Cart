import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { womenTrendingBackend } from '../Redux/womenTrendingReducer/action';
import { Link } from 'react-router-dom';
import { FinalLoader } from '../Comp2/FinalLoader';

export const WomenTrending = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [data, setData] = useState("");
    let womenTrending;
    const dispatch = useDispatch()
    const {womenTrendingData, isLoading, isError, isData} = useSelector((store)=>{
    
        return {
            womenTrendingData: store.womenTrendingReducer.womenTrendingData,
            isLoading: store.womenTrendingReducer.isLoading,
            isError: store.womenTrendingReducer.isError,
            isData: store.womenTrendingReducer.isData
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
        womenTrending = [
            [
                womenTrendingData[0],
                womenTrendingData[1]
            ],
            [
                womenTrendingData[2],
                womenTrendingData[3]
            ],
            [
                womenTrendingData[4],
                womenTrendingData[5]
            ],
            [
                womenTrendingData[6],
                womenTrendingData[7]
            ]
        ]
    }


    useEffect(()=>{
        dispatch(womenTrendingBackend())
    }, [])
   
    
   

  return (
    <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
                { isLoading === true ? <FinalLoader />  : isData && womenTrending.map((product, inde) => (
                    <div key={inde}>
                        <div className='main'>

                            {
                                product.map((el) => (
                                    <Link to={`/singleProduct/women/${el._id}/${el.category}`}>
                                    <div key={el._id} className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
                                        <img className='sliderImage' src={el.images[0]} alt={el.title} width = '200px' />
                                        
                                    </div>
                                    </Link>

                                ))
                            }



                        


                        </div>
                    </div>
                ))}
            </Slider>
            <div className="dot-indicators custom-dots">
                {isData && womenTrending.map((_, index) => (
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
        width: 77%;
      }

      .sliderImage{
        height: 180px;
        width: 150px;
      }
   
      
    }

    @media screen and (max-width: 639px) {
      /* Your styles for large devices go here */

      .slider{
        height: 150px;
        width: 77%;
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
        width:89%;
      }

      .sliderImage{
        height: 120px;
        width: 110px;
      }
   
      
    }

    

    @media screen and (max-width: 425px) {

.slider{
  height: 140px;
  width: 100%;
}

.sliderImage{
  height: 120px;
  width: 110px;
}

}


`

