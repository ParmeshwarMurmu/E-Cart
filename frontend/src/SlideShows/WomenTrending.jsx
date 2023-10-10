import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { flexbox } from '@chakra-ui/react';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { womenTrendingBackend } from '../Redux/womenTrendingReducer/action';
import { Link } from 'react-router-dom';

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

    
        
         
    const products = [

        [
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/y/d/t/xl-tr-bandhani-trahimam-original-imagg6gk5qtjhhjz.jpeg?q=70",
                description: "Description for Product 1"
            },

            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/r/m/9/l-red-har-48-hervastra-original-imaggjzgk4sjadrc.jpeg?q=70",
                description: "Description for Product 1"
            },
          
        ],

        [
            
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/b/w/m-133-wine-kurta-pant-dupatta-set-ziva-fashion-original-imag892weuurbar2-bb.jpeg?q=70",
                description: "Description for Product 1"
            },
            
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/khdqnbk0/ethnic-set/u/f/j/xl-ie26kd9bk1857-indo-era-original-imafxeqkwr3nzxzd.jpeg?q=70",
                description: "Description for Product 1"
            },
            

            
        ],

        [
            
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/l2z26q80/ethnic-set/s/n/m/xxl-blue-indigoset-klosia-original-image7c4dckmy2tt.jpeg?q=70",
                description: "Description for Product 1"
            },
            
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/k/6/a/s-chaaya-suit-klosia-original-imagkfwhm9gkyush.jpeg?q=70",
                description: "Description for Product 1"
            },
          

        ]
       


        // Add more products here
    ];

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
                { isData && womenTrending.map((product, inde) => (
                    <div key={inde}>
                        <div className='main'>

                            {
                                product.map((el) => (
                                    <Link to={`/singleProduct/women/${el._id}`}>
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
                {products.map((_, index) => (
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

