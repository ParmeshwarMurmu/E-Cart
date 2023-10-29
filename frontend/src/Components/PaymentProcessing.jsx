import React, { useEffect, useState } from 'react'
import { SingleProductLoader } from "../Comp2/SingleProductLoader"
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
    }, [success, count])

    return (
        <DIV>

            {
                success ? <div>
                    <Heading as='h3' size='lg'>
                        Your order has beeen Placed Succesfully
                        Redrecting back in {count} seconds
                    </Heading>
                </div> : <div>
                    <SingleProductLoader />
                    <Heading as='h3' size='lg'>
                        Processing....
                    </Heading>
                </div>
            }



        </DIV>
    )
}


const DIV = styled.div`



`
