import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { LoaderComp } from '../Comp2/LoaderComp';
import { Link } from 'react-router-dom';
import { menFormalData } from '../Redux/menFormalSlideShowReducer/action';

export const MenFormalSlideShow = () => {
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
    let formalShirts;

    const { menFormal, isData,isLoading,isError} = useSelector((store)=>{

        return {

            isLoading: store.menFormalSlideShowReducer.isLoading,
            menFormal: store.menFormalSlideShowReducer.menFormal,
            isData: store.menFormalSlideShowReducer.isData,
            isError: store.menFormalSlideShowReducer.isError,
          
        }

    }, shallowEqual)


    if(isData){
      formalShirts = [
        [
          menFormal[0],
          menFormal[1],
        ],
        [
          menFormal[2],
          menFormal[3],
        ]
       
      ]

    }

    useEffect(() => {
        dispatch(menFormalData())
    }, [])

    
    



    return (
        <DIV className="slideshow-container">
            {isLoading ? <LoaderComp /> : <div>
            <Slider {...settings} className='slider'>
                {
                    isData && formalShirts.map((product) => (
                        <div key={product.id}>
                            <div className='main'>

                                {
                                    isLoading ? <LoaderComp />   : product.map((el) => (
                                        <Link to={`/singleProduct/men/${el._id}`}>
                                        <div key={el._id} className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
                                            <img className='sliderImage'  width="200px" src={el.images[0]} alt={el.title} />
                                            
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
                {isData && formalShirts.map((_, index) => (
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


    @media screen and (max-width: 500px) {
      /* Your styles for large devices go here */

      .slider{
        height: 140px;
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
  width: 120%;
}

.sliderImage{
  height: 120px;
  width: 110px;
}

    }




`





