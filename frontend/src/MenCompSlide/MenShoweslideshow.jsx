import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"

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

    
        
         
    const products = [

        [
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/4/3/0/3-b-38-miyoko-yellow-original-imagtgawuxvghxta.jpeg?q=70",
                description: "Description for Product 1"
            },

            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/8/s/p/6-a28pinkuk6-purplehunt-pink-original-imagtggghyhtkxwd.jpeg?q=70",
                description: "Description for Product 1"
            },
          
        ],

        [
            
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/6/1/s/7-a16greenuk7-purplehunt-green-original-imagtghh9gjwgzh2.jpeg?q=70",
                description: "Description for Product 1"
            },
            
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/w/r/b/8-tr-h-hb11-triksy-yellow-original-imagt97wazwcfnkf.jpeg?q=70",
                description: "Description for Product 1"
            },
            

            
        ],

        [
            
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/n/7/a/3-women-s-and-girls-fancy-stylish-light-weight-block-heel-kiwaoo-original-imagnvwewutqfkc2.jpeg?q=70",
                description: "Description for Product 1"
            },
            
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/q/c/c/7-criss-cross-babe-white-heels-gulmohar-fashion-white-original-imagt6urvuzeejhm.jpeg?q=70",
                description: "Description for Product 1"
            },
          

        ]
       


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
                                product.map((el) => (
                                    <div style={{ marginRight: "20px", height: "250px" }}>
                                        <img width="200px" src={el.image} alt={el.name} />
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




