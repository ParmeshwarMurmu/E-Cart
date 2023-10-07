
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import { useDragControls } from 'framer-motion';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { womenSareeData } from '../Redux/womenSareeReducer/action';
import { Link } from 'react-router-dom';

export const WomenSlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dates, setDates] = useState("");
    // const [saree, setSaree] = useState([])
    let saree;
    const dispatch = useDispatch()

    const { data, isLoading, isError, isData } = useSelector((store) => {

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





    const products = [
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

                                        <Link to={`/singleProduct/women/${element._id}`}>
                                        <div key={index} style={{ marginRight: "20px", height: "250px" }}>
                                            <img width="200px" src={element.images[0]} alt={"p"} />


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
                {products.map((_, index) => (
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


`
