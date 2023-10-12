
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { flexbox } from '@chakra-ui/react';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { menTrendingShoesData } from '../Redux/menShoeTrendingReducer/action';
import { Link } from 'react-router-dom';

export const MenShoesTrending = () => {
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

    const dispatch = useDispatch()
    let casualShoe;
    const {menCasualShoes, isLoading, isData, isError} = useSelector((store)=>{

        return {
            menCasualShoes: store.menShoeTrendingReducer.menCasualShoes,
            isLoading: store.menShoeTrendingReducer.isLoading,
            isData: store.menShoeTrendingReducer.isData,
            isError: store.menShoeTrendingReducer.isError,
        }
    }, shallowEqual)



    if(isData){
        casualShoe = [
            [
               
                menCasualShoes[6]
            ],
            [
                menCasualShoes[5],
                menCasualShoes[4]
            ],
            [
                menCasualShoes[3],
                menCasualShoes[2]
            ],
            [
                menCasualShoes[1],
                menCasualShoes[0]
            ]
        ]
    }

    useEffect(()=>{
        dispatch(menTrendingShoesData())
    }, [])

   

  return (
    <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
                {isData && casualShoe.map((product, index) => (
                    <div key={index+1}>
                        <div className='main'>

                            {
                                product.map((el) => (
                                    <Link to={`/singleProduct/shoes/${el._id}`}>
                                    <div key={el._id} className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
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
                {isData && casualShoe.map((_, index) => (
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
        /* border: 2px solid red; */
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

