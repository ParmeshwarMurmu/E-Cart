import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import slideshow1 from '../Images/slideshow1.png'
import slideshow2 from '../Images/slideshow2.png'
import slideshow3 from '../Images/slideshow3.png'
import slideshow4 from '../Images/slideshow4.png'


export const HomeOfferSlideShow = () => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const arr = [
        slideshow3,
        slideshow1,
        slideshow2,
        slideshow4,
        
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the currentIndex, or reset to 0 if at the end
            setCurrentIndex((prevIndex) => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
        }, 2000); // Change the interval time as needed (e.g., 3000 milliseconds or 3 seconds)

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [currentIndex, arr.length]);



    return (
        <DIV>

            <div className="slideshow-container">
                <img src={arr[currentIndex]} alt={`Slide ${currentIndex}`} style={{ maxWidth: '100%' }} />
            </div>
        </DIV>



    )
}


const DIV = styled.div`

margin-bottom: 30px;

.slideshow-container{
    /* border:2px solid red; */
    width: 100%;
    
}

.slideshow-container img{
    width: 100%;
    height: 40%;
    /* height: 50px; */
}
`