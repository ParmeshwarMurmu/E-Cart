import React from 'react'
import { AllProductsCard } from './AllProductsCard'
import { Heading } from '@chakra-ui/react'
import styled from 'styled-components'

export const AllOrderComp = ({ products, totalAmount, userDetail, userId, userName, _id, orderDate }) => {

    return (

        <DIV>

            <div>




                <div>
                    <Heading as='h1' size='md'>
                        User Name : {userName}
                    </Heading>
                </div>

                <div>
                    <Heading as='h6' size='xs'>
                        Total Amount : {totalAmount}
                    </Heading>
                </div>

                <div>
                    <Heading as='h4' size='xs'>
                        User Details
                    </Heading>

                    <Heading as='h4' size='xs'>
                        Payment Mode: {userDetail.paymentMode}
                    </Heading>

                    <Heading as='h4' size='xs'>
                        Order Date: {orderDate}
                    </Heading>

                    {/* user Details */}
                    <div>


                        <div>
                            State: {userDetail.state}
                        </div>

                        <div>
                            Address: {userDetail.address}

                        </div>

                        <div>
                            District: {userDetail.district}
                        </div>

                        <div>
                            Email: {userDetail.email}
                        </div>

                        <div>
                            Pincode: {userDetail.pincode}
                        </div>



                        <div>

                        </div>

                    </div>
                </div>


                {/* item Orderd */}

                <div className='itemOrdered'>


                    {
                        products.map((el) => (
                            <div key={el._id}>
                                <AllProductsCard {...el} id={_id}/>
                            </div>
                        ))
                    }

                </div>

            </div>

        </DIV>
    )
}

const DIV = styled.div`

border: 2px solid red;

.itemOrdered{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
}


    

`
