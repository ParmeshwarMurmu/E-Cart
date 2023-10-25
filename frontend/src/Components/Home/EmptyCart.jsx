import React from 'react'
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { BsEmojiFrown } from "react-icons/bs";
import { Text } from '@chakra-ui/react';

export const EmptyCart = () => {
    return (
        <DIV>

            <div>
                <div className='emoji'>
                    <BsEmojiFrown fontSize={'40px'} style={{marginRight: "10px"}}/>
                    <Text fontSize='2xl'>Oops! Your Cart Is Empty</Text>
                </div>

                <div className='cartLogo'>
                    <FaShoppingCart fontSize={'200px'} />
                </div>
            </div>

        </DIV>
    )
}

const DIV = styled.div`



display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;

.emoji{
    display: flex;
    margin-right: 10px;
}

.cartLogo{

    display: flex;
    justify-content: center;
    align-items: center;
}

    
`
