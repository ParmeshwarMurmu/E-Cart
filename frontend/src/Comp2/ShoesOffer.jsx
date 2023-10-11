
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { store } from '../Redux/Store/store';
import { womenFlatShoesData } from '../Redux/womenFlatShoeReducer/action';
import { Link } from 'react-router-dom';

export const ShoesOffer = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [data, setData] = useState("");

    const dispatch = useDispatch();
    let womenFlatShoes;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
        variableWidth: true,
    };

    const {flatShoes, isLoading, isData, isError} = useSelector((store)=>{

        return {
            flatShoes: store.womenFlatShoeReducer.flatShoes,
            isLoading: store.womenFlatShoeReducer.isLoading,
            isData: store.womenFlatShoeReducer.isData,
            isError: store.womenFlatShoeReducer.isError
        }
    }, shallowEqual)

    if(isData){
        womenFlatShoes = [
            [
                flatShoes[0],
                flatShoes[1]
            ],
            [
                flatShoes[2],
                flatShoes[3]
            ],
            [
                flatShoes[4],
                flatShoes[5]
            ],
            [
                flatShoes[6],
                flatShoes[7]
            ]
        ]
    }



    useEffect(()=>{
        dispatch(womenFlatShoesData())
    },[])



    
        
         
    // const products = [

    //     [
    //         {
    //             id: 1,
    //             name: "Product 1",
    //             image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/4/3/0/3-b-38-miyoko-yellow-original-imagtgawuxvghxta.jpeg?q=70",
    //             description: "Description for Product 1"
    //         },

    //         {
    //             id: 1,
    //             name: "Product 1",
    //             image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/8/s/p/6-a28pinkuk6-purplehunt-pink-original-imagtggghyhtkxwd.jpeg?q=70",
    //             description: "Description for Product 1"
    //         },
          
    //     ],

    //     [
            
    //         {
    //             id: 1,
    //             name: "Product 1",
    //             image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/6/1/s/7-a16greenuk7-purplehunt-green-original-imagtghh9gjwgzh2.jpeg?q=70",
    //             description: "Description for Product 1"
    //         },
            
    //         {
    //             id: 1,
    //             name: "Product 1",
    //             image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/w/r/b/8-tr-h-hb11-triksy-yellow-original-imagt97wazwcfnkf.jpeg?q=70",
    //             description: "Description for Product 1"
    //         },
            

            
    //     ],

    //     [
            
    //         {
    //             id: 1,
    //             name: "Product 1",
    //             image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/n/7/a/3-women-s-and-girls-fancy-stylish-light-weight-block-heel-kiwaoo-original-imagnvwewutqfkc2.jpeg?q=70",
    //             description: "Description for Product 1"
    //         },
            
    //         {
    //             id: 1,
    //             name: "Product 1",
    //             image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/q/c/c/7-criss-cross-babe-white-heels-gulmohar-fashion-white-original-imagt6urvuzeejhm.jpeg?q=70",
    //             description: "Description for Product 1"
    //         },
          

    //     ]
       


    //     // Add more products here
    // ];



   

    

    return (
        <DIV className="slideshow-container">
            <Slider {...settings} className='slider'>
                {isData && womenFlatShoes.map((product) => (
                    <div key={product.id}>
                        <div className='main'>

                            {
                                product.map((el, index) => (
                                    <Link to={`/singleProduct/shoes/${el._id}`}>
                                    <div key={index} className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
                                        <img className='sliderImage' width="200px" src={el.images[0]} alt={el.name} />
                                       
                                    </div>
                                    </Link>

                                ))
                            }



                        


                        </div>
                    </div>
                ))}
            </Slider>
            <div className="dot-indicators custom-dots">
                {isData && womenFlatShoes.map((_, index) => (
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



`



