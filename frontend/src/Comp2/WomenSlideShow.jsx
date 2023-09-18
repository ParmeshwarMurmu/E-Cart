
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"

export const WomenSlideShow = () => {
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
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/c/g/j/xl-tr-prashant-trahimam-original-imagp7xujma8hzbh.jpeg?q=70",
                description: "Description for Product 1"
            },
    
            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/y/d/t/xl-tr-bandhani-trahimam-original-imagg6gk5qtjhhjz.jpeg?q=70",
                description: "Description for Product 1"
            },

            {
                id: 1,
                name: "Product 1",
                image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/y/d/t/xl-tr-bandhani-trahimam-original-imagg6gk5qtjhhjz.jpeg?q=70",
                description: "Description for Product 1"
            },

    ]

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

    let ind = 0

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
    /* background-color: red; */
  }

.slider{
  width: 90%; /* Adjust the width as needed */
  margin: 0 auto; /* Center the slider */
  /* height: 300px; */
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
