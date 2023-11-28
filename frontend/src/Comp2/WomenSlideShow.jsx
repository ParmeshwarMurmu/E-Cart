
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { womenSareeData } from '../Redux/womenSareeReducer/action';
import { Link } from 'react-router-dom';

export const WomenSlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dates, setDates] = useState("");
    // const [saree, setSaree] = useState([])
    let saree;
    const dispatch = useDispatch()

    const { data,  isData } = useSelector((store) => {

        return {
            data: store.womenSareeReducer.data,
            isLoading: store.womenSareeReducer.isLoading,
            isData: store.womenSareeReducer.isData,
            isError: store.womenSareeReducer.isError
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




    

    if (isData) {
        saree = [
            [
                data[0],
                data[1]

            ],
            [
                data[2],
                data[3]

            ],
            [
                data[4],
                data[5]

            ],
            [
                data[6],
                data[7]

            ]

        ]

    }

 


    useEffect(() => {
        dispatch(womenSareeData())

    }, [])









    return (
        <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
                {isData &&
                
                    saree.map((product) => (
                        <div key={product.id}>
                            <div className='main'>

                                {
                                    product.map((element, index) => (

                                        <Link to={`/singleProduct/women/${element._id}/${element.category}`}>
                                        <div key={index} className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
                                            <img className='sliderImage' width="200px" src={element.images[0]} alt={"p"} />


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
                {isData && saree.map((_, index) => (
                    <div >
                        <span
                            key={index}
                            className={currentSlide === index ? 'active-dot' : 'dot'}
                            onClick={() => {
                                setCurrentSlide(index);

                                setDates(123)

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
        height: 130px;
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
  width: 190%;
}

.sliderImage{
  height: 120px;
  width: 110px;
}
      
    }

    


`
