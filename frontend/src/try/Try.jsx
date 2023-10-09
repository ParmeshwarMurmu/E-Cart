import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { flexbox } from '@chakra-ui/react';
import styled from "styled-components"

const Slideshow = () => {
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
};

export default Slideshow;

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
{/* <button class="Btn"> */}

        {/* <BiLogOut color='white' />  */}

        {/* <div class="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div> */}
        {/* <div class="sign"><svg viewBox="0 0 512 512"><BiLogOut color='white' /> </svg></div>
  
  <div class="text">Login</div> */}

        {/* </button>  BiLogIn*/}