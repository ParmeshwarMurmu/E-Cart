import React, { useEffect, useState } from 'react'
import { ProcessingLoader } from "./ProcessingLoader"
import styled from "styled-components";
import { Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export const PaymentProcessing = () => {
    const [success, setSuccess] = useState(false)
    const [count, setCount] = useState(5)
    const navigate = useNavigate()


    useEffect(() => {
        const timer = setInterval(() => {
            if (success && count > 0) {
                setCount(prevCount => prevCount - 1);
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            setSuccess(true);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [success, count]);

    useEffect(() => {
        if (success && count === 0) {
            // Redirect once countdown is complete
            // history.push('/'); // Replace with your actual redirect path
            navigate('/')
        }
    }, [success, count]);

    return (
        <DIV>



            {
                success ? <div className='orderPlaced'>

                    <div>
                    <Heading as='h5' size='md' mb={"10px"}>
                        Your order has beeen Placed Succesfully.
                    </Heading>

                    <Heading as='h5' size='md'mb={"10px"}>
                        Your Item is ready to Shipped.
                    </Heading>

                    <div style={{display: "flex"}}>
                        <div style={{marginRight: "10px"}}>
                            <ProcessingLoader />
                        </div>
                        <Heading as='h5' size='md'pt={"10px"}>
                            Redrecting back in {count} seconds.
                        </Heading>
                    </div>

                    </div>

                </div> : <div className='processingContainer'>

                    <div className='alertPayment'>
                        <div>
                            <Heading as='h4' size='md'>
                                Please Wait
                            </Heading>
                            <Heading as='h5' size='md'>
                                Do not press back or refresh page
                            </Heading>
                        </div>
                    </div>


                    <div className='processing'>
                        <div style={{ marginRight: "10px" , paddingTop: "18px"}}>
                            <ProcessingLoader />
                        </div>
                        <Heading as='h3' size='md'pt={"10px"}>
                            Your Payment is Being Processed....
                        </Heading>
                    </div>
                </div>
            }



        </DIV>
    )
}


const DIV = styled.div`

/* display: flex;
justify-content: center;
align-items: center; */

width: 60%;
margin: auto;
height: 600px;


.processingContainer{
    background-color:  #FF8F00;
    /* border: 2px solid red; */
    box-shadow: 0 25px 50px rgba(0,0,0,0.55);
    position: relative;
    /* cursor: pointer; */
    transition: all .3s;
    height: 400px;
    padding-top: 30PX;
}

.alertPayment{
    display: flex;
    justify-content: center;
    align-items: center;

}

.processing{
    display: flex;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    
}

.orderPlaced{
    padding-top: 30px;
    background-color:  #FF8F00;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 25px 50px rgba(0,0,0,0.55);
    position: relative;
    /* cursor: pointer; */
    transition: all .3s;
    height: 400px;
}


`
