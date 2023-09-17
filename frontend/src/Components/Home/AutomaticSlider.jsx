
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Alert, flexbox } from '@chakra-ui/react';
// import './Slideshow.css'; // Add your own CSS for styling
import styled from "styled-components"


export const AutomaticSlider = () => {
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
  
    const prod = [
      {
        id: 1,
        name: "Product 1",
        image: "https://rukminim2.flixcart.com/image/612/612/l3t2fm80/shirt/h/q/w/xxl-r-peacock-blue-stoneberg-original-imageum82pyz8c9q.jpeg?q=70",
        description: "Description for Product 1"
      },
  
      {
        id: 1,
        name: "Product 1",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/s/c/s-designer-shirts-blackcreek-original-imaghfagdm2xjuzt.jpeg?q=70",
        description: "Description for Product 1"
      },
  
    ]
  
    const products = [
      {
  
      },
      {
  
      },
      {
  
      }
     
  
      
      // Add more products here
    ];
  
    console.log(data);


   
  
    return (
      <DIV className="slideshow-container">
        <Slider {...settings} className='slider'>
          {products.map((product) => (
            <div key={product.id}>
            <div className='main'>
  
              {
                prod.map((el)=>(
                  <div style={{marginRight: "20px", height: "250px"}}>
                <img width="200px"  src={el.image} alt={el.name} />
                <div className="product-info">
                  {/* <h2>{el.name}</h2>
                  <p>{el.description}</p> */}
                </div>
              </div>
  
                ))
              }
              
  
  
              {/* Add more products here */}
  
              
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
    );
}


const DIV = styled.div`
  
  .main{
    display: flex;
    justify-content: space-between;
    /* background-color: red; */
  }

.slider{
  width: 90%; /* Adjust the width as needed */
  margin: 0 auto; /* Center the slider */
  height: 300px;
}

--slider-arrow-color: #050505; /* Override the color to red */
  
  .slick-prev::before,
  .slick-next::before {
    color: var(--slider-arrow-color);
  }
  

  .slideshow-container{
    z-index: -1;
  }


`
