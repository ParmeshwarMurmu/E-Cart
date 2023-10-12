import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import axios from 'axios';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { trackPantsFailure, trackPantsLoading, trackPantsSuccess } from '../Redux/MenTrackPantsSlideShow/action';
import { LoaderComp } from '../Comp2/LoaderComp';
import { Link } from 'react-router-dom';
import { menTrendingData } from '../Redux/menTrendingSlideShowReducer/action';


export const MenTrending = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [data, setData] = useState("");
    let [prod, setProd] = useState([])

    const [tShirts, setTShirts] = useState([])
    
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
        variableWidth: true,
    };

    let trending;
    const dispatch = useDispatch();

    const { isLoading,isError, menTrending, isData} = useSelector((store)=>{

        return {
            isLoading: store.menTrendingSlideShowReducer.isLoading,
            isError: store.menTrendingSlideShowReducer.isError,
            isData: store.menTrendingSlideShowReducer.isData,
            menTrending: store.menTrendingSlideShowReducer.menTrending,
            trackPants: store.menTrendingSlideShowReducer.trackPants
        }

    }, shallowEqual)

    if(isData){
      trending = [
        [
          menTrending[0],
          menTrending[1],
        ],
        [
          menTrending[2],
          menTrending[3],
        ],
        [
          menTrending[4],
          menTrending[5],
        ]
      ]
    }

   

    useEffect(() => {
        dispatch(menTrendingData())
        
    }, [])

    // console.log(isError, trackPants);



    return (
        <DIV className="slideshow-container">
            {isLoading ? <LoaderComp /> : <div>
            <Slider {...settings} className='slider'>
                {
                    isData && trending.map((product) => (
                        <div key={product.id}>
                            <div className='main'>

                                {
                                    isLoading ? <LoaderComp />   : product.map((el) => (
                                        <Link to={`/singleProduct/men/${el._id}`}>
                                        <div key={el._id} className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
                                            <img className='sliderImage' width="200px" src={el.images[0]} alt={el.title} />
                        
                                        </div>
                                        </Link>

                                    ))
                                }



                                {/* Add more products here */}


                            </div>
                        </div>
                    ))
                }
            </Slider>
            <div className="dot-indicators custom-dots">
                {isData && trending.map((_, index) => (
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
            </div>
             }
        </DIV>
    );
}



const DIV = styled.div`
  
  .main{
    display: flex;
    justify-content: space-between;
    
  }

.slider{
  width: 90%; /* Adjust the width as needed */
  margin: 0 auto; /* Center the slider */
  /* border: 2px solid red; */
 
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
        border: 2px solid red;
        width: 77%;
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
        width: 89%;
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
