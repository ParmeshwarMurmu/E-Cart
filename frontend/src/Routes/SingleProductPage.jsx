import React, { useEffect, useState } from 'react'
import { SingleProductLoader } from '../Comp2/SingleProductLoader';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Heading, Image, Text } from '@chakra-ui/react';
import { BiSolidOffer } from 'react-icons/bi';
import { FaRupeeSign } from 'react-icons/fa';
import { MdLocalOffer, MdLocalShipping } from 'react-icons/md';
import styled from 'styled-components';
import { singlePageData } from '../Redux/SingleProductPage/action';
import { SingleProductAddToCart } from '../Comp2/SingleProductAddToCart';
import { SingleProductWhilist } from '../Comp2/SingleProductWhilist';
import { NavCategories } from '../Components/NavCategories';
import { relatedItemsData } from '../Redux/relatedItemsReducer/action';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FinalLoader } from '../Comp2/FinalLoader';
import { FinalSingleProductLoader } from '../Comp2/FinalSingleProductLoader';


export const SingleProductPage = () => {

    const [index, setIndex] = useState(0)
    const [sizeIndex, setSizeIndex] = useState(-1)
    const [userSize, setUserSize] = useState("")
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideData, setSlideData] = useState("");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
        variableWidth: true,
    };



    const { category, id, type } = useParams()
    const dispatch = useDispatch()
    let relatedData;

    const { isLoading, isError, data, isData, } = useSelector((store) => {

        return {
            isLoading: store.singleProductPage.isLoading,
            isError: store.singleProductPage.isError,
            data: store.singleProductPage.data,
            isData: store.singleProductPage.isData,



        }
    }, shallowEqual)

    const { isRelatedData, relatedItems, isLoadingRelated } = useSelector((store) => {

        return {

            relatedItems: store.relatedItemsReducer.relatedItems,
            isRelatedData: store.relatedItemsReducer.isRelatedData,
            isLoadingRelated: store.relatedItemsReducer.isLoadingRelated,


        }
    }, shallowEqual)

    if (isRelatedData) {
        relatedData = [
            [
                relatedItems[0],
                relatedItems[1],
            ],
            [
                relatedItems[2],
                relatedItems[3],
            ],
            [
                relatedItems[4],
                relatedItems[5],
            ]
        ]
    }



    const sizeHandler = (el, sizeInd) => {
        setSizeIndex(sizeInd)
        setUserSize(el)
    }


    console.log("relatedItems", relatedItems)




    useEffect(() => {
        dispatch(singlePageData(id, category))
        dispatch(relatedItemsData(category, type, id))
    }, [id])





    return (
        <DIV>

            <div>
                <NavCategories />
            </div>
            {/* <FinalSingleProductLoader /> */}

            <div className='loader'>
                {
                    isLoading ? <FinalSingleProductLoader /> : isData ? (<div className='singleData'>
                        <div className='singleProduct' >

                            <div className='mainParentImage'>
                                <div className='cardBoxImage'>

                                    {/* <Image className='card_box'  src={data.images[index]} alt={data.title} /> */}
                                     <img className='card_box'   src={data.images[index]} alt="" />
                                </div>




                                {/* Main Image */}
                                <div className='smallImages' >
                                    {
                                        data.images.map((el, ind) => (
                                            <div key={ind}
                                                className='smallImageDiv'
                                                style={{
                                                    padding: "5px",
                                                    // marginRight: "10px",
                                                    border: ind === index ? '2px solid blue' : '',
                                                }} >
                                                <Image
                                                    onClick={() => { (setIndex(ind)) }}
                                                    // boxSize='70px'
                                                    objectFit='cover'
                                                    src={el}
                                                    alt='Dan Abramov'
                                                />
                                            </div>
                                        ))
                                    }
                                </div>




                            </div>

                            {/* Product Details */}

                            <div className='productDetails' style={{ padding: "20px" }}>

                                {/* brand and title */}
                                <Text fontSize='xl' fontWeight={'bold'} colorScheme='gray'>{data.brand}</Text>
                                <Text fontSize='md' fontWeight={'bold'} colorScheme='gray'>{data.category}</Text>
                                <Text fontSize='lg'>{data.title}</Text>


                                {/* special Price */}
                                <div style={{ paddingTop: "2px", marginRight: "5px", display: "flex" }}>
                                    <Text fontSize='sm' color={'green'} style={{ marginRight: "5px" }}>Special Price </Text>
                                    <span ><BiSolidOffer color='green' fontSize={'25px'} /></span>
                                </div>

                                {/* Price */}
                                <div style={{ display: "flex" }} >
                                    <div>
                                        <span style={{ fontWeight: "bolder" }}><FaRupeeSign fontSize={'30px'} /></span>
                                    </div>
                                    <Text fontSize='xl' fontWeight={'bold'}>{data.price}</Text>
                                </div>

                                {/* Color */}



                                <div>
                                    <Text fontSize='sm' style={{}}>Color: {data.color}</Text>
                                    <div className="color-circle" style={{ background: `${data.color}` }}></div>
                                </div>



                                {/* Sizes */}

                                {
                                    data.size.length > 0 && <div>
                                        <Text fontSize='sm' style={{}}>Select Size</Text>
                                    </div>
                                }

                                <div style={{ display: 'flex', flexWrap: "wrap" }}>

                                    {
                                        data.size.length > 0 && data.size.map((el, sizeInd) => (
                                            <div key={sizeInd} style={{
                                                margin: "10px", display: 'flex', padding: "5px",
                                                border: sizeInd === sizeIndex ? '2px solid blue' : '1px solid grey',
                                                // boxShadow: sizeInd === sizeIndex ? ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' : ''
                                            }}

                                                onClick={() => sizeHandler(el, sizeInd)}

                                            >
                                                <Button

                                                    variant={'none'} size='sm'>
                                                    {el}
                                                </Button>
                                            </div>
                                        ))
                                    }
                                </div>



                                {/* Bank Offers */}

                                <div style={{ marginTop: "20px" }}>

                                    <div style={{ display: "flex" }}>
                                        <div style={{ paddingTop: "2px", marginRight: "5px" }}>
                                            <MdLocalOffer color='green' />
                                        </div>
                                        <Text fontSize='sm' style={{ display: "flex" }}><span style={{ fontWeight: 'bolder', marginRight: "5px" }}>Bank Offer </span> 10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above</Text>
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div style={{ paddingTop: "2px", marginRight: "5px" }}>
                                            <MdLocalOffer color='green' />
                                        </div>
                                        <Text fontSize='sm' style={{ display: "flex" }}><span style={{ fontWeight: 'bolder', marginRight: "5px" }}>Bank Offer </span> 10% Instant Discount on Axis Bank Credit Card, up to ₹1250, on orders of ₹5,000 and above</Text>
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div style={{ paddingTop: "2px", marginRight: "5px" }}>
                                            <MdLocalOffer color='green' />
                                        </div>
                                        <Text fontSize='sm' style={{ display: "flex" }}><span style={{ fontWeight: 'bolder', marginRight: "5px" }}>Bank Offer </span> 5% off on Flipkart Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and above</Text>
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div style={{ paddingTop: "2px", marginRight: "5px" }}>
                                            <MdLocalOffer color='green' />
                                        </div>
                                        <Text fontSize='sm' style={{ display: "flex" }}><span style={{ fontWeight: 'bolder', marginRight: "5px" }}>Special PriceGet </span>  at flat ₹299</Text>
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div style={{ paddingTop: "2px", marginRight: "5px" }}>
                                            <MdLocalShipping color='red' fontSize={'30px'} />
                                        </div>
                                        <Text fontSize='sm' style={{ display: "flex" }}><span style={{ fontWeight: 'bolder', marginRight: "5px" }}>Free Delivery</span>on order above ₹499</Text>
                                    </div>



                                </div>

                                {/* Add To Cart */}

                                <div className='cartBtnAndWhilist' style={{ display: "flex", marginRight: "10px" }}>
                                    <div style={{ marginRight: "20px" }}>
                                        <SingleProductAddToCart category={category} id={id} userSize={userSize} type={data.category} />
                                    </div>

                                    <div>
                                        <SingleProductWhilist />

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Related Items */}


                    </div>
                    )
                        : null

                }


            </div>


            {
                isLoadingRelated ? null : isRelatedData ? (

                    <div>
                        <div style={{marginTop: "20px", marginBottom: "20px"}}>
                            <Heading as='h2' size={{ base: "sm", md: "md", lg: "lg" }} >
                                Related Items
                            </Heading>
                            {/* <Text fontSize={'lg'}>Related Items</Text> */}
                        </div>

                        <div>
                            {

                                <DIV className="slideshow-container">
                                    <Slider {...settings} className='slider'>
                                        { isRelatedData && relatedData.map((product, inde) => (
                                            <div key={inde}>
                                                <div className='main'>

                                                    {
                                                        product.map((el) => (
                                                            <Link to={`/singleProduct/${category}/${el._id}/${el.category}`}
                                                                onClick={() => {
                                                                    setIndex(0)
                                                                }}
                                                            >
                                                                <div key={el._id} className='imgDiv' style={{ marginRight: "20px", height: "250px" }}>
                                                                    <img className='sliderImage' src={el.images[0]} alt={el.title} width='200px' />

                                                                </div>
                                                            </Link>

                                                        ))
                                                    }






                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                    <div className="dot-indicators custom-dots">
                                        {isRelatedData && relatedData.map((_, index) => (
                                            <div >
                                                <span
                                                    key={index}
                                                    className={currentSlide === index ? 'active-dot' : 'dot'}
                                                    onClick={() => {
                                                        setCurrentSlide(index);

                                                        setSlideData(123)

                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </DIV>
                            }
                        </div>
                    </div>

                )
                    : null
            }




        </DIV>
    )
}



// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
const DIV = styled.div`

.singleProduct{
    display: flex;
    /* border: 2px solid red; */
    /* justify-content: space-between; */
}

.productDetails{
    /* border: 2px solid green; */
}

.loader{
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.singleData{

}


.color-circle {
    width: 30px; /* Adjust the size of the circle as needed */
    height: 30px; /* Adjust the size of the circle as needed */
    border-radius: 50%;
}


/* Container uiverse */

.smallImages{
    margin-top: 40px;
    /* display: flex;
    flex-wrap: wrap; */
    width: 75%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* border: 2px solid  #050505; */
}

.smallImageDiv{
    /* width: 70%; */
}

.mainParentImage{
    /* border: 5px solid black; */
    width: 35%;

}


/* .smallImages{
    display: flex;
    margin-top: 15px;
    flex-wrap: wrap;
} */



.card_box {
  position: relative;
  box-shadow: 0 25px 50px rgba(0,0,0,0.55);
  cursor: pointer;
  transition: all .3s;
  /* height: 500px; */
}

.card_box:hover {
  transform: scale(0.9);
}


@media screen and (max-width: 425px) {
      
    .singleProduct{
        flex-direction: column;
    }

    .smallImages{
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        gap: 0px;
    }

    .smallImageDiv{
        width: 50%;
    }


    .cartBtnAndWhilist{
        flex-direction: column;
    }

    .cartBtnAndWhilist > div{
        margin-bottom: 20px;
        
    }

    .card_box{
        /* height: 400px; */
    }

      
    }


    /* slider */

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

.smallImageDiv{
    /* border: 2px solid red; */
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

      .singleProduct{
        flex-direction: column;
      }

      .smallImageDiv{
        width: 50%;
      }

      .smallImages{
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 80px;
        gap: 5px;
      }

      .mainParentImage{
        width: 100%;
      }

      .cardBoxImag{
        /* border: 4px solid yellow; */
        /* height: 500px; */
    }
    
    
    
    .cad_box{
        width: 100%;
        /* height: 700px; */
        /* border: 5px solid red; */
      }

     
      
   
      
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
        width: 77%;
      }

      .sliderImage{
        height: 180px;
        width: 150px;
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
        width:89%;
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