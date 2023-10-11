import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../Redux/Store/store';
import { menFormalShoesData } from '../Redux/menFormalShoesReducer/action';
import { Link } from 'react-router-dom';

export const MenShoweslideshow = () => {
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
    let formalShoes;
    const {menFormalShoes, isLoading, isData, isError} = useSelector((store)=>{

        return {
            menFormalShoes: store.menFormalShoesReducer.menFormalShoes,
            isLoading: store.menFormalShoesReducer.isLoading,
            isData: store.menFormalShoesReducer.isData,
            isError: store.menFormalShoesReducer.isError,
        }
    })

    
        
         
 
    if(isData){
        formalShoes = [
            [
                menFormalShoes[7],
                menFormalShoes[6]
            ],
            [
                menFormalShoes[5],
                menFormalShoes[4]
            ],
            [
                menFormalShoes[3],
                menFormalShoes[2]
            ],
            [
                menFormalShoes[1],
                menFormalShoes[0]
            ]
        ]
    }

  

   

   useEffect(()=>{
    dispatch(menFormalShoesData())
   }, [])

    return (
        <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
                {isData && formalShoes.map((product) => (
                    <div key={product.id}>
                        <div className='main'>

                            {
                                product.map((el) => (

                                    <Link to={`/singleProduct/shoes/${el._id}`}>
                                    <div key={el._id} className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
                                        <img className='sliderImage' width="200px" src={el.images[0]} alt={el.name} />
                                        
                                    </div>
                                    </Link>

                                ))
                            }

                        </div>
                    </div>
                ))}
            </Slider>
            <div className="dot-indicators custom-dots">
                {isData && formalShoes.map((_, index) => (
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
        width: 89%;
      }

      .sliderImage{
        height: 150px;
        width: 130px;
      }
   
      
    }


  


`




