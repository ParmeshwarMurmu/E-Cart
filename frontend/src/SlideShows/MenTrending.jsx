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


export const MenTrending = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [data, setData] = useState("");
    let [prod, setProd] = useState([])

    const [tShirts, setTShirts] = useState([])

    const dispatch = useDispatch();

    const { isLoading,isError, trackPants} = useSelector((store)=>{

        return {
            isLoading: store.menTrackPants.isLoading,
            isError: store.menTrackPants.isError,
            trackPants: store.menTrackPants.trackPants
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

    useEffect(() => {
        
        dispatch(trackPantsLoading())
        axios.get('https://full-4qyv.onrender.com/home/men/category?category=casual shirts')
            .then((res) => {
                setTShirts(res.data.category)
                dispatch(trackPantsSuccess(res.data.category))
                setProd([
                    [
                        res.data.category[0],
                        res.data.category[5],
                        res.data.category[2],
                       
                    ],
                    [
                    
                        res.data.category[3],
                        res.data.category[4],
                        
                        res.data.category[1],
                      
                        
                    ],
                    
                ])

            })
            .catch((err) => {
                dispatch(trackPantsFailure())
            })
    }, [])

    // console.log(isError, trackPants);



    return (
        <DIV className="slideshow-container">
            {isLoading ? <LoaderComp /> : <div>
            <Slider {...settings} className='slider'>
                {
                    prod && prod.map((product) => (
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
                {prod.map((_, index) => (
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
