import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { store } from '../Redux/Store/store';
import { menFormalShoesData } from '../Redux/menFormalShoesReducer/action';
import { Link } from 'react-router-dom';
import { menShoesBootsData } from '../Redux/menShoeBootsReducer/action';

export const MenShoesBootsSlideShow = () => {
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
    let boots;
    const {mensBoots, isLoading, isData, isError} = useSelector((store)=>{

        return {
            mensBoots: store.menShoeBootsReducer.mensBoots,
            isLoading: store.menShoeBootsReducer.isLoading,
            isData: store.menShoeBootsReducer.isData,
            isError: store.menShoeBootsReducer.isError,
        }
    }, shallowEqual)

    
        
         
 
    if(isData){
       boots = [
            [
                mensBoots[0],
                mensBoots[1]
            ],
            [
                mensBoots[2],
                mensBoots[3]
            ],
            [
                mensBoots[4]
            ],
           
        ]
    }

  

 

   useEffect(()=>{
    dispatch(menShoesBootsData())
   }, [])

    return (
        <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
                {isData && boots.map((product) => (
                    <div key={product.id}>
                        <div className='main'>

                            {
                                product.map((el) => (

                                    <Link to={`/singleProduct/shoes/${el._id}`}>
                                    <div key={el._id} style={{ marginRight: "20px", height: "250px" }}>
                                        <img width="200px" src={el.images[0]} alt={el.name} />
                                        
                                    </div>
                                    </Link>

                                ))
                            }

                        </div>
                    </div>
                ))}
            </Slider>
            <div className="dot-indicators custom-dots">
                {isData && boots.map((_, index) => (
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


`


