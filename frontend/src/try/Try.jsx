import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { flexbox } from '@chakra-ui/react';
// import './Slideshow.css'; // Add your own CSS for styling
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
    afterChange: (index) => setCurrentSlide(index)
  };

  const prod = [
    {
      id: 1,
      name: "Product 1",
      image: "https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      description: "Description for Product 1"
    },

    {
      id: 1,
      name: "Product 1",
      image: "https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      description: "Description for Product 1"
    },

    {
      id: 1,
      name: "Product 1",
      image: "https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      description: "Description for Product 1"
    },

    {
      id: 1,
      name: "Product 1",
      image: "https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      description: "Description for Product 1"
    },
  ]

  const products = [
    {

    },
    {

    },
    {

    },
    {

    }, {},
    {
      id: 1,
      name: "Product 1",
      image: "https://rukminim2.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      description: "Description for Product 1"
    },

    
    // Add more products here
  ];

  console.log(data);

  return (
    <DIV className="slideshow-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
          <div className='main'>

            {
              prod.map((el)=>(
                <div>
              <img width="50px" height="50px" src={el.image} alt={el.name} />
              <div className="product-info">
                <h2>{el.name}</h2>
                <p>{el.description}</p>
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
    background-color: red;
  }
  
  


`
