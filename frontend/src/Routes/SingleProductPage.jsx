import React, { useEffect, useState } from 'react'
import { SingleProductLoader } from '../Comp2/SingleProductLoader';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Image, Text } from '@chakra-ui/react';
import { BiSolidOffer } from 'react-icons/bi';
import { FaRupeeSign } from 'react-icons/fa';
import { MdLocalOffer, MdLocalShipping } from 'react-icons/md';
import styled from 'styled-components';
import axios from 'axios';
import { singlePageData } from '../Redux/SingleProductPage/action';
import { SingleProductAddToCart } from '../Comp2/SingleProductAddToCart';
import { RadioGroup } from '@headlessui/react'
import { SingleProductWhilist } from '../Comp2/SingleProductWhilist';


export const SingleProductPage = () => {

    const [index, setIndex] = useState(0)
    const [sizeIndex, setSizeIndex] = useState(-1)


    const { category, id } = useParams()
    const dispatch = useDispatch()

    const { isLoading, isError, data, isData } = useSelector((store) => {

        return {
            isLoading: store.singleProductPage.isLoading,
            isError: store.singleProductPage.isError,
            data: store.singleProductPage.data,
            isData: store.singleProductPage.isData,


        }
    }, shallowEqual)



    useEffect(() => {
        dispatch(singlePageData(id, category))
    }, [])

    console.log("isData", isData);
    console.log(data);


    return (
        <DIV>

            <div className='loader'>
                {
                    isLoading ? <SingleProductLoader />  : isData ? ( <div className='singleData'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>

                            <div>
                                <div>
                                    {/* <Box boxSize='sm'> */}
                                    <Image h={'500px'} src={data.images[index]} alt={data.title} />
                                    {/* </Box> */}
                                </div>


                                {/* Main Image */}
                                <div style={{ display: "flex", marginTop: "15px", }}>
                                    {
                                        data.images.map((el, ind) => (
                                            <div key={ind}
                                                style={{
                                                    padding: "5px",
                                                    marginRight: "10px",
                                                    border: ind === index ? '2px solid blue' : '',
                                                }} >
                                                <Image
                                                    onClick={() => { (setIndex(ind)) }}
                                                    boxSize='70px'
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

                            <div style={{ padding: "20px" }}>

                                {/* brand and title */}
                                <Text fontSize='xl' fontWeight={'bold'} colorScheme='gray'>{data.brand}</Text>
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
                                    data.size.length>0 && <div>
                                    <Text fontSize='sm' style={{}}>Select Size</Text>
                                </div>
                                }

                                <div style={{ display: 'flex' }}>

                                    {
                                       data.size.length>0 && data.size.map((el, sizeInd) => (
                                            <div key={sizeInd} style={{
                                                margin: "10px", display: 'flex', padding: "5px",
                                                border: sizeInd === sizeIndex ? '2px solid blue' : '1px solid grey',
                                                // boxShadow: sizeInd === sizeIndex ? ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' : ''
                                            }}
                                                onClick={() => { (setSizeIndex(sizeInd)) }}
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

                                <div style={{ display: "flex", marginRight: "10px"}}>
                                    <div style={{marginRight: "20px"}}>
                                        <SingleProductAddToCart />
                                    </div>

                                    <div>
                                        <SingleProductWhilist />

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    )
                    : null
                                

                                
                }

                
            </div>

        </DIV>
    )
}



// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
const DIV = styled.div`



.loader{
  display: flex;
  justify-content: center;
  align-items: center;
}

.singleData{
}


.color-circle {
    width: 30px; /* Adjust the size of the circle as needed */
    height: 30px; /* Adjust the size of the circle as needed */
    border-radius: 50%;
}



`